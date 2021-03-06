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
