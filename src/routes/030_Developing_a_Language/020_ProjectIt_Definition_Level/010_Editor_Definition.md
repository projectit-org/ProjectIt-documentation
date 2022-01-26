<script>
    import Note from "../../../lib/notes/Note.svelte";
     let self;
</script>

# The Editor Definition

The editor definition is the definition of the **concrete syntax** of the language. It is used for the generation of the editor, as
well as the generation of the parser and unparser. The concrete syntax given in the editor definition is also used
to produce better readable error messages as produced by the validator.

<Note>
<svelte:fragment slot="header"> Revised syntax for editor definition </svelte:fragment>
<svelte:fragment slot="content">
The syntax for defining editor is currently under revision. In the next release the syntax will change significantly, and we will not
be able to provide backwards compatibility. The bright side of this, is that there will be a number of new features available.
</svelte:fragment>
</Note>

### <a name="editor-three-levels"></a> Three-level definition
As explained in [Three Levels of Customization](/010_Intro/050_Three_Levels_of_Customization#levels) the generated editor can be defined at three levels.
For each *concept* in the AST the editor will

1. use the *hand-made projection*, when this is present. Otherwise the editor will
2. use to the *projection generated from the editor definition*, when this definition is present. Finally, the editor will
3. use the *default projection*.

When a *concept* is marked as an **binary expression concept**, its default projection is usually the one you 
want to go with, because of the extra [support for expressions](/010_Intro/010_Projectional_Editing#expressions) 
that is incorporated in it.

The rest of this tutorial explains the second level: how to write an editor definition (`.edit` file).
For making more adjustments to the projection by adding hand-made projections on the third level, see the
tutorial on [using the framework](/030_Developing_a_Language/030_API_Level/010_Editor_API).

## <a name="operand"></a> The Editor Definition File
In the editor definition file (`.edit` file) you can define a ProjectIt editor by providing extra information
for each *concept* in your language. Currently, you can define the following three items.

*	**Projection**, which is how the *concept* is shown in the editor.
*	**Trigger**, which is the key or keys your user needs to type to create a new instance of the **concept**.
*	**Symbol**, which is optional and only used for **binary expressions**. It is the character or 
     character string that is shown when a *binary expression* is being added to your user’s model. 
     It represents the *operator*. When the *symbol* is not present, the *trigger* will be used.

### Projections and Indentation
In the `.edit` file a *projection* is defined between angular brackets.
This is done in a style similar from markdown, what you see looks close to what you get.
Everything within the square brackets (`[]`), except
the parts surrounded by `${}`, is taken literally, including any indentation.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L3-L11

Text {
    @projection
        [This is
                literal text
          that is projected in the

                editor
        for every concept of type Text.]
}
```

When the indentation of the opening and closing brackets aligns, this indentation is not taken into account.
Then the column in which the brackets appear is seen as the first column of the projection. In the above example t
his is not the case, therefore the text "This is" will be shown at the beginning of the line, but the text 
"literal text" will be shown with a indentation of 16 spaces. The same holds for "editor", but the text 
"that is projected in the" will be indented with 10 spaces. The text "for every concept of type Text"
will be shown with an indentation of 8 spaces.

<Note>
<svelte:fragment slot="header"> Indentation is incremental</svelte:fragment>
<svelte:fragment slot="content">
This is not completely true. When a `Text` element is used within another projection,
the indentation that is defined by the projection in the definition for `Text` will be preceded
by any indentation defined for the enclosing concept.
</svelte:fragment>
</Note>

If the closing bracket would be positioned on the line after the text,
**and** it would be indented with 8 spaces, then the text 
would be shown without any indentation, as shown in the next example. 

```ts
// tutorial-language/defs/LanguageDefinition.edit#L16-L30

StringLiteralExpression {
// in this projection the indentation is not taken into account
    @projection normal
        [
        '${self.value}'
        ]
    @trigger "'"
}
AttributeWithLimitedType {
// in this projection the indentation is taken into account
    @projection showAll
        [
    ${self.name} : ${self.declaredType}
 ]
}
```

Using ‘[+’ you can indicate that a newline should be added.
```ts
// tutorial-language/defs/LanguageDefinition.edit#L94-L100

    @projection showAll
        [+
        CALL ${self.functionDefinition} (  )
        ]
    @trigger "function"
}
EntityModelUnit {
```

### Including Subprojections

By using `${}` you tell ProjectIt to include a property. Its projection is defined 
by the projection for its concept.

In the following example `self.condition` is a property of type `BooleanLiteralExpression`.
It will be projected according to the definition for this concept, whereas `self.whenTrue`

is a property of type `EntityExpression`, which is abstract. This property
will be projected according to the definition for subtype of `EntityExpression` that is currently found.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L31-L43

IfExpression {
    @projection normal
        [
        if (${self.condition}) then
                  ${self.whenTrue}
        else
           ${self.whenFalse}
        endif
        ]

    @trigger "if"
    @symbol "if"
}
```

### Triggers and Symbols

The example above, the projection for `IfExpression`, also shows how to define a **trigger**, and 
a **symbol** for an expression. The trigger is a string a characters that is used to trigger the creation 
of an instance of concept `IfExpression`. The symbol here is not really useful.

In the next example, the symbol is used to define the operator of the binary expression `PlusExpression`.
```ts
// tutorial-language/defs/LanguageDefinition.edit#L55-L57

PlusExpression {
    @symbol "+"
}
```

### Lists
If a property is a list, you can indicate whether it should be projected horizontally or vertically.
The default is horizontal. You can also choose to project it as a [table](/030_Developing_a_Language/020_ProjectIt_Definition_Level/010_Editor_Definition#tables).

Furthermore, you can add either a *separator* string, which will be shown in between all elements, 
or a *terminator* string, which will be shown after each element. Both are optional.
```ts
// tutorial-language/defs/LanguageDefinition.edit#L101-L114

    @projection showAll
        [
        model ${self.name} {
        entities:
            ${self.entities
                @vertical
                @terminator [ && ]
            }
        model wide functions:
            ${self.functions @horizontal @separator [; ] }
        }
        ]
}

```

Both keywords are optional. If neither of `@vertical` or `@horizontal` is present, the property will be displayed as
 a vertical list. If neither of `@separator` or `@terminator` is present, the elements of the list will be displayed separated
by a space.

<Note>
<svelte:fragment slot="header">Newlines in terminator or separator are ignored</svelte:fragment>
<svelte:fragment slot="content">
A terminator or separator should not contain a newline character. Horizontal or vertical layout is
purely determined by the keywords <code>@horizontal</code> and <code>@vertical</code>.
</svelte:fragment>
</Note>

### <a name="tables"></a>Tables
If a property is a list, you can choose to project it as a table. Tables can be either row or column based.
Row based means that each element of the list is displayed in a row. Column based, obviously, means that 
each element is displayed in a single column. The default is row based. 

Defining a table is a two-step process. 
1. Add the keyword `@table` to the list property that
you want to display as a table. Optionally, add one of the keywords `@rows` or `@columns`.
2. Add a table-projection to the type of the property. The table-projection defines
the headers of the table and which parts of the list elements are displayed in which row or column.

Note that you only need to include one
table projection for both column and row based tables. ProjectIt will swap the entries when needed.

For example, to project the `functions` property of concept `Entity` as a column based table, you can use the following code.

```ts
// tutorial-language/defs/LanguageDefinition.edit#L73-L81

Entity {
    @projection normal [
        [?${self.isCompany @keyword[COMPANY]}]
        entity ${self.name} [? base ${self.baseEntity}] {
            ${self.attributes @vertical }       // this list is projected as a vertical list without separator or terminator
            ${self.functions  @table @columns } // this list is projected as a column based table
        }
    ]
}
```

Given the above example, there should also be a projection tagged `@table` for the concept `EntityFunction`. 
Below four columns/rows are defined, each with its own header. 

```ts
// tutorial-language/defs/LanguageDefinition.edit#L115-L121

EntityFunction {
    @table [
        Name         | parameters          | type                 | body
        ${self.name} | ${self.parameters @table } | ${self.declaredType} | ${self.expression}
    ]
}

```

Note that the manner in which each of the properties of a single function are displayed, will be determined
by their own projections. In this example, `self.parameters` is a list, and will be displayed as another table.
The inner table will, however, be row-based, as this is the default.

Note also that the whitespace between the headers is not needed. However, for clarity, it is probably
good style to align the column/row-separators.

### Optional Projections

When a property is marked optional in the language structure definition (the .ast files), the projection
of this property should also be optional. This is indicated by '`[?`'. 

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
// tutorial-language/defs/LanguageDefinition.edit#L73-L82

Entity {
    @projection normal [
        [?${self.isCompany @keyword[COMPANY]}]
        entity ${self.name} [? base ${self.baseEntity}] {
            ${self.attributes @vertical }       // this list is projected as a vertical list without separator or terminator
            ${self.functions  @table @columns } // this list is projected as a column based table
        }
    ]
}

```

### Keyword Projections
The previous example also shows the special manner in which properties of type `boolean` can be 
projected. The property is represented by a keyword. In this case the property is `isCompany` and the 
keyword representing the property is `COMPANY`. When the value 
of the property is `true`, the keyword is shown. When the value is `false`, the keyword is not shown.

The user can change the value of the property using the keyword as trigger.

// TODO add limited projections

### Projection Names
Each projection can have a name. Currently, these names are not in use, but in future we plan to 
use these names to build a number of sets of projections that are coordinated to operate together.

For instance, you could have a projection set that shows only part of the properties of some 
concepts, whereas another set shows all properties. Or you can have a set that shows suitable concepts 
as tables, and another set that shows the same concepts as text.
