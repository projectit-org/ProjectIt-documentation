
# The Scoper Definition

For now, the scoper definition does not support our [three-level approach](/010_Intro/050_Three_Levels_of_Customization).
You can manually code your own scoper on the 3rd level, but it is not possible to combine this with the
scopers on the 1st and 2nd levels.

This tutorial
describes the possibilities of defining a scoper in the scoper definition file (with extension `.scope`).

In the scoper definition you provide the information necessary to determine which names are visible from a certain
element of your user's model.

## Namespaces
In the scoper definition you can mark a list of concepts to be **namespaces**. Any *namespace* has its own
set of visible names. Any namespace shadows the visible names from its surrounding namespace (using lexical scope).
The default scoper simply regards the model of your user as the only namespace.

```ts
// tutorial-language/defs/LanguageDefinition.scope#L3-L3

isnamespace { EntityModelUnit, Entity, EntityFunction }
```

Interfaces can be namespaces as well.
Any instance of a concept that implements the namespace interface is a
namespace, but only the properties of the interface will be visible.

## Namespace Additions
The standard namespaces can be added to. In that case, the visible elements from the addition are included.
By indicating an addition to a namespace you can, for instance, support inheritance. In the following example,
`baseEntity` is in the language structure definition (`.ast` file) defined to be the
super type of the `Entity` concept. The names visible in the `baseEntity`
are included in the namespace by defining the namespace-addition.

```ts
// tutorial-language/defs/LanguageDefinition.scope#L5-L7

Entity {
    namespace_addition = self.baseEntity;
}
```

## Alternative Scopes
You can also indicate that a different namespace altogether should be used. In the following example,
the elements visible in
an `AppliedFeature` are determined based on the type of its container, i.e. the type of its parent in the AST.

```ts
// tutorial-language/defs/LanguageDefinition.scope#L15-L17

AppliedFeature {
	scope = typeof( container );
}
```
