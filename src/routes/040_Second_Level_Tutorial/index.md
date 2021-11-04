<script>
    import Figure from "../../lib/figures/Figure.svelte";
    let imageName = 'example-uml-diagram.png';
    let caption = 'UML diagram of Entity Language';
    let figureNumber = 1;
</script>

# Second Level Language Definitions

Please, become acquainted with the [three levels of language definitions](010_Intro/050_Three_Levels_of_Customization)
used by ProjectIt.
This section explains the second of these three levels.

## The Example

In all tutorials we will be using the *Entity* language as example. The gist of the *Entity* language is that it defines
several `EntityModelUnits`, each of which holds `Entities` and `Functions`. `Entities` can hold `Properties`
and can hold `Functions` too. Every `Function` has a list of `Parameters` and an `Expression`.

The following figure shows a UML class diagram of the concepts in the language.

<Figure 
bind:imageName={imageName} 
bind:caption={caption}
bind:figureNumber={figureNumber}
/>

We are working on a few other examples. You can find them in the
development branch of <a href="https://github.com/projectit-org/ProjectIt" target="_blank">ProjectIt</a>.


