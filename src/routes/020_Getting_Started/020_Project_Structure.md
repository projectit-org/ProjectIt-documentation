<script>
    import Note from "../../lib/notes/Note.svelte";
</script>

# Project Structure

This description of the project structure of a ProjectIt project is based on 
the <a href="https://github.com/projectit-org/ProjectIt-example" target="_blank">ProjectIt-example</a> project which
you can clone from GitHub.

The source code (in `~/src`) in a ProjectIt project is organised into the following subfolders.

* *defs*: the language definition files.
* *picode*: the generated source code.
<Note>
  <svelte:fragment slot="header">You can use your own names for <i>defs</i> and <i>picode</i>.</svelte:fragment>
  <svelte:fragment slot="content">
  The <i>defs</i> and <i>picode</i>
  folders can have any name as long as both the <code>generate</code> script in <code>package.json</code>, and the configuration of
  the web application in the file <code>~/src/webapp/WebappConfiguration.ts</code>, are adjusted.
</svelte:fragment></Note>

* *picode/config*: code that provides the coupling between all parts of the generated workbench.
  This folder contains one file that will not be overwritten at regeneration: `ProjectitConfiguration.ts`.
  Here you can configure any [third-level customization](/030_Developing_a_Language/030_API_Level) that you want the
  generated code to take into account.
* *picode/editor*: code for the editor. This folder contains two files that will not be overwritten 
  at regeneration: `Custom<yourLanguageName>Actions.ts`and `Custom<yourLanguageName>Projection.ts`. 
  (`<yourLanguageName>` will be replaced by the name you have given your language in the .ast files.)
  These two files are the placeholders for any [third-level customization](/030_Developing_a_Language/030_API_Level) that you
  would like to do.
* *picode/language*: code that implements the language structure.
* *picode/reader*: a parser that is able to read [model units](/010_Intro/030_Models_and_Model_Units) 
  from a text string or file.
* *picode/scoper*: code for that determines which elements are visible for a certain element in the user's model.
* *picode/stdlib*: code that implements some standard elements of your language, for instance 
  [limited concepts](/030_Developing_a_Language/010_Default_Level).
* *picode/typer*: code that that determines which type is associated with a certain element in the 
  user's model. The file `Custom<yourLanguageName>TyperPart.ts` is the placeholder for any [third-level customization](/030_Developing_a_Language/030_API_Level) that you
  would like to do.
* *picode/utils*: a default implementation of a visitor for your user's model.
* *picode/validator*: code that determines whether or not certain parts of your user's model contain 
  errors. The file `Custom<yourLanguageName>Validator.ts` is the placeholder for any [third-level customization](/030_Developing_a_Language/030_API_Level) that you
  would like to do.
* *picode/writer*: code that is able to write your user's [model units](/010_Intro/030_Models_and_Model_Units) 
  in string format to a file.

* *webapp*: source code for the web-application used for all generated languages.
* Noteworthy is the file `picode/webapp/config/WebappConfiguration.ts`. This file holds the references to the generated language
workbench and the web address of the server which stores your user's models.

Another folder that can be found in the project is `~/modelstore`. This is the folder where
  the server stores all models, and it is created at the moment that the server is started.
  Each model is stored in a separate folder in which you can find its
  modelunits as `.json` files.
  
<Note>
<svelte:fragment slot="header">Be careful with handmade changes in <i>picode</i>.</svelte:fragment>
<svelte:fragment slot="content">
The contents of all folders in <i>picode</i> is divided into files (usually TypeScript classes) 
that are contained directly in the folder, and files
that are contained in the subfolder <i>gen</i>. The latter are always removed before regeneration, so be careful
not to add important code to the <i>gen</i> folder.
Code that is contained directly in each folder is not changed upon regeneration.
</svelte:fragment>
</Note>

## The Webapp and Server

For the language environment to function, more is needed than the code for the editor, validator and such. 
In particular,
there is a need for a server which can hold and provide stored users models, and for a small web application that
is able to show the editor, errors message, models that are available form the server, and so on.

Therefore, we provide a minimal *server* that stores your user models in a json format.
You can start it through the commandline:

```bash
    yarn model-server
```

A simple *web application* where you can see your language in action is also provided.
The code can be found in `~/webapp`. It was created 
using <a href="https://svelte.dev/" target="_blank">Svelte</a>. 
You can start it through the commandline:

```bash
    yarn dev
```

Note that both the server, and the web application are provided for your convenience. We assume 
that when ProjectIt is used in a larger context, these two parts will be interchanged with 
suitable choices made by the language engineer and team.
