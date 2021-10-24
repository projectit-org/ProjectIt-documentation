<script lang="ts">
	import { page } from '$app/stores';
	import { leftPanelVisible } from '../Store';
	export let name: string;
	export let path: string;

	const setActive = () => {
		console.log(`calling setActive: ${name}`)
		if ($page.path === path) {
			console.log(`setting active: ${name}`)
			// $leftPanelVisible = false;
		}
	}
</script>

<span class:active={$page.path === path} on:mousedown={setActive}><a class="myText" class:active={$page.path === path} href={path}>{name}</a></span>

<style>
    span {
        padding: 0 0 0 0.5em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
        white-space: nowrap;
    }
    span.active a {
        background: white;
				padding: 0.1em 0.3em 0.1em 0.3em;
				margin-left: -0.3em;
    }
    .myText {
        height: 100%;
        align-items: center;
        color: var(--theme-colors-color);
        font-size: 0.9rem;
        text-decoration: none;
        transition: color 0.2s linear;
    }
    .myText:hover {
        color: var(--theme-colors-accent);
    }
</style>
