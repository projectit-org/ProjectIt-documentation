









# Three Levels to Customize ProjectIt

From the five parts of the language definition ProjectIt generates a workbench containing an editor, scoper, typer,
and validator, and some utilities like a parser/deparser.
All of these are separate components that are called **pi-tools**.

You, the language engineer, can fine-tune the generated pi-tools at several levels.
We call this manner of fine-tuning: working at three levels.
This three-level approach makes it possible to create your language,
and customize it step-by-step in an agile fashion.
(Read our (/010_Intro/philosophy[philosophy] to understand why we have choosen these levels.)

Keeping in mind the quote from Alan Kay *Simple things should be simple, complex things should be possible*,
we use the following levels of customization.

====
<figcaption id='three-levels]
.Three level customization
(/images/050_Three_Levels_of_Customization.png[three level customization]
====

. On the *first level*, based solely on the metamodel definition in the AST, defaults are generated for every part of the workbench.
  For instance, the default scoper simply finds that every name in a model is visible everywhere.
  At this level you already have a fully working environment for your language.
. Of course the defaults will look rather rough.
  On the *second level*, the other definitions (in the `.edit`, `.scope`, `.valid`, and `.type` files) are
  taken into account.
  When a definition for the editor, for instance, is present, it is used to generate a more  suitable solution.
  The presentation in the editor could be more concise, using certain keywords etc.
  More on how to utilize the second level can be found in our (/040_Second_level/tutorials-intro[tutorials].
. The *third level* takes hand-coding in TypeScript, but produces a result that is extremely adjusted to your needs.
  More on how to use the third level can be found in the tutorial on (/050_Third_level/framework-tutorial[Using the Framework].

ProjectIt combines definitions at each level into one application, where the third level precedes the second, and
the second level precedes the first.
For instance, the generated editor will per (/040_Second_level/langdef-tutorial#concept[**concept**] in the language:

. use the *hand-made projection* from level 3, when this is present. If not, the editor will
. use the *projection generated from the editor definition* from level 2, when this definition is present.
  Finally, when no definition is present, the editor will
. use the *default projection* from level 1, the one generated when no `.edit` definition file is present.

This allows the language engineer to start quickly with a working (but some what rough) language environment
and piece by piece refine this on either the second or the third level.

At the time of writing this approach is implemented for the editor and validator, in future this will also apply to the
scoper and typer.

