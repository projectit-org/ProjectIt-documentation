import {Writable, writable} from 'svelte/store';

// info about ProjectIt
export const versionNumber = "0.2.0";

export let miniWindow: Writable<boolean> = writable<boolean>(false);

export let leftPanelVisible: Writable<boolean> = writable<boolean>(false);
export let rightPanelVisible: Writable<boolean> = writable<boolean>(false);
