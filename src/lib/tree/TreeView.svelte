<script>
	import Tree from './Tree.svelte';

	let root = [
		{
			name: 'Important work stuff', path: '/Important',
			content: [
				{ name: 'content', path: '/content' }
			]
		},
		{
			name: 'Animal GIFs', path: '/Animals',
			content: [
				{
					name: 'Dogs', path: '/Dogs',
					content: [
						{ name: 'treadmill.gif', path: '/todos' },
						{ name: 'rope-jumping.gif', path: '/about' }
					]
				},
				{
					name: 'Goats', path: '/Goats',
					content: [
						{ name: 'parkour.gif', path: '/Parkour' },
						{ name: 'rampage.gif', path: '/Rampage' }
					]
				},
				{ name: 'cat-roomba.gif', path: '/Cats' },
				{ name: 'duck-shuffle.gif', path: '/Duck' },
				{ name: 'monkey-on-a-pig.gif', path: '/Monkey' }
			]
		},
		{ name: 'TODO.md', path: '/todos' }
	];
</script>

<div class='navigator'>
	<Tree content={root} expanded/>
</div>

<style>
	.navigator {
			position: relative;
			width: 100%;
			heigth: 100%;
			background: var(--theme-colors-bg_color);
	}
</style>
