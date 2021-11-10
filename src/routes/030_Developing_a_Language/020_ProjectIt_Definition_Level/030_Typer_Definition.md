<script>
    import Note from "../../../lib/notes/Note.svelte";
</script>

# The Typer Definition

This tutorial describes the possibilities of defining a type provider (or typer, for short).
In the typer definition you provide 
the information necessary to do type checking.

### Three-level definition
As explained in [Three Levels of Customization](/010_Intro/050_Three_Levels_of_Customization#levels)
the generated typer can be defined in three levels.
For each *concept* in the AST the typer will

1. use the *hand-made typing rule(s)*, when present. Otherwise, the validator will
2. use to the *typing rule(s) generated from the typer definition*, when this definition is present. 

There are no default typing rules, so the typer does not have a fallback to a third level.

## The Typer Definition File
In the typer definition file (with extension `.type`) you can indicate typing rules for every 
*concept* in your language.

### Types
First, you have to indicate which concepts are considered to be types in your language.
You indicate this by the keyword `isType` followed by all types in your language between curly
brackets.

```ts
// tutorial-language/defs/LanguageDefinition.type#L3-L4

// 'BaseType' is the root of the type hierarchy
istype { BaseType, Type, Entity, AttributeType }
```

<Note>
<svelte:fragment slot="header"> There must be a type hierarchy</svelte:fragment>
<svelte:fragment slot="content">
We assume that either
there is a concept which is the common super type of all types in your language, or all types in your
language implement the same interface. The **first** concept or interface in
the types list is considered to be this **root** of your type hierarchy.
</svelte:fragment>
</Note>

### Inference Rules

Using **inference rules**, you can indicate how to determine the type of certain concepts. Every concept
for which an inference rule is defined has a type. That type is determined according to the given
rule. In the following example the type of entity function is the value of its attribute
'declaredType'. 

```ts
// tutorial-language/defs/LanguageDefinition.ast#L63-L69

concept EntityFunction {
    name: identifier;
    aliases: string[];
    expression: EntityExpression;
    parameters: Variable[];
    reference declaredType : Type;
}
```

```ts
// tutorial-language/defs/LanguageDefinition.type#L20-L22

EntityFunction {
    infertype self.declaredType;
}
```

<Note>
<svelte:fragment slot="content">In the AST <code>declaredType</code> has type <code>Type</code>, which 
has in the above example
been stated to be a type in your user's language.
</svelte:fragment>
</Note>

By stating that an inference rule is **abstract**, you define that the concept does have a type, but the
way its type is determined, is given by the inference rules of its subconcepts.

```ts
// tutorial-language/defs/LanguageDefinition.type#L23-L25

EntityExpression {
    abstract infertype ;
}
```

It is possible to use the predefined instances of a **limited concept**.

```ts
// tutorial-language/defs/LanguageDefinition.type#L44-L46

ComparisonExpression {
    infertype AttributeType:Boolean;
}
```

### Type Conformance Rules
Finally, you have to state your **type conformance rules**. There are two flavours of conformance rules:
the **conformsto** and the **equalsto** rules. To a language engineer the differences between these will be clear.

In conformance rules
it is also possible to use the predefined instances of a limited concept.

```ts
// tutorial-language/defs/LanguageDefinition.type#L11-L13

Entity {
    conformsto self.baseEntity;
}
```

## Rules that Apply to any Concept
Conformance and other rules can also be defined to apply to **any* concept. Obviously, this means that 
any instance of any concept conforms to the given value.

```ts
// tutorial-language/defs/LanguageDefinition.type#L6-L9

anytype {
    conformsto AttributeType:ANY;
    equalsto AttributeType:ANY;
}
```
