import {writable} from 'svelte/store';

// info about ProjectIt
export const versionNumber = "0.2.0";

export const miniWindow = writable<boolean>(false);

export const leftPanelVisible = writable<boolean>(false);
