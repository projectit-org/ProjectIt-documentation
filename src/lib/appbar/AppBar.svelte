<!-- The AppBar is always shown at the top of the viewport -->
<!-- It contains the menus, the name of the language, and ... -->

<div class="app-bar">
	{#if $miniWindow}
		<!-- this button is shown only when the viewport is small -->
		<!-- it is used to open the left panel which shows the navigator -->
		<!-- the title is also smaller in a small viewport		-->
		<IconButton class="material-icons" on:click={() => {$leftPanelVisible = true;}}>menu</IconButton>
		<div class="title">PI Documentation</div>
	{:else}
		<div class="title">ProjectIt Documentation</div>
	{/if}

	<a target="_blank" href="https://github.com/projectit-org/ProjectIt">
		<img src="/github-seeklogo.com.svg"  color="red" alt="ProjectIt on GitHub" width='24' height='24'/>
	</a>
	{#if !$miniWindow}
		<!-- normally, the brand icon is shown-->
		<a target="_blank" href="http://www.projectit.org">
			<img src="/projectit-logo-inverse-colors.png"  style="color:red" alt="ProjectIt Logo" height='24'>
		</a>
	{/if}

</div>

<script lang="ts">
	// import { Button, Icon } from "";
	//
	// import projectit_logo from "../assets/icons/svg/projectit-logo.svg";
	// import question_mark from "../assets/icons/svg/help_24px.svg";
	// import menu from "../assets/icons/svg/menu_black_24dp.svg";
	//
	import { miniWindow, leftPanelVisible, rightPanelVisible } from "../Store";
	// import { languageName } from "../webapp-ts-utils/WebappStore";
	// import MenuGroup from "../menu/MenuGroup.svelte";
	// import ThemeToggle from "../theming/ThemeToggle.svelte";
	import IconButton from "@smui/button";
</script>

<style>
	.app-bar {
		display: flex;
		align-items: center;
		height: var(--pi-header-height);
		color: var(--theme-colors-text_app_bar);
		background: var(--theme-colors-bg_app_bar);
		font-size: var(--pi-header-font-size);
		line-height: 1;
		min-width: inherit;
		padding: 0 4px 0 6px;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 20;
	}
	.title {
		flex: 1;
		margin-left: 0.5rem;
		white-space: nowrap;
		text-align: center;
		color: var(--theme-colors-inverse_color);
	}

	img{
		max-width: 180px;
		max-height: calc(var(--pi-header-height) - 5px);
		margin-top: 3px;
		margin-bottom: 3px;
		margin-left: auto;
		margin-right: 10px;
	}
</style>
