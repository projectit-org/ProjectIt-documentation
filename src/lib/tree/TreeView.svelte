<script>
	import Tree from './Tree.svelte';

	let root = [
		{
			name: 'Important work stuff', path: '/',
			content: [
				{ name: 'content', path: '/content' }
			]
		},
		{
			name: 'Animal GIFs', path: '/',
			content: [
				{
					name: 'Dogs', path: '/',
					content: [
						{ name: 'treadmill.gif', path: '/todos' },
						{ name: 'rope-jumping.gif', path: '/about' }
					]
				},
				{
					name: 'Goats', path: '/',
					content: [
						{ name: 'parkour.gif', path: '/' },
						{ name: 'rampage.gif', path: '/' }
					]
				},
				{ name: 'cat-roomba.gif', path: '/' },
				{ name: 'duck-shuffle.gif', path: '/' },
				{ name: 'monkey-on-a-pig.gif', path: '/' }
			]
		},
		{ name: 'TODO.md', path: '/' }
	];
</script>

<div class='navigator'>
	<Tree name="Home" path='/' content={root} expanded/>
</div>

<style>
	.navigator {
			position: relative;
			width: 100%;
			heigth: 100%;
			background: var(--theme-colors-bg_color);
	}
</style>
