







# Models and Model Units

Contrary to what is common in the world of
<a href="https://en.wikipedia.org/wiki/Domain-specific*language[Domain Specific Languages (DSLs)] we believe that a model
is often too large to handle. When dealing with source code, the times have long gone that a complete
application was written in a single file. Since the 1980s every self-respecting programming language has supported some kind of modularization.
It is our strong conviction that this approach should also be taken when dealing with models.

Similar to how the source code for a single application is split into classes and/or modules, every model in ProjectIt is split
into **model units**. Each model may contain units of multiple types, either an array of units, or a single unit.


```ts
// defs/LanguageDefinition.ast[tag=model]
```ts
In the above example, an *EntityModel* consists of any number of *entityModelUnit*'s and one *SomeOtherModelUnit*.

The notion of model units has been around for some time.
At *Eclipse Summit 2008 Modeling Symposium* model units are introduced in *Big Models
an Alternative Approach*.
Earlier model units are described under the term Partial Models at the ECMDA-FA 2007 conference in *Building a Flexible Software Factory Using Partial Domain Specific Models*.
More recently model units have been used within the Mendix meta-model to allow for working with large models
in their web based modeling tools.  This was presented at Splash 2016 *Making Mendix Meta Model Driven*.


## Model Unit Interfaces
Another essential idea that we borrow from programming is *information hiding*.
Every model unit in ProjectIt defines an interface.
The interface determines which elements from the model unit are visible (i.e can be referred to) to other units in the same model.

In the projectIt definition of the language structure, or AST, concepts and properties can be defined to be **public**.
Only these public parts of a model unit can be referenced from another model unit.
The default scoper (the one from xref:./050_Three_Levels_of_Customization#levels[level 1]) already takes
the difference between public and private concepts and properties into account when resolving references.

Note that the language designer defines which elements in a model are referrable.
From the point of view of the user this is a given part of the language he is using.
This is similar to restrictions in a programming language that state that only certain types of elements may be exported/imported.

Note that references are by name, like they are in programming languages.
This is unlike many other modeling environments, where references are done by id.
