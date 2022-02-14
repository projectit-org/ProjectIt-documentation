import preprocess from 'svelte-preprocess';
// import {markdown} from 'svelte-preprocess-markdown';
import {mdsvex} from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [preprocess(),mdsvex({ extensions: ['.svx', '.md'] })],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null
		})
	}
};

export default config;
