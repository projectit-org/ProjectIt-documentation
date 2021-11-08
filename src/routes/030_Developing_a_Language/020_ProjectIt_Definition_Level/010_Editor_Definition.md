<script>
    import Note from "../../../lib/notes/Note.svelte";
</script>

# The Editor Definition

The editor definition is the definition of the **concrete syntax** of the language. It is used for the generation of the editor, as
well as the generation of the parser and unparser. The concrete syntax given in the editor definition is also used
to produce better readable error messages as produced by the validator.

### <a name="editor-three-levels" /> Three-level definition
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
tutorial on [using the framework](/050_Third_level/010_The_Editor_at_the_Third_Level).

## <a name='operand'/> The Editor Definition File
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
the parts surrounded by $&#123; &#125;, is taken literally, including any indentation.

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

<Note>#### Indentation is incremental
This is not completely true. When a `Text` element is used within another projection,
the indentation that is defined by the projection in the definition for `Text` will be preceded
by any indentation defined for the enclosing concept.
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

FunctionCallExpression {
    @projection showAll
        [+
        CALL ${self.functionDefinition} (  )
        ]
    @trigger "function"
}
```

### Including Subprojections

By using <code>$&#123; &#125;</code> you tell ProjectIt to include a property. Its projection is defined 
by the projection for its concept.

In the following example <code>$&#123;self.condition&#125;</code> is a property of type `BooleanLiteralExpression`.
It will be projected according to the definition for this concept, whereas <code>$&#123;self.whenTrue&#125;</code>
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
The default is horizontal.

Furthermore, you can add either a *separator* string, which will be shown in between all elements, 
or a *terminator* string, which will be shown after each element. Both are optional.
```ts
// tutorial-language/defs/LanguageDefinition.edit#L101-L114

EntityModelUnit {
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
### Optional Projections
When a property is marked optional in the language structure definition (the .ast files), the projection
of this property should also be optional. This is indicated by '`[?`'. 

In the next example the property `baseEntity` is only shown if it is present. If it is not present,
the text 'base' is omitted as well. The trigger of its concept (which is `Entity` itself) can be used 
to start the action of creating this property.

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
            ${self.attributes @vertical }
            ${self.functions @vertical }
        }
    ]
    @trigger "entity"
}
```

### Keyword Projections
The previous example also shows the special manner in which properties of type `boolean` can be 
projected. The property is represented by a keyword. In this case the property is `isCompany` and the 
keyword representing the property is `COMPANY`. When the value 
of the property is `true`, the keyword is shown. When the value is `false`, the keyword is not shown.

The user can change the value of the property using the keyword as trigger.

### Projection Names
Each projection can have a name. Currently, these names are not in use, but in future we plan to 
use these names to build a number of sets of projections that are coordinated to operate together.

For instance, you could have a projection set that shows only part of the properties of some 
concepts, whereas another set shows all properties. Or you can have a set that shows suitable concepts 
as tables, and another set that shows the same concepts as text.
