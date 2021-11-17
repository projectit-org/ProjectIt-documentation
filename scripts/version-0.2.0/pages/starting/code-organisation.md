







# Project Structure

This description of the project structure of a ProjectIt project is based om the <a href="https://github.com/projectit-org/ProjectIt-example[https://github.com/projectit-org/ProjectIt-example, target="_blank"> project which
you can clone from github.

The source code (`~/src`) in a ProjectIt project is organised into the following subfolders.

Note that the *defs* and *picode*
folders can have any name as long as both the `generate` script in `package.json`, and the configuration of
the web application in the file `~/src/webapp/WebappConfiguration.ts`, are adjusted.
(See xref:./installing#template[Start with the Template project].)

* ***defs***: the language definition files.
* ***picode***: the generated source code.

*** *picode/editor*: code for the editor. This folder contains two files that will not be overwritten at regeneration: `Custom<yourLanguageName>Actions.ts`
and `Custom<yourLanguageName>Projection.ts`. These are the placeholders for any
(/050_Third_level/third-level-intro[third-level customization] that you
would like to do.
*** *picode/environment*: code that provides the coupling between all parts of the generated workbench.
*** *picode/language*: code that implements the language structure.
*** *picode/projectit*: code that enables the language engineer to configure the workbench.
   This folder contains one file that will not be overwritten at regeneration: `ProjectitConfiguration.ts`.
   Here you can configure any (/050_Third_level/third-level-intro[third-level customization] that you want the
   generated code to take into account.
*** *picode/reader*: a parser that is able to read (/010_Intro/modelunits[model units] from a text string or file.
*** *picode/scoper*: code for that determines which elements are visible for a certain element in the user's model.
*** *picode/stdlib*: code that implements some standard elements of your language, for instance (/040_Second_level/langdef-tutorial[limited concepts].
*** *picode/typer*: code that that determines which type is associated with a certain element in the user's model.
*** *picode/utils*: a default implementation of a visitor for your user's model.
*** *picode/validator*: code that determines whether or not certain parts of your user's model contain errors.
*** *picode/writer*: code that is able to write your user's (/010_Intro/modelunits[model units] in string format to a file.

* ***webapp***: source code for the web-application used for all generated languages.
*** Note worthy is the file `picode/webapp/WebappConfiguration.ts`. This file holds the references to the generated language
workbench and the web address of the server which stores your user's models.

[NOTE]
Be careful with handmade changes in *picode*, all files in
any folder called ***gen** will be **deleted* during the next generation.

Another folder that can be found in the project is `~/modelstore`. This is the folder where
the server stores all models, and it is created at the moment that the server is started.
Each model is stored in a separate folder in which you can find its
modelunits as `.json` files.

## The `gen` subfolders
The contents of all folders in ` picode` is divided into classes that are contained directly in the folder, and classes
that are contained in the subfolder `gen`. The latter are always removed before regeneration, so be careful
not to add important code to the `gen` folder.
Code that is contained directly in each folder is not changed upon regeneration.

## The webapp and server

For the language environment to function, more is needed than the code for the editor, validator and such. In particular,
there is a need for a server which can hold and provide stored users models, and for a small web application that
is able to show the editor, errors message, models that are available form the server, and so on.

Therefore, we provide a minimal **server* that stores your user models in a json format.
You can start it through the commandline:

    yarn model-server

A simple **web application* where you can see your  language in action is also provided.
The code can be found in `~/webapp`.

Note that both the server and the web application are provided for your convenience. We assume that when ProjectIt
is used in a larger context, these two parts will be interchanged with suitable choices made by the language engineer
and team.
