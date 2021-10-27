<script>
	import { getContext } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import InvertColors from '../icons/InvertColors.svelte';

	const { toggle } = getContext('theme');
</script>

<Button on:click={toggle} icon={true}>
	<InvertColors />
</Button>

