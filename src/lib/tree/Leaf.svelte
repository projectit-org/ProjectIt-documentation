<script lang="ts">
	import { page } from '$app/stores';
	import { leftPanelVisible } from '../Store';
	export let name: string;
	export let path: string;

	const setActive = () => {
		console.log(`calling setActive: ${name}`)
		if ($page.path === path) {
			console.log(`setting active: ${name}`)
			$leftPanelVisible = false;
		}
	}
</script>

<span class:active={$page.path === {path}} on:mousedown={setActive()}><a href={path}>{name}</a></span>

<style>
    span {
        padding: 0 0 0 0.8em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
        white-space: nowrap;
    }
		span.active {
				background: var(--theme-colors-accent);
		}
    a {
        /*display: flex;*/
        height: 100%;
        align-items: center;
        /*padding: 0 1em;*/
        color: var(--theme-colors-color);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }
    a:hover {
        color: var(--pi-selected-color);
    }
    i {
        position: relative;
        /* Adjust these values to get the icons on the same baseline as the text */
        top: 5px;
        /*left: 5px;*/
    }
</style>
