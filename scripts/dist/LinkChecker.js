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
exports.LinkChecker = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const searchDir = "../src/routes";
const logFile = "../src/CHECK.txt";
class LinkChecker {
    constructor() {
        this.correctRoutes = [];
        this.totalErrors = 0;
        this.totalWarnings = 0;
        this.result = [];
        this.logOnly = false;
    }
    check(logOnly) {
        this.correctRoutes = [];
        this.totalErrors = 0;
        this.totalWarnings = 0;
        this.result = [];
        this.logOnly = logOnly;
        this.getRoutes(searchDir);
        this.checkFolder(searchDir);
        this.addToResult(`Total errors: ${this.totalErrors}, total warnings: ${this.totalWarnings}.`);
        fs.writeFileSync(logFile, this.result.map(line => line).join("\n"));
    }
    addToResult(line) {
        this.result.push(line);
        if (!this.logOnly) {
            console.log(line);
        }
    }
    checkFile(filepath) {
        const content = fs.readFileSync(filepath, 'utf8');
        const splitted = content.split("\n");
        let errors = [];
        let warnings = [];
        for (let i = 0; i < splitted.length; i++) {
            let line = splitted[i].trim();
            if (line.includes("](")) {
                line = line.replace(/[a-zA-Z0-9 \.,\*\/:()-_'"`]*\[/, '\[');
                line = line.replace(/\)[a-zA-Z0-9 \.,\*\/:()-_'"`]*$/, ')');
                let link = line.replace(/\[[a-zA-Z0-9 \.,\*\/:()-_'"`]*\]/, "");
                link = link.replace(/\(/, '');
                link = link.replace(/\)/, '');
                link = link.replace(/\#[a-zA-Z0-9-_]*/, '');
                if (!this.correctRoutes.includes(link)) {
                    errors.push(`${link}, on line ${i + 1}`);
                }
                else if (!link.startsWith("/")) {
                    warnings.push(`${line}, on line ${i + 1}`);
                }
            }
            if (line.includes("TODO")) {
                warnings.push(`TODO remaining on line ${i + 1}`);
            }
        }
        if (errors.length > 0) {
            this.addToResult(`Found ${errors.length} incorrect link(s) in file ${path.relative(searchDir, filepath)}:`);
            for (let i = 0; i < errors.length; i++) {
                this.addToResult("\t" + errors[i]);
            }
            this.totalErrors += errors.length;
        }
        if (warnings.length > 0) {
            this.addToResult(`Found ${warnings.length} warnings in file ${path.relative(searchDir, filepath)}:`);
            for (let i = 0; i < warnings.length; i++) {
                this.addToResult("\t" + warnings[i]);
            }
            this.totalWarnings += warnings.length;
        }
    }
    checkFolder(folder) {
        if (!fs.existsSync(folder)) {
            console.error(this, "cannot find folder '" + folder + "'");
            return null;
        }
        if (!fs.lstatSync(folder).isDirectory()) {
            console.error(this, "'" + folder + "' is not a folder");
            return null;
        }
        const files = fs.readdirSync(folder);
        for (const file of files) {
            const filepath = path.join(folder, file);
            const stat = fs.lstatSync(filepath);
            if (!stat.isDirectory()) {
                if (path.extname(filepath) === ".md" || path.extname(filepath) === ".svelte") {
                    this.checkFile(filepath);
                }
            }
            else {
                this.checkFolder(filepath);
            }
        }
    }
    getRoutes(folder) {
        if (!fs.existsSync(folder)) {
            console.error(this, "cannot find folder '" + folder + "'");
            return null;
        }
        if (!fs.lstatSync(folder).isDirectory()) {
            console.error(this, "'" + folder + "' is not a folder");
            return null;
        }
        const files = fs.readdirSync(folder);
        for (const file of files) {
            const filepath = path.join(folder, file);
            const stat = fs.lstatSync(filepath);
            if (!stat.isDirectory()) {
                if (path.basename(filepath, ".md") !== "index" && path.basename(filepath, ".svelte") !== "index") {
                    if (path.extname(filepath) === ".md" || path.extname(filepath) === ".svelte") {
                        this.addRoute(filepath);
                    }
                }
            }
            else {
                this.addRoute(filepath);
                this.getRoutes(filepath);
            }
        }
    }
    addRoute(filepath) {
        let newFilepath = '';
        if (path.extname(filepath) === ".md") {
            newFilepath = path.join(path.dirname(filepath), path.basename(filepath, '.md'));
        }
        else if (path.extname(filepath) === ".svelte") {
            newFilepath = path.join(path.dirname(filepath), path.basename(filepath, '.svelte'));
        }
        else {
            newFilepath = filepath;
        }
        this.correctRoutes.push("/" + path.relative(searchDir, newFilepath).replace(/\\/g, "/"));
        const unstripped = path.basename(filepath);
        const stripped = unstripped.replace(/^[0-9][0-9][0-9]/, "");
        if (unstripped === stripped && !unstripped.startsWith("__")) {
            this.addToResult(`File or folder ${filepath} does not yet adhere to the number convention.`);
            this.totalWarnings += 1;
        }
    }
}
exports.LinkChecker = LinkChecker;
new LinkChecker().check(false);
//# sourceMappingURL=LinkChecker.js.map