<script>
    import Figure from "../../../lib/figures/Figure.svelte";
</script>

# The Projectional Editor Framework

The Projectional Editor Framework is written in TypeScript and 
<a href="https://svelte.dev/" target='_blank'>Svelte</a>. 
This page provides an overview of the Framework. If you want to know how to use it, see 
[Editor API](/030_Developing_a_Language/030_API_Level/010_Editor_API).

## Projection Layout Based on Boxes
The layout of every visible element in the editor is based on *boxes*. A box is a rectangular area
in the editor. A box can contain any number of child boxes. Every AST node is projected in a box.

Let's look at a small example to start with. Figure 1 shows the projection of the concept `StringLiteral`. This is mapped to a horizontal list
of a quote ("), an editable text with the value of the StringLiteral, and a closing quote ("). Note
that the quotes are not part of the AST. They are part of the concrete syntax used in this projection
of the AST.

<Figure 
imageName='mapping-example-stringliteral.svg'
caption='Mapping a StringLiteral'
figureNumber={1}
/>

The framework provides many types of predefined boxes. See [Boxes]() for an overview. In TypeScript this projection might look something like:

```ts
new HorizontalListBox( [
    new LabelBox("\""),
    new TextBox(stringLiteral.value),
    new LabelBox("\"")
]);
```



Every projection must implement the xref:../generated-code/interfaces[*PiProjection*] interface.

## Coupling Behavior to Boxes
User actions on boxes need to be translated into interactions with the projected AST. To know which part of the
projection represents the AST node, we give each `Box` in the projection a *role*, which is unique
within its parent box. This way we can identify every box by its model element plus its role.

In the following figure the roles are shown above the boxes in green.

<Figure
caption='Mapping a StringLiteral with Roles'
imageName='mapping-example-stringliteral-with-roles.svg'
figureNumber={2}
/>

We can now show the full typescript code for this projection. Given that `literal` is the `StringLiteral` object:

```ts
new HorizontalListBox(literal, "string-literal", [      // <1>
    new LabelBox(literal, "start-quote", '"'),          // <2>
    new TextBox(                                        // <3>
        literal,
        "string-value",
        () => literal.value,
        (v: string) => (literal.value # v)
    ),
    new LabelBox(literal, "end-quote", '"')             // <4>
])
```

1. The overall horizontal list box to group everything
2. The first label box for the start quote
3. The text box for the value of the string literal
4. The second label box for the end quote

The behavior coupled to a *Box* is defined by an `action`. To identify which action should be executed,
each behavior is specified by:

* one or more *box roles*, specifying that the behavior is only active
in boxes with that specific role,
* a *trigger*, describing the key(s) that will trigger the behavior, and
* an *action*,  which is a typescript/javascript function the will be executed when the
behavior is being triggered.

Actions are further described in [Actions](xref:defining*actions).


