<script>
    import Note from "../../../../lib/notes/Note.svelte";
</script>

## The Typer Definition File
In the typer definition file (with extension `.type`) you can indicate typing rules for every 
*concept* or *interface* in your language. The typing rules come in four categories. Each category
is there to answer one of the following questions.

1. Which *concept* or *interface* are considered to be types?
2. Which *concept* or *interface* are considered to have a type?
3. How to determine the type of a *concept* or *interface*?
4. Which types are considered to be equal or conforming?

### Types
First, you have to indicate which concepts are considered to be types in your language.
You indicate this by the keyword `isType` followed by all types in your language between curly
brackets. Note that is it often a good idea to have a common superclass or interface for all your types, 
but this is not necessary.

```ts
// tutorial-language/defs/LanguageDefinition.type#L3-L4

// 'BaseType' is the root of the type hierarchy
istype { BaseType, Type, Entity, AttributeType }
```

### Terms That Have a Type
Not all AST nodes need to have a type associated to it. Only those for which you, e.g.
need a validation rule, or have another reason to require a type, need to be marked as
having a type. In the documentation we refer to those AST nodes as *terms*, so as not to confuse these with
`expression concepts` [REF], which have a different meaning. 
You indicate this by the keyword `hasType` followed by all *terms* in your language between curly
brackets.

Note that concepts that are types can also be *terms*. If an inference rule is present, this rule will determine
the type of such a *term*. If a rule is not present, the type of a concept marked 'isType' is itself.

### Inference Rules

For the non-abstract *terms* in your language there should be a rule that indicates how to determine its type.
These rules are called **inference rules**. Each of these rules should result in an AST node that has been marked
`isType`.
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
<svelte:fragment slot="content">In the AST <code>declaredType</code> has type <code>Type</code>, which 
has in the above example been stated to be a type in your user's language.
</svelte:fragment>
</Note>

In an inference rule it is possible to use the predefined instances of a **limited concept**.

```ts
// tutorial-language/defs/LanguageDefinition.type#L44-L46

ComparisonExpression {
    infertype AttributeType:Boolean;
}
```

### Type Conformance Rules
Finally, you have to state your **type conformance rules**. There are two flavours of conformance rules:
the **conformsto** and the **equalsto** rules. To a language engineer the differences between these will be clear.

In conformance rules it is also possible to use the predefined instances of a limited concept.

```ts
// tutorial-language/defs/LanguageDefinition.type#L11-L13

Entity {
    conformsto self.baseEntity;
}
```

### On-the-fly Creation of Type Instances: the Where Construct

Sometimes the type that is to be associated with a *term* is not yet present in the AST. This is, for instance, the
case for generic types. Not every `List<X>` will be created before its use demands it. These type instances are created 
on-the-fly. It is up to the language engineer to provide equals and conforms-to rules to compare these.

// TODO add example of GenericType

## Rules That Apply to Any Concept
Conformance and other rules can also be defined to apply to **any* concept. Obviously, this means that 
any instance of any concept conforms to the given value.

```ts
// tutorial-language/defs/LanguageDefinition.type#L6-L9

anytype {
    conformsto AttributeType:ANY;
    equalsto AttributeType:ANY;
}
```

 // TODO add another example where anytype is used within the type expression: conformsto anytype;
