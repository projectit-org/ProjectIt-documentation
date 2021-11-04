<script lang="ts">
	import NoteIcon from "../icons/NoteIcon.svelte";
</script>

<div class='note'>
	<NoteIcon /><slot></slot>
</div>

<style>
    .note {
        background: var(--theme-colors-note_background);
        margin: 20px 20px 20px 20px;
        border-radius: 3px;
        box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
        padding: 0.5em;
        overflow-x: auto;
        color: var(--theme-colors-color);
    }
</style>
