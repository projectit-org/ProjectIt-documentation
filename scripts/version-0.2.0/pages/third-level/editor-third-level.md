






# Third Level Customization of the Editor

The two interfaces that define the editor are the `PiProjection`   and the `PiAction`.

## Customizing Projections
When generating the code for a language,  there is a default implementation of `PiProjection`
that will be generated into the file `editor/gen/<LANGUAGE>ProjectionDefault.ts`.
This file contains projections for all concepts in the language.
If there is a projection defined in the `.edit` file this will be generated, if theree is no projection defined,
a default prrojection will be generated.

In addition, the file `editor/Custom<LANGUAGE>Projection.ts` is generated, which is a placeholder
for writing projections in TypeScript.

What you need to do is to implement the `getBox(...)`  method below.

.getBox projection

```ts
// editor/CustomEntityProjection.ts[tag=getBox]
```ts

If you want to add a projection for a concept, you need to return the `Box` for this concept.
Simple return `null` for all other concepts.
This way ProjectIt will know that you did not define aa projection yourself and will use the projection
defined in `<LANGUAGE>ProjectionDefault`.

In the tutorial
xref:framework-tutorial[Writing projections in TypeScript]
you can learn how to actually write projections in code.

## Customizing Actions
The projections only describe what you will see in the editor.
Actions determine what you can do, how you interect with the editor.

ProjectIt ill generate default actions for navigation in a model and for creating and deleting elements in a model.
This is done in the file `editor/<LANGUAGE>DefaultActions.ts`.

In addition, the file `editor/Custom<LANGUAGE>Actions.ts` is generated, which is a placeholder
for writing projections in TypeScript.

This file contains four constants for different kind of actions:

.getBox projection

```ts
// editor/CustomEntityActions.ts[tag=ActionPlaceholders]
```ts

What you need to do is to define these contants.

ProjectIt will merge your actions with the default actions.
If a trigger for an action is identical, your actions take precedence over the default actions.

In the tutorial
(/060_Under_the_Hood/framework/defining*actions[Writing Actions in TypeScript]
you can learn how to write the actions in TypeScript.
