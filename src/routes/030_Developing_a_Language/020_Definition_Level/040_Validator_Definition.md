<script>
    import Note from "../../../lib/notes/Note.svelte";
</script>


# The Validator Definition
The validator definition is the definition of the rules that hold in your language. These rules are not the rules
of the concrete syntax, but instead they provide an extra check of the models.

### Three-level definition
As explained in [Three Levels of Customization](/010_Intro/050_Three_Levels_of_Customization#levels)
the generated validator can be defined in three levels.
For each **concept* in the AST the validator will

1. use the *hand-made validation rule(s)*, when present. Otherwise, the validator will
2. use to the *validation rule(s) generated from the validator definition*, when this definition is present.
Finally, the validator will
3. use the 
   [*default validation rule(s)*](/030_Developing_a_Language/020_Definition_Level/040_Validator_Definition#default-validation-rules).

The rest of this tutorial explains the second level: how to write a validator definition (`.valid` file).

## The Validator Definition File
The validator definition defines the constraints or rules that should be true in the models build by your users. 
Currently, there are four types of rules.

### Valid Identifier Rules

Given a simple property of type *identifier*, a **valid-identifier-rule** can be given. The property complies with the
rule if it is a valid identifier according to the TypeScript definition.

For a *valid-identifier-rule* the `validIdentifier` keyword is used followed by an optional simple property. When the
property is present, this property is checked. When the property is not present, ProjectIt assumes that the
concept has a simple property named ‘`name`’ of type ‘`identifier`’, and it will check this property.


```ts
// tutorial-language/defs/LanguageDefinition.valid#L21-L26

AttributeWithLimitedType {
    validIdentifier self.name;
}
Variable {
    validIdentifier; // default is 'name'
}
```

### Simple Value Rules
Given a simple property, its value can be limited to certain values.

```ts
// tutorial-language/defs/LanguageDefinition.valid#L3-L6

AttributeType  {
	self.extra >= 12;
	self.extra <= 30;
}
```

### List Rules
Given a list property, a **not-empty rule** can be stated. The list complies with the rule if it is not empty.

An **is-unique rule** is another rule that can be stated for a list property. The list
complies when the value of the property is unique within the list.

```ts
// tutorial-language/defs/LanguageDefinition.valid#L7-L9

EntityModelUnit {
    notEmpty self.entities;
    isunique name in self.entities;
```

### Type Check Rules
Given the rules in the typer definition, rules can be stated to ensure type compliance.
To indicate a **type checking rule** the keyword `typecheck` is used, followed by either `equalsType` or `conformsTo`.
The first demands that the types of the two properties given are equal. The second demands that the type of the first
conforms to the type of the second.

In type checking rules it is possible to use predefined instances of a limited concept.

```ts
// tutorial-language/defs/LanguageDefinition.valid#L35-L39

MultiplyExpression {
    typecheck equalsType( self.left, AttributeType:Integer );
    typecheck equalsType( self.right, AttributeType:Integer );
    typecheck conformsTo( self.left, self.right );
}
```

<a name="default-validation-rules"></a>
## The Default Validation Rules

There are just a few default validation rules:

. Non optional properties must be set.
. Non optional lists must include one element.
. Names of model units should be valid identifiers.
