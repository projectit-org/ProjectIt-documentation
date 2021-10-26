<script>
    import { getContext } from "svelte";
    const { toggle } = getContext("theme");
    import { IconButton } from "@smui/button";
</script>

<IconButton class="material-icons" on:click={toggle}>invert_colors</IconButton>

