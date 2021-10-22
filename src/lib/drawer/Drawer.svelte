<div class="drawer-container">
	<!-- Don't include fixed={false} if this is a page wide drawer.
				It adds a style for absolute positioning. -->
	<Drawer variant="modal" bind:open>
		<Header>
			<Title>Contents</Title>
		</Header>
		<Content>
			<TreeView/>
		</Content>
	</Drawer>

	<!-- Don't include fixed={false} if this is a page wide drawer.
				It adds a style for absolute positioning. -->
	<Scrim />
	<AppContent class="app-content">
		<main class="main-content">
			<slot name='content'/>
		</main>
	</AppContent>
</div>

<script lang="ts">
	import Drawer, {
		AppContent,
		Content,
		Header,
		Title,
		Scrim
	} from '@smui/drawer';
	import TreeView from '../tree/TreeView.svelte';
	import { leftPanelVisible } from '../Store';

	let open = $leftPanelVisible;

</script>

<style>
    /* These classes are only needed because the
			drawer is in a container on the page. */
    .drawer-container {
        position: relative;
        display: flex;
        height: 350px;
        max-width: 600px;
        border: 1px solid
        var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
        overflow: hidden;
        z-index: 0;
    }

    * :global(.app-content) {
        flex: auto;
        overflow: auto;
        position: relative;
        flex-grow: 1;
    }

    .main-content {
        overflow: auto;
        padding: 16px;
        height: 100%;
        box-sizing: border-box;
    }
</style>
