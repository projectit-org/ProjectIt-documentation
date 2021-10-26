import * as fs from 'fs';
import * as path from 'path';

const contentFolder: string = '../src/routes';
const outputFile: string = '../src/lib/tree/TreeView.svelte';

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

	/**
	 * Reads the file structure under 'contentFolder' and generates a nav array in
	 * file 'outputFile'.
	 */
	generateNavTree() {
		const myTree: NavTree = this.readFileStructure(contentFolder);
		if (!myTree) {
			console.log(`Could not read folder '${contentFolder}'`);
			return;
		}
		// start template
		const navContent: string = `<script lang="ts">
	import Tree from './Tree.svelte';
	import { NavTree } from './NavTree';
	
	let root: NavTree[] = [${myTree.content.map(elem => this.navTreeToString(elem, 2)).join("")}];
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
			fs.writeFileSync(outputFile, navContent);
		} catch (e) {
			console.log(e, e.stack);
		}
	}

	/**
	 * Wraps the recursive 'findFiles' method
	 * @param startPath: the folder where the files are located
	 * @private
	 */
	private readFileStructure(startPath: string): NavTree {
		// read the routes folder, indicated by 'startPath'
		return this.findFiles(startPath, startPath);
	}

	/**
	 *
	 * @param folder: the folder where the files are located
	 * @param ignore: the path up till the the folder where the files are located
	 * @private
	 */
	private findFiles(folder: string, ignore: string): NavTree {
		if (!fs.existsSync(folder)) {
			console.error(this, "cannot find folder '" + folder + "'");
			return null;
		}
		if (!fs.lstatSync(folder).isDirectory()) {
			console.error(this, "'" + folder + "' is not a folder");
			return null;
		}

		const content: NavTree[] = [];
		// get content of the folder and sort the names alphabetically
		const files = fs.readdirSync(folder).sort();
		for (const file of files) {
			const filepath = path.join(folder, file);
			const stat = fs.lstatSync(filepath);
			// if file/folder starts with underscore ignore it, it is private
			if (file[0] !== '_') {
				if (!stat.isDirectory()) {
					// if file is named 'index', ignore it - it is already included by through the parent folder
					if (!file.startsWith('index.')) {
						// create a new content element and add it to the result
						const fileName: string = path.parse(filepath).name;
						content.push(new NavTree(this.createName(fileName),  this.createPath(ignore, folder, fileName), []));
					}
				} else {
					// add all subfolders to the result
					content.push(this.findFiles(filepath, ignore));
				}
			}
		}
		// create the name for a folder based on path relative from 'ignore'
		const startName = this.createName(path.parse(path.relative(ignore, folder)).name);
		// no need to replace "\" by "/" for svelteKit, but it is easier to generate - no escapes necessary
		return new NavTree(startName, this.createPath(ignore, folder), content);
	}

	/**
	 * Finds the name to be shown in the navigation tree based on the file name
	 * @param fileName: name of the file
	 * @private
	 */
	private createName(fileName: string) {
		let myName: string = fileName;
		if (!!fileName && fileName.length > 0) {
			// remove the number prefix
			if (myName.match(/^[0-9]+_/)) {
				myName = myName.replace(/^[0-9]+_/, '');
			}
			// replace all underscores and dashes by spaces
			myName = myName.replace(/[_\\-]/g, ' ');
			// start the name with an uppercase character
			myName = myName[0].toUpperCase() + myName.substr(1);
		}
		return myName;
	}

	/**
	 * Finds the path to use based on the three parameters
	 * @param ignore: the path up till the folder where the files are located
	 * @param folder: the folder where the file is located, or the folder for which we create the path
	 * @param fileName: if present, name of the file, else we are handling a folder
	 * @private
	 */
	private createPath(ignore: string, folder: string, fileName?: string) {
		// ignore the start of the path if it is equal to 'ignore'
		let pathStr = path.relative(ignore, folder);
		// if there is a path then prefixed it with a separator
		if (pathStr.length > 0) {
			pathStr = path.sep + pathStr;
		}
		// if there is a fileName (it is a file, not a folder) then add it to the result
		if (!!fileName && fileName.length > 0) {
			pathStr = (pathStr + path.sep + fileName);
		}
		// no need to replace "\" by "/" for svelteKit, but it is easier to generate - no escapes necessary
		pathStr = pathStr.replace(/\\/g, '/');
		return pathStr;
	}

	/**
	 * Creates the string for the nav tree to be included in the template
	 * @param result
	 * @param indent
	 * @private
	 */
	private navTreeToString(result: NavTree, indent:number): string {
		if (result !== null) {
			let prefix: string = '\n';
			for (let i = 0; i < indent; i++) {
				prefix = prefix + '   ';
			}
			let contentStr: string = '';
			if (result.content.length > 0) {
				contentStr = "," + prefix + "  content: [";
				for (const tree of result.content) {
					contentStr = contentStr.concat(this.navTreeToString(tree, indent + 1));
				}
				contentStr = contentStr + prefix + "         ]";
			}
			return`${prefix}{ name: '${result.name}', path: '${result.path}'${contentStr}},`;
		}
		return '';
	}
}

new _NavTreeFiller().generateNavTree();
