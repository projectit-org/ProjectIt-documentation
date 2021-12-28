# Intro
This list contains changes and additions to ProjectIt that we would like to do.
This list was composed on 28 december 2021. At this moment there are no priorities
given to any of the following items.

# Editor/Projection Items
1. Projections for binary expressions are not allowed.
2. All projections will be divided into groups:
    1. **default editor**: contains all defined default projections AND all triggers, symbols, 
       and reference shortcuts. If the language engineer does not provide a default projection, 
       the tool will create one for each concept (also for abstract concepts or interfaces???).
    2. **named editor(s)**: contains extra projections for a number of concepts 
       (does not need to be very concept) that should be projected in a special manner. There
       may be multiple named editors.
3. The editors are ordered; the order can be indicated by the language engineer in the configuration. The
   projections are found based on this order. If a box/projection for a concept is not present in the top editor, 
   then the next editor is searched for a projection for the concept. So on, till the default editor is reached.
4. Dynamically, the projections can be switched on and off. Only the default editor can not be switched off. 
   This means that in the search for a box/projection, the editors that are switched off are not searched.
5. Projections may specially request that a property is displayed using a projection from a named editor. 
   E.g. when there are three named editors: aap, noot, mies, in that order, mies being the top of the stack, 
   then the following projection which is part of aap may request a projection from mies. 
   (Note that the syntax is not settled yet.)
    ```
   editor aap
   ...
    @projection [
       ${self.part12 @as mies}
    ]
    ```
   The projection for the property will then act according to the rules in point 3, starting with mies. 
   All other projections will start their search from aap.
6. Projections can reference projections for super-concepts or (implemented) interfaces. This is done 
   by a special sub-projection.
   ```
   @projection [
       bla bla
       [@use NameOfSuperConceptOrInterface]
       bla bla bla
   ]
   ```  
7. When a projection for a super-concept or (implemented) interface is used, it is also possible to 
   request a special named projection. This is done in the same manner as for properties. The same order
   of search for the right projection/box is used.
   ```
   @projection [
       bla bla
       [@use NameOfSuperConceptOrInterface @as mies]
       bla bla bla
   ]
   ```  
   
8. In the default editor one may indicate how the two predefined boolean values are displayed/projected.

   ```
   boolean [true = "RIGHT", false = "WRONG"]
   ```  
   
9. In the keyword projection for boolean properties one may use either one keyword or two keywords. In the first,
the meaning is that when the keyword is present the value of the property is true. In the second, depending on 
   the value of the property either the first or second keyword is shown. Example:
   ```
   @projection [
       bla bla
       ${self.isAbstract @keyword[abstract]} ${self.name}
       bla bla bla
   ]
   ```   
   ```
   ...
   abstract NAME // the value of isAbstract is true
   ...
   NAME // the value of isAbstract is false
   ...
   ```     
   Example of the second possibility:
   ```
   @projection [
       bla bla
       ${self.isAbstract @keyword[abstract, concrete]} ${self.name}
       bla bla bla
   ]
   ```   
   ```
   ...
   abstract NAME // the value of isAbstract is true
   ...
   concrete NAME // the value of isAbstract is false
   ...
   ```     
11. Sub projections for non-optional properties are not allowed.
12. A concept may not have a (binary) expression concept as base.
13. Next to the separator and terminator, we introduce an "initiator". Each element of a list
will be preceded by this string.

# AST Items
1. Properties may be overwritten by sub concepts. In that case the type of the prop in the sub concept
must conform to the type of the prop in its super.
2. Limited concepts may inherit from other concepts or implement interfaces as long as these do not 
   have any non-primitive properties.
3. The model and model unit will be defined in a separate file (or file part???). They may not inherit,
   or implement interfaces. They are solely present to indicate the organisation of the model. This file also
   states the name of the language. Models and units do not need to define 'name' as property; they 
   are always present. Nor is the keyword public needed; everything is public.
   ```
   // file MyLanguage.lang
   language PiLanguage
   
   model {
      .... // other meta data ???
      content = {
         structure: PiStructureDef[];
         editor: PiEditorDef[];
         scoper: PiScoperDef[];
         typer: PiTyperDef[];
         validator: PiValidatorDef[];
      }
   }
   
   modelunit PiEditorDef {
      .... // other meta data ???
      file-extension = "edit";
      content = {
         conceptEditors: PiEditConcept[];
      }
   }
   ...
   ``` 
   The .ast files simply contain a series of concept/expression definitions.
     ```
   // file MyLanguage.ast
   
   concept PiEditConcept {
      reference concept: PiConcept;
      projection: PiEditProjection;
      trigger?: string;
      operator?: string;
   }
   ``` 
