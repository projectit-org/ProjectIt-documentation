

:page-has*children: true
:page-has*toc: false



# ProjectIt -- A Projectional Editor for the Web

ProjectIt is a Language Workbench (...in the making :-) ). It is a tool for creating mini-languages,
which are also known as <a href="https://en.wikipedia.org/wiki/Domain-specific*language[Domain Specific Languages (DSLs), target="_blank">. ProjectIt is able to generate an integrated
set of editor, scoper, typer, and validator for your mini-language from a small set of definitions.

The core of ProjectIt is a TypeScript/JavaScript framework for building web-based, projectional
editors. Editing expressions in a projectional editor is a well-known challenge. What makes the
ProjectIt framework unique is the fact that it has built-in support for expressions, so you can
easily make a projectional editor that allows for a natural manner of editing.

On top of the core framework there are five generators, each of which generates part
of the work environment for your mini-language:

* The **language structure* defines all the concept, properties and relationships in the language.
* The **editor* defines how a model in the language looks like on the screen.
  It also defines what editing commands can be used to change the model.
* The **scoper* defines how names that refer to other elements are being resolved.
* The **typer* defines what the type of an element is.
* The **validator* defines what a correct model looks like and wil provide errors whenever a model breaks these rules.

Currently, ProjectIt does not support the creation of debuggers, interpreters, generators, and
such. Indeed, we have a (large) (/010_Intro/wish-list[wish list] of extra features
that we would like to implement in
the future.
In some cases,like e.g code generators, we think that integration  with existing tools is the best solution.
In other cases we plan to provide ProjectIt components for specific functionality.
Given time, we hope to realize many of these extra items. If you want to know why
we have chosen this development route, read our statement on the (/010_Intro/philosophy[philosophy]
behind the tool.

We assume that people that want to use ProjectIt know the basic about making mini-languages. For instance,
the terms metamodel, abstract syntax tree, etc, should be familiar. When we address the ProjectIt
user we call him or her a **language engineer**. The people that will be using the generated editor
and its environment are simply called **users**.

So welcome, language engineer, to the world of ProjectIt. In this website you can find information
on many subjects. You could ..

* .. start by finding out what (/010_Intro/projectional-editing[projectional editing] is.
* .. see how you can (/020_Getting_Started/installing[install and use] ProjectIt.
* .. find out how to define a language and its editor, etc. in the (/040_Second_level/tutorials-intro[tutorials].
* .. dive deeper into the (/020_Getting_Started/code-organisation[structure of the generated code].
* .. get to know more about the (/060_Under_the_Hood/meta-documentation-intro[meta-code] of ProjectIt.

Have fun! If you have questions that are not answered in this documentation, please email us at info AT projectit.org.

