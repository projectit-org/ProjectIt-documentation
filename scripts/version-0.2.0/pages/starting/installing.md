







# Installing and Using ProjectIt

Be sure to have <a href="https://nodejs.org/[node.js, target="_blank"> and <a href="https://yarnpkg.com/[yarn, target="_blank">
running. We are typically using the latest versions of all,
although older versions likely work just as well.
You could also try and use <a href="https://www.npmjs.com/[NPM, target="_blank"> instead of yarn.

There are two ways to start with ProjectIt, either use our
xref:example[Example project] or use our xref:template[Template project].


## Start with the Example Project
The simplest manner to start working with ProjectIt is to clone the example project from github.
In the following the root of your project will be indicated with '~'.

*   Clone branch `master` from <a href="https://github.com/projectit-org/ProjectIt-example[https://github.com/projectit-org/ProjectIt-example, target="_blank">.
(For an explanation of the content of the project see xref:code-organisation[source code organisation].)

*   Next, install all necessary packages by running: +
    `yarn install`

*   Run the generator and see the generated files appearing in the folder ~/src/picode: +
    `yarn generate`

*   Start the server (note that anything that is saved in the editor will be stored in ~/modelstore): +
    `yarn model-server`

**	Open another (bash) terminal, and start the generated editor from it: +
    `yarn start`

+
This command opens your preferred browser with the generated editor for the language `Entity` on
`<a href="http://localhost:3000/[http://localhost:3000/, target="_blank">`. If Chrome is not
your preferred browser, please open the above page in Chrome, because we cannot
ensure that the editor functions as it should in other browsers.
+
We are sorry to say that webpack is usually slow, particurlarly around 10% of the inital
building. Don't worry, just wait a bit longer.

*   Try out the editor
+
If you are
having trouble using the editor, have a look at the key-bindings under the **Help* menu.


## Start with the Template project
Another way to start working with ProjectIt is to clone our template project from github. The template project provides
a shell for the generated editor that enables the user to work with multiple models and
(/010_Intro/modelunits[model units].
In the following the root of the project will be indicated with '~'.

*   Clone branch `master` from <a href="https://github.com/projectit-org/ProjectIt-template[https://github.com/projectit-org/ProjectIt-template, target="_blank">.
(For an explanation of the content of the project see xref:code-organisation[source code organisation].)

*   Next, install all necessary packages by running: +
    `yarn install`

*   Create a folder for your language in `~/src`, to hold the definition files for your language.
We usually call it *defs*, but any name will do. (Here the name *defs* will be used.)

**	Create a language definition file which defines the structure of your language. The
extension of this file must be `.ast`. You can, for instance, copy
`EntityLanguage.ast` from the ProjectIt example to your own `defs`-folder. Or, you can follow the
tutorial on (/040_Second_level/langdef-tutorial[language structure definition].
+
To start with, you only need to define the language structure,
defaults will be generated for the editor, scoper, typer, and validator.

*   Next, adjust the `scripts` entry in the *package.json* file. The `generate`
script should include your *defs* folder and the folder where you want the generated code to be stored.
In the following screenshot, we use `~/src/defs` and `~/src/picode`, respectively.

====
<figcaption id='img-packagejsonadjustment]
.Screenshot of package.json
(/images/packagejsonadjustment.png[packagejsonadjustment]
====

*   Run the generator and see the generated files appearing in the folder where you
decided to store the generated code (in the screenshot we use `~/src/picode`): +
    `yarn generate`

*   Adjust the configuration of the web application by changing the two lines in the file
`~/src/webapp/WebappConfiguration.ts`.

====
<figcaption id='img-webapp-config-adjustment]
.Screenshot of WebappConfiguration
image::webappconfiguration.png[webappconfiguration]
====

*   Start the server (note that anything that is saved in the editor will be stored in `~/modelstore`): +
    `yarn model-server`

**	Open another (bash) terminal, and start the generated editor from it: +
    `yarn start`

+
This command opens your preferred browser with the generated editor for your language on
`<a href="http://localhost:3000/[http://localhost:3000/, target="_blank">`. If Chrome is not
your preferred browser, please open the above page in Chrome, because we cannot
ensure that the editor functions as it should in other browsers.
+
We are sorry to say that webpack is usually slow, particurlarly around 10% of the inital
building. Don't worry, just wait a bit longer.

* Try out the editor
+
If you are
having trouble using the editor, have a look at the key-bindings under the **Help* menu.

## Next steps
Now you are ready for a closer look at ProjectIt. You can for instance:

* Have a look at how the example language is defined by browsing through the language definition
files in the ProjectIt Example project. You can find them in `~/src/defs`,
* Or, follow our (/040_Second_level/tutorials-intro[tutorials] to create your own language,
* Have a look at the xref:./code-organisation[source code organisation] of the generated project,
* See what the different options are for calling the xref:./commandline[ProjectIt generator].
