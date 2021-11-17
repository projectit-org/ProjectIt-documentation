import { writable } from 'svelte/store';
// info about ProjectIt
export const versionNumber = "0.2.0";
export const miniWindow = writable(false);
export const leftPanelVisible = writable(false);
// a global ==> hack instead of using svg for projectit logo
export const darkMode = writable(false);
//# sourceMappingURL=Store.js.map