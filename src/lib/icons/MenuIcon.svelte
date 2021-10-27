<!-- An svg as reusable svelte component -->
<!-- Content: github logo -->

<script lang="ts">
	export let height: number = 24;
	export let width: number = 24;
	export let fill: string = 'var(--theme-colors-inverse_color)';
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="{width}px" height="{height}px" viewBox="0 0 24 24" fill={fill}><path d="M0 0h24v24H0z" fill="none"/>
	<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
</svg>
