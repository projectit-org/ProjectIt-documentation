







# Use of the ProjectIt Generator

The ProjectIt commandline tool  generates code from the various definition files as described in
(/040_Second_level/tutorials-intro[Language Definitions]
If you type ‘`projectit`’ in a (bash) terminal you will see
an overview of the different
arguments that can be used. For detailed help about a specific command, type: ‘`projectit  <command> -h`’.

====
<figcaption id='img-commands]
.Screenshot of commandline options
(/images/projectit-command-line-options.png[projectit-command-line-options]
====

Note that every command except *all*, used invididually (i.e. without the other commands), generates code that
does not compile correctly.

For instance, both the scoper and validator might need to use the typer, therefore the
code seeks to include the typer class, which might not be generated yet. Likewise, the editor seeks to include
the scoper.

Best way to go about is to first use the *all* command. Next, when you focus on one of the aspects of your
language, you can use the specific command for that aspect. Thus, you can keep regeneration-time as short as possible.

Note that there also is a `-watch` option to automatically run the generator when a definition file changes.
