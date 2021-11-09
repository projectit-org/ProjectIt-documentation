# The API Level

Please, become acquainted with the [three levels of customization](/010_Intro/050_Three_Levels_of_Customization)
used by ProjectIt.
This section explains the 3rd of these three levels where you can customize ProjectIt in TypeScript.

## Customize a Pi-tool
Third level full adaptability *per concept* is currently possible for:

* [Editor](/030_Developing_a_Language/030_API_Level/010_Editor_API)
* [Validator](/030_Developing_a_Language/030_API_Level/040_Validator_API)
* [Typer](/030_Developing_a_Language/030_API_Level/050_Typer_API)

To add third level adaptability for the scoper, parser and unparser is one of the
entries in our [wish list](/010_Intro/090_Future_Developments).

## Replacing a Pi-tool
All parts can be *completely replaced* at the 3rd level, thereby completely
disregarding the default and definition levels.
This is done by implementing their respective interfaces.

For the scoper, parser and unparser this is currently the only way to customize.

* [scoper](/030_Developing_a_Language/030_API_Level/060_Scoper_API)
* [parser](/030_Developing_a_Language/030_API_Level/070_Reader_API)

### Pi-tool Interfaces
More information on the interfaces can be found here:
* [PiScoper](/060_Under_the_Hood/020_The_PiTool_Interfaces/020_PiScoper_Interface)
* [PiTyper](/060_Under_the_Hood/020_The_PiTool_Interfaces/050_PiTyper_Interface)
* [PiValidator](/060_Under_the_Hood/020_The_PiTool_Interfaces/040_PiValidator_Interface)
* [PiReader](/060_Under_the_Hood/020_The_PiTool_Interfaces/060_PiReader_Interface)
* [PiWriter](/060_Under_the_Hood/020_The_PiTool_Interfaces/070_PiWriter_Interface)
* [PiStdlib](/060_Under_the_Hood/020_The_PiTool_Interfaces/080_PiStandardlib_Interface)
