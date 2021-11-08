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
      { name: 'Developing a Language', path: '/030_Developing_a_Language',
        content: [
         { name: 'Default Level', path: '/030_Developing_a_Language/010_Default_Level',
           content: [
            { name: 'Defining the Language Structure', path: '/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure'},
                  ]},
         { name: 'ProjectIt Definition Level', path: '/030_Developing_a_Language/020_ProjectIt_Definition_Level',
           content: [
            { name: 'Editor Definition', path: '/030_Developing_a_Language/020_ProjectIt_Definition_Level/010_Editor_Definition'},
            { name: 'Scoper Definition', path: '/030_Developing_a_Language/020_ProjectIt_Definition_Level/020_Scoper_Definition'},
            { name: 'Typer Definition', path: '/030_Developing_a_Language/020_ProjectIt_Definition_Level/030_Typer_Definition'},
            { name: 'Validator Definition', path: '/030_Developing_a_Language/020_ProjectIt_Definition_Level/040_Validator_Definition'},
                  ]},
         { name: 'API Level', path: '/030_Developing_a_Language/030_API_Level',
           content: [
            { name: 'Editor API', path: '/030_Developing_a_Language/030_API_Level/010_Editor_API'},
            { name: 'Writing Projections', path: '/030_Developing_a_Language/030_API_Level/020_Writing_Projections'},
            { name: 'Writing Actions', path: '/030_Developing_a_Language/030_API_Level/030_Writing_Actions'},
            { name: 'Validator API', path: '/030_Developing_a_Language/030_API_Level/040_Validator_API'},
            { name: 'Typer API', path: '/030_Developing_a_Language/030_API_Level/050_Typer_API'},
            { name: 'Scoper API', path: '/030_Developing_a_Language/030_API_Level/060_Scoper_API'},
                  ]},
               ]},
      { name: 'Under the Hood', path: '/060_Under_the_Hood',
        content: [
         { name: 'The Editor Framework', path: '/060_Under_the_Hood/010_The_Editor_Framework',
           content: [
            { name: 'The Editor Interfaces', path: '/060_Under_the_Hood/010_The_Editor_Framework/010_The_Editor_Interfaces'},
                  ]},
         { name: 'The PiTool Interfaces', path: '/060_Under_the_Hood/020_The_PiTool_Interfaces'},
         { name: 'Source Code Documentation', path: '/060_Under_the_Hood/030_Source_Code_Documentation'},
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