<script>
    import Note from "../../../../lib/notes/Note.svelte";
     let self;
</script>

# Projections
In the `.edit` file a *projection* is defined between angular brackets.
This is done in a style similar from markdown, what you see looks close to what you get.
Everything within the square brackets (`[]`), except
the parts surrounded by `${}`, is taken literally.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L3-L11

Text {
[
This is
        literal text
      that is projected in the
                editor
  for every concept of type Text.
]
}
```

## Including Properties
When you define a projection for a concept or interface, you will want to include its properties. For
this you need to special notation `${}`. This tells ProjectIt to include a property, according to the projection
that is defined for the type of the property.

In the following example `self.condition` is a property of type `BooleanLiteralExpression`.
It will be projected according to the projection for `BooleanLiteralExpression`, whereas `self.whenTrue`
is a property of type `EntityExpression`, which is abstract. This property
will be projected according to the definition for (non-abstract) subtype of `EntityExpression` that is 
currently found.

TODO if the type is an interface ...

```ts
// tutorial-language/defs/LanguageDefinition.edit#L55-L66

IfExpression {
    [
    if ${self.condition} then
        ${self.whenTrue}
    else
        ${self.whenFalse}
    endif
    ]
    trigger "if"
}
PlusExpression {
    symbol "+"
```

<Note>
<svelte:fragment slot="header">Only direct properties are allowed</svelte:fragment>
<svelte:fragment slot="content">
Only the properties that are directly owned by the concept or interface are allowed. For instance,
<code>self.declaredType.name</code> is not a valid property projection. 
</svelte:fragment>
</Note>


<Note>
<svelte:fragment slot="header"><code>self</code> is optional</svelte:fragment>
<svelte:fragment slot="content">
Because you may only use direct properties, the prefix <code>self</code> may be omitted. 
</svelte:fragment>
</Note>


### Including a Property Projection from Another Editor
Normally, the property that you include will be displayed according to the projection of its type. This projection 
will be found by ProjectIt using the [ordering](/030_Developing_a_Language/020_Definition_Level/010_Editor_Definition/010_Edit_Files#ordering)
as defined in the configuration. 

When you specifically want to use another projection, you can use a **named property projection**. In that case, 
ProjectIt will use the projection defined for the concept in the editor with the specified name.

In this example, the projection for `functionDefinition` will first be searched in the editor named `specials`.
If it cannot be found, the normal ordering of projections will proceed.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L100-L105

FunctionCallExpression {
        [+
        CALL ${self.functionDefinition:specials} (  )
        ]
    trigger "function"
}
```

### Lists
If a property is a list, you can indicate whether it should be projected horizontally or vertically.
Both keywords are optional. If neither of `vertical` or `horizontal` is present, the property will be displayed as
a vertical list.

You can also choose to project a list property as a [table](/030_Developing_a_Language/020_Definition_Level/010_Editor_Definition#tables).
However, its default projection will always be a list. This will be generated when not present in the `.edit` files.

In a list, you can add one of the following.
* A *separator* string, which will be shown in between all elements.
* A *terminator* string, which will be shown after each element.
* An *initiator* string, which will be shown before every element of the list. 

Each is optional. The default is a single space used as separator.

In the following example the list `entities` is displayed vertically with the string `'&&'` as terminator.
Whereas, the list `model wide functions` is displayed horizontally with the string `';'` as separator.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L106-L118

EntityModelUnit {
        [
        model ${self.name} {
        entities:
            ${self.entities
                vertical
                terminator [ && ]
            }
        model wide functions:
            ${self.functions horizontal separator [; ] }
        }
        ]
}
```

<Note>
<svelte:fragment slot="header">Newlines in terminator or separator are ignored</svelte:fragment>
<svelte:fragment slot="content">
A terminator or separator should not contain a newline character. Horizontal or vertical layout is
purely determined by the keywords <code>horizontal</code> and <code>vertical</code>.
</svelte:fragment>
</Note>

### <a name="tables"></a>Tables
If a property is a list, you can choose to project it as a table. Tables can be either row or column based.
Row based means that each element of the list is displayed in a row. Column based, obviously, means that 
each element is displayed in a single column. The default is row based. 

Defining a table is a two-step process. 
1. Add the keyword `table` to the list property that
you want to display as a table. Optionally, add one of the keywords `rows` or `columns`.
2. Add a table-projection to the type of the property. The table-projection defines
the headers of the table and which parts of the list elements are displayed in which row or column.

Note that you only need to include one
table projection for both column and row based tables. ProjectIt will swap the entries when needed.
<Note>
<svelte:fragment slot="content">
Note that you only need to include one
table projection for both column and row based tables. ProjectIt will swap the entries when needed.
</svelte:fragment>
</Note>

For example, to project the `functions` property of concept `Entity` as a column based table, you can use the following code.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L83-L91

Entity {
    [
        ${self.isCompany keyword[COMPANY]}
        entity ${self.name} [? base ${self.baseEntity}] {
            ${self.attributes vertical }      // this list is projected as a vertical list without separator or terminator
            ${self.functions  table columns } // this list is projected as a column based table
        }
    ]
}
```

Given the above example, there should also be a projection tagged `table` for the concept `EntityFunction`. 
Below four columns/rows are defined, each with its own header. 

```ts
// tutorial-language/defs/LanguageDefinition.edit#L119-L124

EntityFunction {
    table [
        Name         | parameters                | type                 | body
        ${self.name} | ${self.parameters table } | ${self.declaredType} | ${self.expression}
    ]
}
```

<Note>
<svelte:fragment slot="header">Properties within a table are displayed according to their own projection</svelte:fragment>
<svelte:fragment slot="content">
The manner in which each of the properties of a single function are displayed, will be determined
by their own projections. In this example, `self.parameters` is a list, and will be displayed as another table.
The inner table will, however, be row-based, as this is the default.
</svelte:fragment>
</Note>

<Note>
<svelte:fragment slot="header">Whitespace in headers is ignored</svelte:fragment>
<svelte:fragment slot="content">
The whitespace between the headers is not needed. However, for clarity, it is probably
good style to align the column/row-separators.
</svelte:fragment>
</Note>

## Optional Projections

When a property is marked optional in the language structure definition (the `.ast` files), the projection
of this property should also be optional. This is indicated by `[?`. 

In the next example the property `baseEntity` is only shown if it is present. If it is not present,
the text `base` is omitted as well.

Because, in this case, `baseEntity` is a reference property, the element that will be created is an 
instance of a special class that represents a reference to an `Entity`. What is shown is the name of the 
referred `Entity`.

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

```ts
// tutorial-language/defs/LanguageDefinition.edit#L83-L91

Entity {
    [
        ${self.isCompany keyword[COMPANY]}
        entity ${self.name} [? base ${self.baseEntity}] {
            ${self.attributes vertical }      // this list is projected as a vertical list without separator or terminator
            ${self.functions  table columns } // this list is projected as a column based table
        }
    ]
}
```

Note that optional projections for non-optional properties are not allowed.

## Boolean Keyword Projections
The previous example also shows the special manner in which properties of type **boolean** can be 
projected. The property is represented by a **keyword**. In this case the property is `isCompany` and the 
keyword representing the property is `COMPANY`. When the value 
of the property is `true`, the keyword is shown. When the value is `false`, the keyword is not shown.

The user can change the value of the property using the keyword as trigger. 
This example would be displayed as one of ...

   ```
   COMPANY entity PhilipsEnterPrises { // the value of isCompany is true
     ...
   }
   entity FritsPhilips { // the value of isCompany is false
     ...
   }
   ```     

Another way to display boolean properties is to use **two** keywords. Depending on
the value of the property either the first or second keyword is shown. An example:

   ```
   [
       ...
       ${self.isCompany keyword[COMPANY, PERSON]} ${self.name}
       ...
   ]
   ```   
This would be displayed as one of ...
   ```
   COMPANY entity PhilipsEnterPrises { // the value of isCompany is true
     ...
   }
   PERSON entity FritsPhilips { // the value of isCompany is false
     ...
   }
   ```    

<Note>
<svelte:fragment slot="header">Keywords defined within a projection overwrite the standard boolean keywords</svelte:fragment>
<svelte:fragment slot="content">
In the default editor you can define standard boolean keywords. These will not be used when either of the two keyword projections
is present.
</svelte:fragment>
</Note>
