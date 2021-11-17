






# Third Level Customization of the Validator

The validator can be adjusted on level 3 by adding a single Typescript class. This class should implement
    the worker part of the visitor pattern, adding checks per node of the AST that is visited.

You can add the Typescript class anywhere, providing you let ProjectIt know where the file can be found through
the ProjectIt configuration.
See

## You own Validation Class
* Create a Typescript file somewhere, for instance in `~/picode/validator`. Note, again, to not add it to the `~/picode/validator/gen` folder,
as this will be delete upon regeneration.
* Create a class in this file and let this class implement the generated `<yourLanguageName>CheckerInterface`.
Obviously, `<yourLanguageName>` needs to be replaced by the name of your language.
+
This is the interface to be implemented for the language called `Entity`.

```ts
    export interface EntityCheckerInterface extends EntityDefaultWorker {
        errorList: PiError[];
    }
```ts
[start=3]
* Let your class extend the generated default AST worker part of the visitor pattern,
which is called `<yourLanguageName>DefaultWorker`.
* Now implement any of the methods of the default worker by putting in your validation in
the corresponding model element method. This method will override the (empty) default implementation.
The  validation error should be pushed onto the `errorList` attribute. Therefore, each error must implement the
(/060_Under_the_Hood/tools-interfaces/validator-interface#PiError[PiError] interface.

The result of the above should look something like this:


```ts
// validator/CustomValidation.ts[tag=custom-validator]
```ts

In this example only nodes of type `EntityFunction` are checked. If the name of the node equals `determine` than an error is
pushed on the `errorList`.

If you want the walker to stop when an erroneous node is found you
should return `true`, else return `false`.

## The Configuration
You should let ProjectIt know where it can find your customized validation class by adding an instance of your class to the
`customValidations` array in
the file `ProjectitConfiguration.ts`. You will find this file in `~/picode/projectit`.
It is generated once, and wil not be overwritten on regeneration.

Using the above example class, the configuration should look like this:


```ts
// projectit/ProjectitConfiguration.ts[tag=custom-validator]
```ts

