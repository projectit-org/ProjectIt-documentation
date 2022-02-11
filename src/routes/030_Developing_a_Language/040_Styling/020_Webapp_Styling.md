# How to Style the Generated Work Environment

## Styling the web application

The web application can be styled using the theme presets in the file `~webapp/Theme-presets.ts`. There are two sets of 
CSS variables that determine the look of the web application, one for the light theme, and one for the dark theme.
The comments should indicate where the variable is being used.

```ts
/* File: webapp/Theme-presets.ts */

const PI_DARKBLUE = "#00008b";
const PI_LIGHTBLUE = "#d3e3fd";

export const themePresets = [
    {
        name: "light",
        colors: {
		  color: PI_DARKBLUE,                    /* Primary text color */
		  inverse_color: PI_LIGHTBLUE,           /* Text color on non_normal background */
          ... 
        }
    },
	{
		name: "dark",
    	colors: {
	      color: PI_LIGHTBLUE,                    /* Primary text color */
		  inverse_color: PI_DARKBLUE,             /* Text color on non_normal background */
          ...
        }
	}
];
```
