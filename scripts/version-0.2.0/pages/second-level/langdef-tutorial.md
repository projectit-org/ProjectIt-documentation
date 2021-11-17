






# The Language Structure Definition

The abstract syntax tree (AST) of the language is described in files with the extension `.ast`.

## Concepts
The ProjectIt language structure, which describes the abstarct syntax tree (AST), consists of a
list of a xref:Model[Model], xref:modelunit[Model Units], xref:concept[Concepts],
xref:expression[Expression Concepts], xref:limited[Limited Concepts]
and/or xref:interface[Interfaces].

### Model
A **model* is the complete description specified by the user. The model is the root of the abstract syntax tree.
It may hold any number of model units as children. These model units may be of different type. For instance, you
can have model units that define the items in a home automation system, and other model units that define the rules
that apply in this system.
// TODO other example

```ts
// LanguageDefinition.ast[tag=model]
```ts


### Model unit
A **model unit* is a part of the model that can be edited independently from the rest of the model. A model unit is
always a direct child of a model. The name of a model unit must always be (/010_Intro/modelunits#public[public].

```ts
// LanguageDefinition.ast[tag=rootconcept]
```ts


### Concept
A **concept* is the basic element of your language definition. It defines which instances can be present in
a model created by your users. Concepts may extend one other concept, and implement multiple interfaces.

```ts
// LanguageDefinition.ast[tag=concept]
```ts


### Expression Concept
An **expression concept* is a concept that is an expression. The editor will deal with these differently in
order to give your user a more natural editing experience. Note that expression concepts need to have a priority.
Expression concepts may extend one other concept, and implement multiple interfaces.

```ts
// LanguageDefinition.ast[tag=expression]
```ts


### Limited Concept
A **limited concept* is a concept that has a limited number of predefined instances. Actually, it is an extended
version of an enumeration. These instances become part
of the standard library of your language. A limited concept must always have a name, but if this is not provided
in the definition then it is automatically created. Furthermore, when a predefined instance does not provide a
value for the name, the name of the instance is used. In this manner, you can define simple enumerations.

Limited concepts may extend one other concept, and implement multiple interfaces.


```ts
// LanguageDefinition.ast[tag=limited]
```ts


### Interface
An **interface* is a concept that has no instances.

```ts
// LanguageDefinition.ast[tag=interface]
```ts

## Properties

Each of the language structure elements have **Properties**, of which there are the
following three types.

**	**Simple properties* have as type `string`, `number`, or `boolean`, and are always contained in its
**concept**. Simple properties may also be lists of `string`, `number`, or `boolean`.

```ts
// LanguageDefinition.ast[tag=simpleprop]
```ts

**	**Parts* have as type one of the **concepts* (including *expression concepts* and *limited concepts*)
in the language, and are **contained in the concept* that holds the property (as in
the UML composition relationship). Note that simple properties are always considered to be parts.

```ts
// LanguageDefinition.ast[tag=partprop]
```ts

**	**References* also have as type one of the **concepts* in the language, but a reference is not contained
in its **concept* (as in the UML association relationship).
References are always by name, therefore the referred concect must have a `name`  property of type `string`.

```ts
// LanguageDefinition.ast[tag=referenceprop]
```ts

### Optional Properties
Properties may be optional. This is indicated using a question mark after the property name.

```ts
// LanguageDefinition.ast[tag=optionalprop]
```ts
