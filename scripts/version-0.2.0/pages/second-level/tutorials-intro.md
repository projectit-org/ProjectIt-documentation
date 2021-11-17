

:page-has*children: true




:page-has*toc: false
# Tutorials -- Second Level Language Definitions

Please, become acquainted with the (/010_Intro/050_Three_Levels_of_Customization[three levels of language definitions] used by ProjectIt.
This section explains the second of these three levels.


## The Five Definition Files
The second level of a ProjectIt language definition can have five parts:

. xref:langdef-tutorial[The language structure], or abstract syntax tree (AST) is defined in files with extension `.ast`.
. xref:editdef-tutorial[The concrete syntax] of the language (CST), or editor definition, is defined in files with extension `.edit`.
. xref:scopedef-tutorial[The scoping] is defined in files with extension `.scope`.
. xref:typedef-tutorial[The typing] is defined in files with extension `.type`.
. xref:validdef-tutorial[The validation] is defined in files with extension `.valid`.

And yes, you can use multiple files to define one of the parts. For instance, ProjectIt will combine
multiple .ast files into one AST definition.

## The Example

In all tutorials we will be using the *Entity* language as example. The gist of the *Entity* language is that it defines
serveral `EntityModelUnits`, each of which holds `Entities` and `Functions`. `Entities` can hold `Properties`
and can hold `Functions` too. Every `Function` has a list of `Parameters` and an `Expression`.

====
<figcaption id='img-package-json]
.UML diagram of Entity Language
(/images/example-uml-diagram.png[uml-diagram-of-demo-language]
====

We are working on a few other examples. You can find them in the
development branch of <a href="https://github.com/projectit-org/ProjectIt[ProjectIt, target="_blank">.

