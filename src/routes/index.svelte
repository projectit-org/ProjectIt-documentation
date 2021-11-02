<svelte:head>
	<title>ProjectIt Documentation</title>
</svelte:head>

<script>
	import Button from '../lib/buttons/Button.svelte'
	import GithubLogo from '../lib/icons/GithubLogo.svelte'
</script>

<div style='background-color: var(--theme-colors-bg_color); width: 100%; height: 100%; position: relative; box-sizing: border-box;'>
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
	<Button icon={false}>Button</Button>
</div>

<div>
	<h3>
		Github Logo Icon Button
	</h3>
	<Button icon={true}>
		<GithubLogo  width='40px' height='40px'/>
	</Button>
</div>

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
