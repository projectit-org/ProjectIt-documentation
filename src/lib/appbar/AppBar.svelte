<!-- The AppBar is always shown at the top of the viewport -->

<div class="app-bar">
	{#if $miniWindow}
		<!-- this button is shown only when the viewport is small -->
		<!-- it is used to open the left panel which shows the navigator -->
		<!-- the title is also smaller in a small viewport		-->
		<Button on:click={() => {$leftPanelVisible = !$leftPanelVisible;}} icon={true}>
			<MenuIcon />
		</Button>

		<div class="title">PI Documentation</div>
	{:else}
		<div class="title">ProjectIt Documentation (version {versionNumber})</div>
	{/if}

	<span class='linkLogo'>
		<ThemeToggle />
	</span>

	<a target="_blank" href="https://github.com/projectit-org/ProjectIt" alt="ProjectIt on GitHub" class='linkLogo'>
		<GithubLogo />
	</a>

	{#if !$miniWindow}
		<!-- TODO change images for dark mode -->
		<!-- normally, the brand icon is shown-->

		<a target="_blank" href="https://www.projectit.org" class='linkLogo'>
<!--			// use global var ==> hack instead of using svg for projectit logo-->
			{#if $darkMode}
				<img src="/projectit-logo-inverse-colors.png"  style="color:red" alt="ProjectIt Logo" height='24'>
			{:else}
				<img src="/projectit-logo.png"  style="color:red" alt="ProjectIt Logo" height='24'>
			{/if}
		</a>

	{/if}

</div>

<script lang="ts">
	import { miniWindow, leftPanelVisible, versionNumber } from '../Store';
	import ThemeToggle from '../theming/ThemeToggle.svelte';
	import MenuIcon from '../icons/MenuIcon.svelte';
	import Button from '../buttons/Button.svelte';
	import GithubLogo from '../icons/GithubLogo.svelte';
	import { darkMode } from '../Store';

</script>

<style>
		.linkLogo {
        margin-right: 8px;
        margin-left: 8px;
		}
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

  /* Tooltip container */
  .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
      visibility: hidden;
      width: 100px;
      background-color: var(--theme-colors-bg_color);
      color: var(--theme-colors-color);
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;

      /* Position the tooltip text */
      position: absolute;
      z-index: 1;

      /* show at the bottom */
      top: 100%;
      left: 50%;
      margin-left: -50px; /* Use half of the width (100/2 = 50), to center the tooltip */

      /* Fade in tooltip */
      opacity: 0;
      transition: opacity 0.3s;
  }

  /* Tooltip arrow */
  .tooltip .tooltiptext::after {
      content: " ";
      position: absolute;
      bottom: 100%;  /* At the top of the tooltip */
      left: 50%;
			/* The border-width property specifies the size of the arrow.
			If you change this, also change the margin-left value to the same.
			This will keep the arrow centered. */
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
			/* The border-color is used to transform the content into an arrow. We set one side to color, and the rest to transparent.
			If all sides were color, you would end up with a colored square box. We set the bottom border color. */
      border-color: transparent transparent var(--theme-colors-inverse_color) transparent;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
  }
</style>
