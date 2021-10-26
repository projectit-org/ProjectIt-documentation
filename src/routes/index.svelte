<svelte:head>
	<title>ProjectIt Documentation</title>
</svelte:head>

<script>
	import Button from '../lib/buttons/Button.svelte'
	import Icon from '../lib/buttons/Icon.svelte'
	import { materialBtn, iconBtn, strangeBtn } from '../lib/buttons/buttons.js'
</script>

<div>
	<h3>
		Default Button
	</h3>
	<Button>Button</Button>
</div>

<div>
	<h3>
		Material Style Button
	</h3>
	<Button {...materialBtn}>Button</Button>
</div>

<div>
	<h3>
		Icon Button
	</h3>
	<Button {...iconBtn}>
		<Icon />
	</Button>
</div>

<div>
	<h3>
		Strange Button
	</h3>
	<Button {...strangeBtn}>
		Button
	</Button>
</div>

<style>
    :global(body) {
        background: #efefef;
        padding: 1rem;
    }
    div {
        background: #fff;
        border-radius: .5rem;
        margin-bottom: 1rem;
        padding: 1rem
    }
</style>

<!--<style>-->
<!--	section {-->
<!--		display: flex;-->
<!--		flex-direction: column;-->
<!--		justify-content: center;-->
<!--		align-items: center;-->
<!--		flex: 1;-->
<!--	}-->

<!--	h1 {-->
<!--		width: 100%;-->
<!--	}-->

<!--</style>-->
