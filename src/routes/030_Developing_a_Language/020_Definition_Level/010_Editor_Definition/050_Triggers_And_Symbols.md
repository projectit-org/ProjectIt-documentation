### Triggers and Symbols

The example above, the projection for `IfExpression`, also shows how to define a **trigger**, and
a **symbol** for an expression. The trigger is a string of characters that is used to trigger the creation
of an instance of concept `IfExpression`.

In the next example, the symbol is used to define the operator of the binary expression `PlusExpression`.
```ts
// tutorial-language/defs/LanguageDefinition.edit#L55-L57

IfExpression {
    [
    if ${self.condition} then
```
