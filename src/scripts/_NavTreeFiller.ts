import * as fs from 'fs';
import * as path from 'path';

/**
 * Identical to /src/lib/tree/NavTree, but included here to avoid Node.js errors
 */
class NavTree {
	constructor(name: string, path: string, content: NavTree[]) {
		this.name = name;
		this.path = path;
		this.content = content;
	}

	name: string;
	path: string;
	content?: NavTree[];
}

export class _NavTreeFiller {
	test() {
		this.generateNavTree();
	}

	printNavTree(result: NavTree, indent:number): string {
		if (result !== null) {
			let prefix: string = '\n';
			for (let i = 0; i < indent; i++) {
				prefix = prefix + '   ';
			}
			let contentStr: string = '';
			if (result.content.length > 0) {
				contentStr = "," + prefix + "  content: [";
				for (const tree of result.content) {
					contentStr = contentStr.concat(this.printNavTree(tree, indent + 1));
				}
				contentStr = contentStr + prefix + "         ]";
			}
			return`${prefix}{ name: '${result.name}', path: '${result.path}'${contentStr}},`;
		}
	}
	
	generateNavTree() {
		const myTree: NavTree = this.readFileStructure('../routes');
		if (!myTree) {
			console.log("Could not read '../routes'");
			return;
		}
		// template
		const navContent: string = `<script lang="ts">
	import Tree from './Tree.svelte';
	import { NavTree } from './NavTree';
	
	let root: NavTree[] = [${myTree.content.map(elem => this.printNavTree(elem, 2)).join("")}];
	</script>
	
	<div class='navigator'>
		<Tree content={root} expanded/>
	</div>
	
	<style>
		.navigator {
			position: relative;
			width: 100%;
			heigth: 100%;
			background: var(--theme-colors-bg_color);
		}
	</style>`;
		// end template

		try {
			fs.writeFileSync('../lib/tree/TreeView.svelte', navContent);
		} catch (e) {
			console.log(e, e.stack);
		}
	}

	readFileStructure(startPath: string): NavTree {
		// read the routes folder
		return this.findFiles(startPath, startPath);
	}

	/**
	 * startPath: the folder where the files should be located
	 */
	public findFiles(startPath: string, ignore: string): NavTree {
		if (!fs.existsSync(startPath)) {
			console.error(this, "cannot find folder '" + startPath + "'");
			return null;
		}
		if (!fs.lstatSync(startPath).isDirectory()) {
			console.error(this, "'" + startPath + "' is not a folder");
			return null;
		}
		// get name and path of each file

		const content: NavTree[] = [];
		const files = fs.readdirSync(startPath);
		for (const file of files) {
			const filepath = path.join(startPath, file);
			const stat = fs.lstatSync(filepath);
			if (!stat.isDirectory()) {
				// if file starts with underscore ignore it, it is private
				// if file is named 'index', ignore it - it is already included by the use of name and path of parent folder
				if (file[0] !== '_' && !file.startsWith('index.')) {
					const pathObject = path.parse(filepath);
					// replace all underscores and dashes by spaces in the name, but not in the path
					// start the name with an uppercase character
					const name = this.startWithUpperCase(pathObject.name.replace(/[_\\-]/g, ' '));
					// ignore the start of the path if it is equal to 'ignore'
					// no need to replace "\"by "/" for svelteKit, but it is easier to generate - no escapes necessary
					const pathStr = (this.getBasePath(ignore, startPath) + path.sep + pathObject.name).replace(/\\/g, '/');
					// now create a new content element
					content.push(new NavTree(name, pathStr, []));
				}
			} else {
				if (file[0] !== '_') { // ignore private directories
					content.push(this.findFiles(filepath, ignore));
				}
			}
		}
		const startName = this.startWithUpperCase(path.parse(path.relative(ignore, startPath)).name);
		return new NavTree(startName, this.getBasePath(ignore, startPath).replace(/\\/g, '/'), content);
	}

	/**
	 * Returns the base path relative to ignore, prefixed with a path separator
	 * @param ignore
	 * @param startPath
	 * @private
	 */
	private getBasePath(ignore: string, startPath: string) {
		let pathStr = path.relative(ignore, startPath);
		// if there is a path then prefixed it with a separator
		if (pathStr.length > 0) {
			pathStr = path.sep + pathStr;
		}
		return pathStr;
	}

	private startWithUpperCase(word: string): string {
		if (!!word) {
			return word[0].toUpperCase() + word.substr(1);
		}
		return "";
	}
}

new _NavTreeFiller().test();
