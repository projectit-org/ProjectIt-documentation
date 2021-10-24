<script lang="ts">
	import Tree from './Tree.svelte';
	import { NavTree } from '../scripts/NavTreeFiller';

	let root: NavTree[] = [
		{ name: 'About', path: '/about' },
		{	name: 'Animals', path: '/Animals',
			content: [
				{ name: 'Cat On Roomba', path: '/Animals/Cat_On_Roomba' },
				{	name: 'Dogs', path: '/Animals/Dogs',
					content: [
						{ name: 'Rope jumping', path: '/Animals/Dogs/rope-jumping' },
						{ name: 'Treadmill', path: '/Animals/Dogs/treadmill' }
					]},
				{ name: 'Duck', path: '/Animals/Duck' },
				{	name: 'Goats', path: '/Animals/Goats',
					content: [
						{ name: 'Parkour', path: '/Animals/Goats/Parkour' },
						{ name: 'Rampage', path: '/Animals/Goats/Rampage' },
					]},
				{ name: 'Monkey', path: '/Animals/Monkey' },
			]},
		{	name: 'Important work stuff', path: '/Important',
			content: [
				{ name: 'Content', path: '/Important/content' },
			]},
		{ name: 'Todos', path: '/todos' },];
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
