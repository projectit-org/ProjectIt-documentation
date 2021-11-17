






# Third Level Customization of the Scoper

The scoper can not yet be customized **per concept**. Instead, you can replace the whole scoper by one create yourself.
The new scoper needs to implement the following interface.


```ts
// ../../../../core/src/scoper/PiScoper.ts[tag=scoper-interface]
```ts

## Adjusting the Environment
Next you need to tell ProjectIt to use this new scoper instead of the generate one. You do this by
changing the line that initializes the scoper in the class `<yourLanguageName>Environment`. You can find it
in `~/picode/environment/`. Obviously,
you need to exchange `<yourLanguageName>` by the name of the language that you are creating.

Suppose the class `YourScoper`
holds the scoper with the improvements that you have made, then the entry in the environment class would be:


```ts
export class EntityEnvironment implements PiEnvironment {
    ...
    scoper: PiScoper # new YourScoper();
    ...
}
```ts
