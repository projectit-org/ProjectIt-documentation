# The API Level

Please, become acquainted with the [three levels of customization](/010_Intro/050_Three_Levels_of_Customization)
used by ProjectIt.
This section explains the 3rd of these three levels where you can customize ProjectIt in TypeScript.

## Customize a Pi-tool
Third level full adaptability *per concept* is currently possible for:

* [Editor](010_Editor_API)
* [Validator](040_Validator_API)
* [Typer](050_Typer_API)

To add third level adaptability for the scoper, parser and unparser is one of the
entries in our [wish list](/010_Intro/090_Future_Developments).

## Replacing a Pi-tool
All parts can be *completely replaced* at the 3rd level, thereby completely
disregarding the default and definition levels.
This is done by implementing their respective interfaces.

For the scoper, parser and unparser this is currently the only way to customize.

* [scoper]()
* [parser]()

### Pi-tool Interfaces
More information on the interfaces can be found here:
* [PiScoper](/060_Under_the_Hood/tools-interfaces/scoper-interface)
* [PiTyper](/060_Under_the_Hood/tools-interfaces/typer-interface)
* [PiValidator](/060_Under_the_Hood/tools-interfaces/validator-interface)
* [PiReader](/060_Under_the_Hood/tools-interfaces/reader-interface)
* [PiWriter](/060_Under_the_Hood/tools-interfaces/writer-interface)
* [PiStdlib](/060_Under_the_Hood/tools-interfaces/standardlib-interface)
