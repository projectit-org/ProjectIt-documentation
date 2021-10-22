<script>
	import Tree from './Tree.svelte';

	let root = [
		{
			name: 'Important work stuff', path: '/',
			content: [
				{ name: 'quarterly-results.xlsx', path: '/about' }
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

<Tree name="Home" path='/' content={root} expanded/>
