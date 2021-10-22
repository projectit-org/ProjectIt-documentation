<script lang="ts">

	import TreeView from '../lib/tree/TreeView.svelte';
	import SplitPane from '../lib/splitpane/SplitPane.svelte';
</script>

<main class="main-window">
	<div class="splitpane-container" >
		<SplitPane type='horizontal' pos={20}>
			<section class="splitpane-section" slot=a>
				<div class='extra'>
					<TreeView />
				</div>
			</section>

			<section class="splitpane-section" slot=b>
				<div class='extra'>
					<slot />
				</div>
			</section>
		</SplitPane>
	</div>
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	/*main {*/
	/*	flex: 1;*/
	/*	display: flex;*/
	/*	flex-direction: column;*/
	/*	padding: 1rem;*/
	/*	width: 100%;*/
	/*	max-width: 1024px;*/
	/*	margin: 0 auto;*/
	/*	box-sizing: border-box;*/
	/*}*/

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	/*@media (min-width: 480px) {*/
	/*	footer {*/
	/*		padding: 40px 0;*/
	/*	}*/
	/*}*/
	.extra {
      position: relative;
      width: 90%;
			height: 100%;
      border: var(--theme-colors-list_divider) 1px solid;
      padding: 6px;
	}
  .main-window {
      flex: 1;
      margin-top: var(--pi-header-height);
      margin-bottom: var(--pi-footer-height);
      position: relative;
      width: 100%;
      height: calc(100% - var(--pi-header-height) - var(--pi-footer-height) - 8px);
      box-sizing: border-box;
      /*border: var(--theme-colors-list_divider) 1px solid;*/
  }
  .splitpane-container {
      position: relative;
      width: 100%;
      height: 100%;
  }
  .splitpane-section {
      position: relative;
      height: 100%;
      box-sizing: border-box;
  }
</style>
