






# Third Level Customization of the Typer

The typer can not yet be customized **per concept**. Instead, you can replace the whole typer by one create yourself.
The new typer needs to implement the following interface.


```ts
// ../../../../core/src/typer/PiTyper.ts[tag=typer-interface]
```ts

## Adjusting the Environment
Next you need to tell ProjectIt to use this new typer instead of the generate one. You do this by
changing the line that initializes the typer in the class `<yourLanguageName>Environment`. You can find it
in `~/picode/environment/`. Obviously,
you need to exchange `<yourLanguageName>` by the name of the language that you are creating.

Suppose the class `YourTyper`
holds the typer with the improvements that you have made, then the entry in the environment class would be:


```ts
export class EntityEnvironment implements PiEnvironment {
    ...
    typer: PiTyper # new YourTyper();
    ...
}
```ts
