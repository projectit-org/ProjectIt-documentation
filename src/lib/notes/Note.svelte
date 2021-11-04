<script lang="ts">
	export let text: string;
</script>

<div class='note'>
	<img src="/images/announcement_black_24dp.svg" alt="NOTE" width="20" height="20">
	<slot></slot>
</div>

<style>
    .note {
        background: var(--theme-colors-note-background);
        margin: 20px 20px 20px 20px;
        border-radius: 3px;
        box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
        padding: 0.5em;
        overflow-x: auto;
        color: var(--theme-colors-color);
    }
</style>
