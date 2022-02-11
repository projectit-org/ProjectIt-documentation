<script>
    import Note from "../../../../lib/notes/Note.svelte";
     let self;
</script>

# <a name="operand"></a> The Editor Definition Files
In an editor definition file (`.edit` file) you can define a ProjectIt editor by providing extra information
for each *concept* or *interface* in your language. Currently, you can define the following three items per
*concept* or *interface*.

*	A **projection**, which is how the *concept* is shown in the editor.
*	An optional **trigger**, which is the key or keys your user needs to type to create a 
     new instance of the *concept*.
*	An optional **symbol**, which is only used for **binary expressions**. It is the character or 
     character string that represents the *operator*. When the *symbol* is not present, 
     the *trigger* will be used for this purpose.

You cannot create a projection for either a **binary expression concept** or a **limited concept**.
The editor provides extra [support for expressions](/010_Intro/010_Projectional_Editing#expressions), which
cannot be done if a projection is provided. **Limited concepts** are blocked, because the user of the editor
can use the instances of the limited concept solely as references.

<Note>
<svelte:fragment slot="header"> The projection is always the first </svelte:fragment>
<svelte:fragment slot="content">
For every concept or interface you have to define the projection before the trigger and/or symbol.  
</svelte:fragment>
</Note>

     
## Multiple, Named Editors
Editors can be **named**, and you can define multiple editors. A **named editor**
defines a set of projections that are coordinated to operate together.
These sets can be switched on and off dynamically, thus changing 
the appearance of the model in the editor. 

For instance, if you define all 
table projections under the same editor name,
then your user can switch from viewing objects as lists to viewing them as tables (TODO links).
Or in another example, you could have an editor (or projection set) that shows only part of the properties of some
concepts, whereas another editor shows all properties. This makes it possible to cater for different types of users.

### Default Editor
Because there has to be an editor that can be used as fallback when all other editors are switched off, an 
editor with the name **default** is generated in case it is not provided. If the default editor is provided but incomplete,
i.e. it does not define a projection for all concepts, 
projections will be generated for the missing concepts. So, upon generation the default editor is always complete.

TODO code example

### <a name="ordering"></a> Ordering of Editors
The named editors are ordered; the order can be indicated by the language engineer in the configuration. The
projections are found based on this order. The 'default' editor is always the last. If a box/projection 
for a concept is not present in the top editor,
then the next editor is searched for a projection for the concept and o on, till the default editor is reached.
Projections may specifically request that a property is displayed using a projection from a named editor. 
For this see TODO.

<Note>
<svelte:fragment slot="header"> Each editor can be defined in multiple files </svelte:fragment>
<svelte:fragment slot="content">
Every <code>.edit</code> file that is encountered in the folder that holds your definitions, will be read during the generation.
When the editor in multiple files has the same name all information will be combined into a single editor.  
</svelte:fragment>
</Note>

## Standard Boolean Keywords

Next to the concrete syntax definitions for *concepts* and *interfaces*, you can define the keywords that need to be used for 
the boolean *true* and *false* values. Note that this can be done once in the complete set of editors. It should be 
part of an editor called *default*. In the example below, the user will view the string `RIGHT` whenever a boolean 
property has the value `true`, and likewise `WRONG` will be shown for the value `false`.

```
   boolean [true = "RIGHT", false = "WRONG"]
```  

The standard keywords can be overwritten per property. See TODO.

## Reference Separator

References to other objects may consist of a series of names, like *country.city.street.house*. The string used to separate 
these names (in the example ".") can be set, but, like the boolean values, only once for the complete set of editors, 
in the editor called *default*.

TODO example

## Example `.edit` File

TODO include a complete .edit file
