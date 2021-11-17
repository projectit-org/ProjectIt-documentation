






# Writing Projections in TypeScript

As explained in (/010_Intro/050_Three_Levels_of_Customization#levels[Your Own Language - Overview] the five aspects of the generated workbench
can be defined in three levels.

This tutorial explains the third level, i.e. creating handwritten code, of the definition of the editor.

## How to Use the ProjectIt Editor Framework
The ProjectIt Editor Framework can be used directly, by writing Typescript that uses the classes in `@projectit/core`.
If you want to do this, there are two axes along which you can specify your editor:
(1) xref:projections[*hand-build projections*] and (2) xref:actions[*hand-build actions*].

Before you dive into this, we suggest that you become familiar with the information
in the (/060_Under_the_Hood/framework/editor-framework[ProjectIt Framework].


## Define your own Projection

As you known from the (/060_Under_the_Hood/framework/editor-framework[ProjectIt Framework],
all projections are based on boxes. In the next few steps we will show you how to build a hierarchy
of boxes to project your AST nodes, and how to style these boxes according to your wishes.

The projections in this tutorial are available in the
<a href="https://github.com/projectit-org/ProjectIt-example[ProjectIt-example, target="_blank">.

### Step 1 - Projecting a Simple Attribute

We start with building the projection for a simple attribute of type `string`:
the name of the unit in our Entity language. In the metamodel this is represented by the value of
the attribute *name* of class *EntityModelUnit*

.EntityModelUnit Element

```ts
// editor/CustomEntityProjection.ts[tag=ModelBox1]
```ts

An obvious choice for the projection of this attribute is a `HorizontalListBox` which holds a `LabelBox` with
the name of the class, followed by the value stored in the variable *unit.name*. In the tutorial
example this value is "EntityModel". When we start the editor based on this projection, we see the following:

(/images/{imagesdir}/demomodelname.png[align="left"]

It doesn't look very nice currently:

- The label is not distinguishable from the name of the model.
- When the name of the model becomes empty, there is no visual clue that you can add a name.

### Step 1.1 - Adding Style and a PlaceHolder
To make the label look different from the value of the attribute, we need to take a look at the code
that implements the default projection:

.Simple Projection

```ts
// editor/CustomEntityProjection.ts[tag=ModelBox1]
```ts
Let's first add a style to the `LabelBox`:

.Projection with Style and Placeholder

```ts
// editor/CustomEntityProjection.ts[tag=ModelBox2]
```ts

We associated the `LabelBox` with the style `demoStyles.keyword`, so it will show in a different color.

Also, we have given the `TextBox` has a `placeHolder` property. This placeholder will show whenever the contents of the `TextBox`
is empty, giving the user a visual clue that a name could be entered. 

The result is:

image::demomodelname-with-style.png[align="left"]

The style is defined in a css (or actually scss) as follows. In principle all CSS styles can be used here.

.CSS for Styled Projection
[source, language=css]
```ts
// editor/styles/style.scss[tag=StyleKeyword]
```ts

## Step 2 - Projecting a List
Next we will add the `entities` attribute owned by the `EntityModelUnit` to the projection.
The `entities` attribute is a list of `Entity`. Now take a look at the projection.

.Projection of Child Elements

```ts
// editor/CustomEntityProjection.ts[tag=ModelBox3]
```ts

The `entities` attribute is to be shown as a vertical list, therefore we use a *VerticalListBox*.
The first element of this list is a label, like the `LabelBox` in the previous step, styled as a keyword. The entities themselves are projected in another `VerticalListBox`.

The projection of a single `Entity` is defined in a separate function, thus building a hierarchy of boxes.
Note that the projection of the `Entity` is done using `this.rootPrtojection.getBox(ent)`,.
This ensures that the proper projection for entity is used, see (/040_Second_level/editdef-tutorial[customize projections]

.Projection of Entity

```ts
// editor/CustomEntityProjection.ts[tag=EntityBox]
```ts
The projection function is very similar to the projection of the `EntityModel`,
showing the keyword *Entity* followed by its name and below all attributes of the
entity in a `VerticalListBox`.

Once again, the projection of an attribute is defined in its own function.

.EntityAttribute Element

```ts
// defs/LanguageDefinition.ast[tag=referenceprop]
```ts

.Projection of EntityAttribute

```ts
// editor/CustomEntityProjection.ts[tag=AttributeBox]
```ts
Here, we use a `HorizontalListBox` to show the attribute name, followed by a colon,
followed by its type.

## Step 3 - Allow Creation of New Elements

The projection sofar is exactly that: a projection. There are no actions defined yet,
which we need to enable the user to change the model and add elements to it. First of
all take a look at the built-in default behavior of the editor:

- Inside a TextBox the text can be edited.
- Using the arrow keys the user can navigate the projection.
- Using Ctrl-Arrow the user can navigate up and down the model/AST.
- When an element is selected, it can be deleted with the DEL key.

The default behavior takes care of changing simple AST nodes and deleting both simple and
complex AST nodes. But what about adding an element, e.g. adding a new `attribute` to an
`Entity`. For this, we need to define an action coupled to an `AliasBox`.
(From (/060_Under_the_Hood/framework/defining*actions[Actions] you will have learned that
an `AliasBox` is a predefined box where the user can type text to trigger some action.)

First we add an `AliasBox` to the projection of the attribute list. Note the role of the box: *end-of-attribute-list*.

.Add AliasBox to Attribute List

```ts
// editor/CustomEntityProjection.ts[tag=CreateAttributeAction]
```ts

Then we create the actual action and attach it to the role of the `AliasBox`.

.Attach Create Attribute Action to AliasBox

```ts
// editor/CustomEntityActions.ts[tag=CreateAttributeAction]
```ts

<1> The action is attached to each box with the role "end-of-attribute-list".
<2> The action will be triggered when the user types `"attribute"` inside the.alias box.
<3> The executable code for the action. It creates a new `EntityEntity` and attaches is to the `EntityModel`
<4> The focus of the editor is returned to the `Box` with the role `"attribute-name"`
within the entity. This ensures that the user can immediately start typing the name of the entity after it has been created.

There can be many boxes with the same role in the editor, as long as their model element is different.
This way,  the above action is available for each attribute list in each entity.


### Define your own Actions
Tbis section needs to be written.
See (/060_Under_the_Hood/framework/defining*actions[Defining Actions]
// TODO write Define your own Actions
