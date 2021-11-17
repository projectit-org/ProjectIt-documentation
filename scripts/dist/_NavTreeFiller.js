"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._NavTreeFiller = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const contentFolder = '../src/routes';
const outputFile = '../src/lib/tree/TreeView.svelte';
class NavTree {
    constructor(name, path, content) {
        this.name = name;
        this.path = path;
        this.content = content;
    }
}
class _NavTreeFiller {
    generateNavTree() {
        const myTree = this.readFileStructure(contentFolder);
        if (!myTree) {
            console.log(`Could not read folder '${contentFolder}'`);
            return;
        }
        const navContent = `<script lang="ts">
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
        try {
            fs.writeFileSync(outputFile, navContent);
        }
        catch (e) {
            console.log(e, e.stack);
        }
    }
    readFileStructure(startPath) {
        return this.readFiles(startPath, startPath);
    }
    readFiles(folder, ignore) {
        if (!fs.existsSync(folder)) {
            console.error(this, "cannot find folder '" + folder + "'");
            return null;
        }
        if (!fs.lstatSync(folder).isDirectory()) {
            console.error(this, "'" + folder + "' is not a folder");
            return null;
        }
        const content = [];
        const files = fs.readdirSync(folder).sort();
        for (const file of files) {
            const filepath = path.join(folder, file);
            const stat = fs.lstatSync(filepath);
            if (file[0] !== '_') {
                if (!stat.isDirectory()) {
                    if (!file.startsWith('index.')) {
                        const fileName = path.parse(filepath).name;
                        content.push(new NavTree(this.createName(fileName), this.createPath(ignore, folder, fileName), []));
                    }
                }
                else {
                    content.push(this.readFiles(filepath, ignore));
                }
            }
        }
        const startName = this.createName(path.parse(path.relative(ignore, folder)).name);
        return new NavTree(startName, this.createPath(ignore, folder), content);
    }
    createName(fileName) {
        let myName = fileName;
        if (!!fileName && fileName.length > 0) {
            if (myName.match(/^[0-9]+_/)) {
                myName = myName.replace(/^[0-9]+_/, '');
            }
            myName = myName.replace(/[_\\-]/g, ' ');
            myName = myName[0].toUpperCase() + myName.substr(1);
        }
        return myName;
    }
    createPath(ignore, folder, fileName) {
        let pathStr = path.relative(ignore, folder);
        if (pathStr.length > 0) {
            pathStr = path.sep + pathStr;
        }
        if (!!fileName && fileName.length > 0) {
            pathStr = (pathStr + path.sep + fileName);
        }
        pathStr = pathStr.replace(/\\/g, '/');
        return pathStr;
    }
    navTreeToString(result, indent) {
        if (result !== null) {
            let prefix = '\n';
            for (let i = 0; i < indent; i++) {
                prefix = prefix + '   ';
            }
            let contentStr = '';
            if (result.content.length > 0) {
                contentStr = "," + prefix + "  content: [";
                for (const tree of result.content) {
                    contentStr = contentStr.concat(this.navTreeToString(tree, indent + 1));
                }
                contentStr = contentStr + prefix + "         ]";
            }
            return `${prefix}{ name: '${result.name}', path: '${result.path}'${contentStr}},`;
        }
        return '';
    }
}
exports._NavTreeFiller = _NavTreeFiller;
new _NavTreeFiller().generateNavTree();
//# sourceMappingURL=_NavTreeFiller.js.map