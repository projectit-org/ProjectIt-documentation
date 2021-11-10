<script>
    import Note from "../../../lib/notes/Note.svelte";
</script>

# The Language Structure Definition

The abstract syntax tree (AST) of the language is described in files with the extension `.ast`. 
All files with this extension in the *defs* folder (i.e. the folder were you keep your definition files)
are combined into one AST definition.

## Concepts
The ProjectIt language structure, which describes the abstract syntax tree (AST), consists of a
list of a [Models](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Model), 
[Model Units](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Model_Unit),
[Concepts](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Concept),
[Expression Concepts](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Expression_Concept),
[Binary Expression Concepts](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Binary_Expression_Concept),
[Limited Concepts](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Limited_Concept),
and/or [Interfaces](/030_Developing_a_Language/010_Default_Level/010_Defining_the_Language_Structure#Interface).

### <a name="Model"></a> Model
A *model* is the root of the abstract syntax tree, and as such the complete description specified by the user.
It may hold any number of model units as children. These model units may be of different type. For instance, you
can have model units that define the items in a home automation system, and other model units that define the rules
that apply in this system.

<Note><svelte:fragment slot="header"> Models are never explicit in an editor</svelte:fragment><svelte:fragment slot="content">
The model is never shown in an editor as a whole. 
It is always shown in parts: the model units. However, the webapp does 'show' the model and the units, that are
part of it, in its left panel.
</svelte:fragment></Note>

```ts
// tutorial-language/defs/LanguageDefinition.ast#L3-L7

model EntityModel {
    name: identifier;
    units: EntityModelUnit[];
    extraUnit: SomeOtherModelUnit;
}
```

### <a name="Model_Unit"></a> Model unit
A *model unit* is a part of the model that can be edited independently of the rest of the model. A model unit is
always a direct child of a model. The name of a model unit must always be [public](/010_Intro/030_Models_and_Model_Units#public).

Model units may not extend other units or implement interfaces.

```ts
// tutorial-language/defs/LanguageDefinition.ast#L56-L61

modelunit EntityModelUnit {
    public name: identifier;

    functions: EntityFunction[];
    entities: Entity[];
}
```

### <a name="Concept"></a> Concept
A *concept* is the basic element of your language definition. It defines which instances can be present in
a model created by your users. 

Concepts may extend one other concept, and implement multiple interfaces.

```ts
// tutorial-language/defs/LanguageDefinition.ast#L26-L32

concept Entity implements Type {
    isCompany: boolean;
    attributes: AttributeWithLimitedType[];
    entAttributes: AttributeWithEntityType[];
    functions: EntityFunction[];
    reference baseEntity?: Entity;
}
```

### <a name="Expression_Concept"></a> Expression Concept
An *expression concept* is a concept that is an expression. The editor will deal with these differently in
order to give your user a more natural editing experience. 

Expression concepts may extend one other concept, and implement multiple interfaces.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L48-L50

expression AbsExpression base EntityExpression {
    expr: EntityExpression;
}
```

### <a name="Binary_Expression_Concept"></a> Binary Expression Concept
A *binary expression concept* is an expression concept that has two sub expressions, left and right operands, 
and an operator, which in the concrete syntax usually goes in the middle. For example, the expression `4 + 5` 
has as left operand `4`, as operator `+`, and as right operand `5`. 

Any concrete binary expression concept needs to have a priority. The priority is used by ProjectIt to balance the 
abstract syntax tree (see [Projectional Editing](/010_Intro/010_Projectional_Editing#tree-balancing)). In 
the [second level tutorial](/030_Developing_a_Language/020_ProjectIt_Definition_Level/010_Editor_Definition#operand) you can 
find more information on how to set the operand.

Binary expression concepts may extend one other concept, and implement multiple interfaces.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L118-L121

abstract binary expression BinaryExpression base EntityExpression {
    left: EntityExpression;
    right: EntityExpression;
}
```

### <a name="Limited_Concept"></a> Limited Concept
A *limited concept* is a concept that has a limited number of predefined instances. Actually, it is an extended
version of an enumeration. All instances become part of the standard library of your language. 

A limited concept must always have a name, but if this is not provided
in the definition then it is automatically created. Furthermore, when a predefined instance does not provide a
value for the name, the name of the instance is used. In this manner, you can define simple enumerations.

Limited concepts may extend one other concept, and implement multiple interfaces.

```ts
// tutorial-language/defs/LanguageDefinition.ast#L34-L46

limited AttributeType implements BaseType {
    // if the 'name' property was not provided, it would have been generated
    name: identifier;
    extra: number;
    String = { name: "String", "extra": 199}
    // notations 'name:' and '"name":' are both correct
    Integer = { "name": "Integer", "extra": 240261}
    Boolean = { name: "Boolean", "extra": 5479}
    // the following instance gets the name "ANY"
    ANY = { "extra": 456}
}

limited MockEnumeration { EnumValue1; EnumValue2; EnumValue3; }
```

### <a name="Interface"></a> Interface
An *interface* is a concept that has no instances.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L14-L17

interface BaseType {
    name: identifier;
    baseInterface_attr?: number;
}
```

## Properties

Each of the language structure elements have **Properties**, of which there are the
following three types.

*	*Simple properties* have as type `identifier`, `string`, `number`, or `boolean`, and are 
     always contained in the *concept*. Simple properties may also be lists 
     of `identifier`, `string`, `number`, or `boolean`.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L63-L65

concept EntityFunction {
    name: identifier;
    aliases: string[];
```

*	*Parts* have as type one of the *concepts* (including *expression concepts* and *limited concepts*)
in the language, and are *contained in the concept* that holds the property (as in
the UML composition relationship). Note that simple properties are always considered to be parts.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L63-L67

concept EntityFunction {
    name: identifier;
    aliases: string[];
    expression: EntityExpression;
    parameters: Variable[];
```

*	*References* also have as type one of the *concepts* in the language, but a reference is not contained
     in its *concept* (as in the UML association relationship). References are indicated by the keyword 
     *reference* in front of the definition.
     
    References are always by name, therefore the referred concept must have a `name` property of type `identifier`.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L101-L101

reference variable: Variable;
```
```ts
// tutorial-language/defs/LanguageDefinition.ast#L83-L84

concept Variable {
    name: identifier;
```

### Optional Properties
Properties may be optional. This is indicated using a question mark after the property name.
```ts
// tutorial-language/defs/LanguageDefinition.ast#L14-L17

interface BaseType {
    name: identifier;
    baseInterface_attr?: number;
}
```
