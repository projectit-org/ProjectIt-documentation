<script lang="ts">
	import Tree from './Tree.svelte';
	import { NavTree } from './NavTree';
	
	let root: NavTree[] = [
      { name: 'Intro', path: '/010_Intro',
        content: [
         { name: 'Projectional Editing', path: '/010_Intro/010_Projectional_Editing'},
         { name: 'Our Philosophy', path: '/010_Intro/020_Our_Philosophy'},
         { name: 'Models and Model Units', path: '/010_Intro/030_Models_and_Model_Units'},
         { name: 'A Language in Five Parts', path: '/010_Intro/040_A_Language_in_Five_Parts'},
         { name: 'Three Levels of Customization', path: '/010_Intro/050_Three_Levels_of_Customization'},
         { name: 'Future Developments', path: '/010_Intro/090_Future_Developments'},
               ]},
      { name: 'Getting Started', path: '/020_Getting_Started',
        content: [
         { name: 'Installation', path: '/020_Getting_Started/010_Installation'},
         { name: 'Project Structure', path: '/020_Getting_Started/020_Project_Structure'},
         { name: 'Calling the Generator', path: '/020_Getting_Started/030_Calling_the_Generator'},
               ]},
      { name: 'First Level Tutorial', path: '/030_First_Level_Tutorial',
        content: [
         { name: 'Defining the Language Structure', path: '/030_First_Level_Tutorial/010_Defining_the_Language_Structure'},
               ]},
      { name: 'Second Level Tutorial', path: '/040_Second_Level_Tutorial',
        content: [
         { name: 'Editor Definition', path: '/040_Second_Level_Tutorial/010_Editor_Definition'},
         { name: 'Scoper Definition', path: '/040_Second_Level_Tutorial/020_Scoper_Definition'},
               ]},
      { name: 'Third Level Tutorial', path: '/050_Third_Level_Tutorial',
        content: [
         { name: 'The Editor at the Third Level', path: '/050_Third_Level_Tutorial/010_The_Editor_at_the_Third_Level'},
               ]},
      { name: 'About', path: '/099_about'},];
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