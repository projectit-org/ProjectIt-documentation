<script lang="ts">

	import TreeView from '../lib/tree/TreeView.svelte';
	import SplitPane from '../lib/splitpane/SplitPane.svelte';
	import Footer from '../lib/footer/Footer.svelte';
	import AppBar from '../lib/appbar/AppBar.svelte';
</script>

<main class="main-window">
	<AppBar/>
	<div class="splitpane-container" >
		<SplitPane type='horizontal' pos={20}>
			<section class="splitpane-section" slot=a>
				<TreeView />
			</section>

			<section class="splitpane-section" slot=b>
				<slot />
			</section>
		</SplitPane>
	</div>
	<Footer/>
</main>

<style>
  .main-window {
      flex: 1;
      margin-top: var(--pi-header-height);
      margin-bottom: var(--pi-footer-height);
      position: relative;
      width: 100%;
      height: calc(100% - var(--pi-header-height) - var(--pi-footer-height) - 8px);
      box-sizing: border-box;
      border: var(--theme-colors-list_divider) 1px solid;
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
      border: var(--theme-colors-list_divider) 1px solid;
  }
</style>
