// reads all files from the old website and creates the same content in the new format

import * as fs from 'fs';
import * as path from 'path';

const previousSiteFolder: string = './version-0.1.0/pages';
const nextSiteFolder: string = './version-0.2.0/pages';

export class AdocToMd {
	generateAll() {
		this.createDirIfNotExisting(nextSiteFolder);
		// read the files and transform them one by one
		this.transformFolder(previousSiteFolder);
	}

	private transformFolder(folder: string) {
		if (!fs.existsSync(folder)) {
			console.error(this, "cannot find folder '" + folder + "'");
			return null;
		}
		if (!fs.lstatSync(folder).isDirectory()) {
			console.error(this, "'" + folder + "' is not a folder");
			return null;
		}

		// create the new folder
		let newFolder = path.relative(previousSiteFolder, folder);
		// remove the old path prefix
		newFolder = path.join(nextSiteFolder, newFolder);
		// add the new path prefix
		this.createDirIfNotExisting(newFolder);
		// get content of the folder
		const files = fs.readdirSync(folder);
		for (const file of files) {
			const filepath = path.join(folder, file);
			const stat = fs.lstatSync(filepath);
			if (!stat.isDirectory()) {
				// if file does not have extension .adoc, ignore it
				if (path.extname(filepath) === ".adoc") {
					this.transformFile(path.relative(previousSiteFolder, filepath));
				}
			} else {
				// do all subFolders
				this.transformFolder(filepath);
			}
		}
	}

	transformFile(filepath: string) {
		// console.log(`transforming file ${filepath}`);
		// read the old file and create new content
		let oldContents: string = fs.readFileSync(path.join(previousSiteFolder, filepath), { encoding: "utf8" });
		// see https://docs.asciidoctor.org/asciidoc/latest/asciidoc-vs-markdown/#comparison-by-example
		// remove the prefix
		let contents = oldContents.replace(/:page-title: [_a-zA-Z0-9 -]*/g, "");
		contents = contents.replace(/:page-nav_order: [0-9]*/g, "");
		contents = contents.replace(/:page-parent: [_a-zA-Z0-9 -]*/g, "");
		contents = contents.replace(/:imagesdir: [_a-zA-Z0-9 -\.\/]*/g, "");
		contents = contents.replace(/:src-dir: [_a-zA-Z0-9 -\.\/]*/g, "");
		contents = contents.replace(/:source-language: [_a-zA-Z0-9 ]*/g, "");
		contents = contents.replace(/:listing-caption: [_a-zA-Z0-9 -]*/g, "");

		// remove inline-anchors
		contents = contents.replace(/\[\[[_a-zA-Z0-9 -]*\]\]/g, "");

		// replace the heading tags
		contents = contents.replace(/=== /g, "### ");
		contents = contents.replace(/== /g, "## ");
		contents = contents.replace(/= /g, "# ");

		// replace the code block tags
		contents = contents.replace(/----/g, "```");

		// replace the bold tag
		contents = contents.replace( /\*/g, "**");

		// replace the unordered lists tags - these are doubled by the previous statement!!!
		contents = contents.replace(/\*\* /g, "\* ");
		contents = contents.replace(/\*\*\*\* /g, "\t\* ");

		// replace the italic tag
		contents = contents.replace( /_/g, "*");

		// replace the include tag with something that embedme understands
		contents = contents.replace(/include::/g, "// ");

		// remove {src-dir} - embedme takes this as parameter
		contents = contents.replace(/{src-dir}\//g, "");

		// create the new file-name by taking the old folder path
		// (e.g. '/foo/bar/baz/asdf' from '/foo/bar/baz/asdf/quux.adoc'),
		// joined the with the file name without extension (e.g. 'quux')
		// with the new extension added (e.g. 'quux.md')
		let newFilepath = path.join(path.dirname(filepath), path.basename(filepath, '.adoc').concat('.md'));
		// write the content to a new file within the next site
		let pathName: string = path.join(nextSiteFolder, newFilepath);
		// if (!fs.existsSync(pathName)) {
			console.log(`writing file '${pathName}'`)
			fs.writeFileSync(pathName, contents);
		// } else {
		// 	console.log(`AdocToMd: user file '${pathName}' already exists, skipping it.`);
		// }
	}

	private createDirIfNotExisting(dir: string) {
		const parts = dir.split("/");
		let current = ".";
		for (const part of parts) {
			current = current + "/" + part;
			if (!fs.existsSync(current)) {
				console.log("creating folder: [" + dir + "]");
				fs.mkdirSync(current);
			}
		}
	}
}

// new AdocToMd().generateAll();
new AdocToMd().transformFile("intro/modelunits.adoc");
