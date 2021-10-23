<!-- see https://svelte.dev/tutorial/svelte-self -->
<script lang="ts">
	import Leaf from './Leaf.svelte';
	import { leftPanelVisible } from '../Store';

	export let name: string;
	export let path: string;
	export let expanded = true;
	export let content;

	function toggle() {
		expanded = !expanded;
		$leftPanelVisible = false;
	}
	// TODO add functionality to make arrow keys run through the tree
</script>

<div class='navTree'>
	<nav>
		<span class='textInTree'>
			{#if expanded}
				<i class="material-icons" on:click={toggle}>arrow_drop_down</i> <a href={path}>{name}</a>
			{:else}
				<i class="material-icons" on:click={toggle}>arrow_right</i> <a href={path}>{name}</a>
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
</div>

<style>
		navTree {
				width: 30em; /* 30 times the font size */
				min-width: 30em;
				height: 100vh;
				position: relative;
		}
    .textInTree {
        /*padding: 0 0 0 1.5em;*/
        font-weight: bold;
        cursor: pointer;
        white-space: nowrap;
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
		i {
        position: relative;
        /* Adjust these values to get the icons on the same baseline as the text */
        top: 8px;
        left: -3px;
		}
</style>
