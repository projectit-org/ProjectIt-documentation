<script>
    import Note from "../../../../lib/notes/Note.svelte";
</script>

# The Typer Definition File
In the typer definition file (with extension `.type`) you can indicate typing rules for every 
*concept* or *interface* in your language. The typing rules come in four categories. Each category
is there to answer one of the following questions.

1. Which *concepts* or *interfaces* are considered to be types?
2. Which *concepts* or *interfaces* are considered to have a type?
3. How to determine the type of a *concept* or *interface*?
4. Which types are considered to be equal or conforming?

## Type Concepts
In ProjectIt all types are completely separate from the elements of your AST. These are the *Type Concepts*, 
which all implements the interface **PiType**.
Any AST node may 'have' a type, which means that there is an instance of a *Type Concept* associated with this node.

Type Concepts can be defined in two ways. Either you define extra concepts in your .type file, or your declare
that some AST nodes can be regarded as types. In the latter case, ProjectIT generates a type concept 
which holds a reference to the AST node. To indicate which AST concepts are considered to be types in your language,
use the keyword `isType` followed by all types in your language between curly
brackets. 

```ts
// tutorial-language/defs/LanguageDefinition.type#L4-L4

// 'BaseType' is the root of the type hierarchy
istype { BaseType, Type, Entity, AttributeType }
```

To define new type concepts you can use a simplified version of the concept definition in the .ast files.
You cannot use references, or ... //TODO example and ...

```ts
// tutorial-language/defs/LanguageDefinition.type#L5-L6


anytype {
```

Note that is it often a good idea to have a common superclass or interface for all your types,
but this is not necessary.

## Terms That Have a Type
Not all AST nodes need to have a type associated to it. Only those for which you, e.g.
need a validation rule, or have another reason to require a type, need to be marked as
having a type. In the documentation we refer to those AST nodes as *terms*, so as not to confuse these with
[`expression concepts`](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure), which have a different meaning. 
You indicate this by the keyword `hasType` followed by all *terms* in your language between curly
brackets.
// TODO example

```ts
// tutorial-language/defs/LanguageDefinition.type#L5-L6


anytype {
```

Concepts that are types can also be *terms*. If an inference rule is present, this rule will determine
the type of such a *term*. If a rule is not present, the type of a concept marked 'isType' is the type concept
that references the concept itself.

### Inference Rules

For the *terms* in your language there should be a rule that indicates how to determine its type.
These rules are called **inference rules**. Each of these rules should result in a type concept.
The following example gives an inference rule that states that the type of entity function is the 
value of its attribute `declaredType`.

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
<svelte:fragment slot="content">This is a valid inference rule, only if 'Type' is marked 'istype', 
as shown in the previous example.
</svelte:fragment>
</Note>

In an inference rule it is possible to use the predefined instances of a **limited concept**.

```ts
// tutorial-language/defs/LanguageDefinition.type#L44-L46

ComparisonExpression {
    infertype AttributeType:Boolean;
}
```

In case where the type, that is to be associated with a *term*, is not an AST node, but an instance of a *type concept*, you can use
the following syntax. When the inference rule is executed, the type concept instance will be created on-the-fly. 

// TODO example

```ts
// tutorial-language/defs/LanguageDefinition.type#L44-L46

ComparisonExpression {
    infertype AttributeType:Boolean;
}
```
<Note>
<svelte:fragment slot="content">
Because type concepts are created on-the-fly, type concept instances can not be compared based on their identity, 
instead you will need to use an *equalsto* entry. 
</svelte:fragment>
</Note>

## Type Equals and Type Conformance Rules
Finally, you have to state which types are considered to be equal or conforming, using
the **conformsto** and the **equalsto** entries. In these entries it is also possible to use the predefined instances of a limited concept.

```ts
// tutorial-language/defs/LanguageDefinition.type#L11-L13

Entity {
    conformsto self.baseEntity;
}
```

When a type concept has some structure, i.e. it has some properties, you can use a 'where-clause'. For every property
a condition is given. If all conditions evaluate to true then the where-clause results in true.

```ts
// tutorial-language/defs/LanguageDefinition.type#L11-L13

Entity {
    conformsto self.baseEntity;
}
```

In a condition of a where-clause you may use **conformsto**. In that case, invocation of the rule will produce the cartesian product of
all super concepts of the properties in the conditions. For an example, see [Typer Example](/030_Developing_a_Language/020_Definition_Level/030_Typer_Definition/020_Typer_Example).

<Note>
<svelte:fragment slot="content">
Be careful with <b>conformsto</b> because this can lead to an explosion of newly created type concept instances.
</svelte:fragment>
</Note>


# Rules That Apply to Any Concept
Conformance and other rules can also be defined to apply to **any** concept. Obviously, this means that 
any instance of any concept conforms to the given value.

```ts
// tutorial-language/defs/LanguageDefinition.type#L6-L9

anytype {
    conformsto AttributeType:ANY;
    equalsto AttributeType:ANY;
}
```

 // TODO add another example where anytype is used within the type expression: conformsto anytype;
