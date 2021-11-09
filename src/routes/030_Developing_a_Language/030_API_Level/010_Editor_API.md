
# Customization of the Editor at the API level

At the API level the editor can be changed by implementing two interfaces: 
[`PiProjection`](/060_Under_the_Hood/010_The_Editor_Framework/020_The_Editor_Interfaces/010_PiProjection_Interface) and 
[`PiAction`](/060_Under_the_Hood/010_The_Editor_Framework/020_The_Editor_Interfaces/020_PiAction_Interface). But
before you dive into all this, we suggest that you become familiar with the information
about the [ProjectIt Editor Framework](/060_Under_the_Hood/010_The_Editor_Framework).

## Convenience Custom... Files
As a convenience, ProjectIt generates templates for 
your customization in the files `~/picode/editor/Custom<yourLanguageName>Projection.ts` and `~/picode/editor/Custom<yourLanguageName>Actions.ts`
(`<yourLanguageName>` is a placeholder for the name of the language as defined in your .ast file). You can use 
these two files to add your own special projections and corresponding actions.

## Adding your Own Files
You can rename the file `~/picode/editor/Custom<yourLanguageName>Projection.ts` and/or put it in another location, or create your
own set of custom projection files. 
In that case, you need to adjust the file `~/picode/projectit/ProjectItConfiguration`.

```ts
// tutorial-language/projectit/ProjectitConfiguration.ts

/ Generated by the ProjectIt Language Generator.
import { PiProjection, PiActions, PiTyperPart } from "@projectit/core";
import { CustomEntityActions, CustomEntityProjection } from "../editor";
import { CustomEntityTyperPart } from "../typer";
import { CustomEntityValidator } from "../validator";
import { EntityCheckerInterface } from "../validator/gen";

/**
 * Class ProjectitConfiguration is the place where you can add all your customisations.
 * These will be used through the 'projectitConfiguration' constant by any generated
 * part of your language environment.
 */
class ProjectitConfiguration {
    // add your custom editor projections here
    customProjection: PiProjection[] = [new CustomEntityProjection("manual")];
    // add your custom editor actions here
    customActions: PiActions[] = [new CustomEntityActions()];
    // add your custom validations here
    customValidations: EntityCheckerInterface[] = [new CustomEntityValidator()];
    // add your custom type-providers here
    customTypers: PiTyperPart[] = [new CustomEntityTyperPart()];
}

export const projectitConfiguration = new ProjectitConfiguration();

```

## Learning More

You can learn how to write projections from [Writing Projections](/030_Developing_a_Language/030_API_Level/020_Writing_Projections).
How to create the action to accompany the projection can be learned from 
[Writing Actions'](/030_Developing_a_Language/030_API_Level/030_Writing_Actions).