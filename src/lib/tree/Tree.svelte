<!-- see https://svelte.dev/tutorial/svelte-self -->
<script lang="ts">
	import Leaf from './Leaf.svelte';
	import { Icon } from '@smui/common';
	// import { page } from '$app/stores';

	export let name: string;
	export let path: string;
	export let expanded = true;
	export let content;

	function toggle() {
		expanded = !expanded;
		// $page.path === path;
	}
	// TODO add functionality to make arrow keys run through the tree
</script>

<nav>
	<span>
		{#if expanded}
			<Icon class="material-icons" on:click={toggle}>arrow_drop_up</Icon> <a href={path}>{name}</a>
		{:else}
			<Icon class="material-icons" on:click={toggle}>arrow_drop_down</Icon> <a href={path}>{name}</a>
		{/if}
	</span>

	{#if expanded}
		<ul>
			{#each content as part}
				<li>
					{#if part.content}
						<svelte:self {...part}/>
					{:else}
						<Leaf {...part}/>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
    span {
        /*padding: 0 0 0 1.5em;*/
        font-weight: bold;
        cursor: pointer;
    }
    ul {
        padding: 0.2em 0 0 0.5em;
        margin: 0 0 0 0.5em;
        list-style: none;
        border-left: 1px solid var(--theme-colors-bg_app_bar);
    }
    li {
        padding: 0.2em 0;
    }
    nav a {
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
</style>
