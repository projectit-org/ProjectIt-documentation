<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@smui/common';
	export let name: string;
	export let path: string;
</script>

<span class:active={$page.path === {path}}><Icon class="material-icons">arrow_right</Icon> <a href={path}>{name}</a></span>

<style>
    span {
        padding: 0 0 0 1.5em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
    }
    a {
        /*display: flex;*/
        height: 100%;
        align-items: center;
        padding: 0 1em;
        color: var(--heading-color);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }
    a:hover {
        color: var(--accent-color);
    }
</style>
