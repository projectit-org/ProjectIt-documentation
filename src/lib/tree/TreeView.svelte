<script lang="ts">
	import Tree from './Tree.svelte';
	import { NavTree } from './NavTree';
	
	let root: NavTree[] = [
      { name: 'Intro', path: '/010_Intro',
        content: [
         { name: 'Projectional editing', path: '/010_Intro/010_Projectional-editing'},
         { name: 'Our philosophy', path: '/010_Intro/020_Our_philosophy'},
         { name: 'Models and Model Units', path: '/010_Intro/030_Models_and_Model-Units'},
         { name: 'Three levels', path: '/010_Intro/040_three-levels'},
               ]},
      { name: 'Extra', path: '/013_Extra',
        content: [
         { name: 'MoreExtras', path: '/013_Extra/MoreExtras'},
               ]},
      { name: 'Animals', path: '/020_Animals',
        content: [
         { name: 'Cat On Roomba', path: '/020_Animals/Cat_On_Roomba'},
         { name: 'Dogs', path: '/020_Animals/Dogs',
           content: [
            { name: 'Rope jumping', path: '/020_Animals/Dogs/rope-jumping'},
            { name: 'Treadmill', path: '/020_Animals/Dogs/treadmill'},
                  ]},
         { name: 'Duck', path: '/020_Animals/Duck'},
         { name: 'Goats', path: '/020_Animals/Goats',
           content: [
            { name: 'Parkour', path: '/020_Animals/Goats/Parkour'},
            { name: 'Rampage', path: '/020_Animals/Goats/Rampage'},
                  ]},
         { name: 'Monkey', path: '/020_Animals/Monkey'},
               ]},
      { name: 'Todos', path: '/040_todos'},
      { name: 'About', path: '/050_about'},];
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