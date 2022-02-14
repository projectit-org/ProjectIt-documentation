<script>
    import Figure from "../../lib/figures/Figure.svelte";
</script>

# Developing a Language with ProjectIt

Developing a Language with ProjectIt is usually done taking the following steps.

1. Develop the [metamodel](/030_Developing_a_Language/010_Default_Level).
2. Add the concrete syntax by adding an 
   [editor definition](/030_Developing_a_Language/020_Definition_Level/010_Editor_Definition).
3. Add scoping, typing and validation information 
   (see [ProjectIt Definition level](/030_Developing_a_Language/020_Definition_Level)).
4. Fine-tune the result on the [API level](/030_Developing_a_Language/030_API_Level).

## The Example

In this section we will be using the *Entity* language as example. The gist of the *Entity* language is
that it defines
several `EntityModelUnits`, each of which holds `Entities` and `Functions`. `Entities` can hold `Properties`
and can hold `Functions` too. Every `Function` has a list of `Parameters` and an `Expression`.

The following figure shows a UML class diagram of the concepts in the language.

<Figure 
imageName={'example-uml-diagram.png'} 
caption={'UML diagram of Entity Language'}
figureNumber={1}
/>

We are working on a few other examples. You can find them in the
development branch of <a href="https://github.com/projectit-org/ProjectIt" target="_blank">ProjectIt</a>.

