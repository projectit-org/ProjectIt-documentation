<!-- see https://svelte.dev/tutorial/svelte-self -->
<script lang="ts">
	import { page } from '$app/stores';
	import Leaf from './Leaf.svelte';
	import { leftPanelVisible } from '../Store';

	export let name: string = '';
	export let path: string = '';
	export let expanded = true;
	export let content;
	let active: boolean = false;
	$: active = ($page.path === path);
	$: if (active) expanded = true;

	function toggle() {
		expanded = !expanded;
		$leftPanelVisible = false;
	}
	// TODO add functionality to make arrow keys run through the tree
</script>

<div class='navTree'>
	<nav>
		{#if name?.length > 0}
		<span class='textInTree' class:active={active} >
			{#if expanded}
				<i class="material-icons" on:click={toggle}>arrow_drop_down</i> <a href={path}>{name}</a>
			{:else}
				<i class="material-icons" on:click={toggle}>arrow_right</i> <a href={path}>{name}</a>
			{/if}
		</span>
		{/if}

		{#if ( active) }
			<span> JA ik ben actief!!!</span>
			{/if}
		{#if ( expanded) }
			<span> JA ik ben expanded!!!</span>
		{/if}
		{#if (expanded || active) }
			<ul class:hasName={name?.length > 0}>
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
</div>

<style>
		.navTree {
				margin-left: -0.1em;
		}
    .textInTree {
        /*padding: 0 0 0 1.5em;*/
        font-weight: bold;
        cursor: pointer;
        white-space: nowrap;
    }
    .textInTree:hover {
        color: var(--pi-selected-color);
    }
    .textInTree.active a {
        background: white;
        /*color: lavender;*/
        /*font-style: italic;*/
        padding: 0.1em 0.3em 0.1em 0.3em;
        margin-left: -0.3em;
    }
    ul {
        padding: 0 0 0 0em;
        margin: 0 0 0 0.5em;
				list-style: none;
        border-left: none;
    }
    ul.hasName {
        padding: 0 0 0 0.8em;
        margin: 0 0 0 0.5em;
        list-style: none;
        border-left: 1px solid var(--theme-colors-bg_app_bar);
    }
    li {
        padding: 0.1em 0;
    }
    nav a {
        height: 100%;
        align-items: center;
        color: var(--theme-colors-color);
        font-size: 0.9rem;
        transition: color 0.2s linear;
        text-decoration: none;
    }
    a:hover {
        color: var(--pi-selected-color);
    }
		i {
        position: relative;
        /* Adjust these values to get the icons on the same baseline as the text */
        top: 8px;
        left: -3px;
		}
</style>
