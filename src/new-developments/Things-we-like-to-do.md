# Intro
This list contains changes and additions to ProjectIt that we would like to do.
This list was composed on 28 december 2021. At this moment there are no priorities
given to any of the following items.

# Editor/Projection Items
1. Projections for binary expressions are not allowed.
   These projection s are handled in a special way to support editing and shopuld not be tempered with.
2. All projections will be divided into groups:
    1. **default editor**: contains all defined default projections AND all triggers, symbols, 
       and reference shortcuts. If the language engineer does not provide a default projection, 
       the tool will create one for each concept (also for abstract concepts or interfaces???).
    2. **named editor(s)**: contains extra projections for a number of concepts 
       (does not need to be very concept) that should be projected in a special manner. There
       may be multiple named editors. 
    3. Each of the above projections is in a separate .edit file. The name (or default) is defined at the top of
       the .edit file.
3. The editors are ordered; the order can be indicated by the language engineer in the configuration. The
   projections are found based on this order. If a box/projection for a concept is not present in the top editor, 
   then the next editor is searched for a projection for the concept. So on, till the default editor is reached.
4. Dynamically, the projections can be switched on and off. Only the default editor can not be switched off. 
   This means that in the search for a box/projection, the editors that are switched off are not searched.
5. Projections may specifically request that a property is displayed using a projection from a named editor. 
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
10. Sub projections for non-optional properties are not allowed.
11. A concept may not have a (binary) expression concept as base.
12. Next to the separator and terminator, we introduce an "initiator". Each element of a list
will be preceded by this string.

# AST Items
1. Properties may be overwritten by sub concepts. In that case the type of the prop in the sub concept
   must conform to the type of the prop in its super. In case two properties with the same name are 
   'inherited' from two different interfaces, or from a super concept and an interface, the types of the 
   properties must conform to each other. The sub concept will get the prop with the most restricted type.
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
4. The .ast files simply contain a series of concept/expression definitions.
     ```
   // file MyLanguage.ast
   
   concept PiEditConcept {
      reference concept: PiConcept;
      projection: PiEditProjection;
      trigger?: string;
      operator?: string;
   }
   ``` 
5. We will not make a distinction between optional lists and empty lists. Both can be used in an optional
projection. The use of optionality for lists in the .ast file will result in a warning.
6. A limited concept may be abstract. In that case no instances may be defined.
7. There should be an error or warning when the name of an instance is equal to the name of an instance in the base
   of a limited concept.
8. The keyword 'public' should only be used for properties. Any concept that has one or more 
   public properties in included in the model unit interface.   
9. The name of any instance of a limited concept should be equal to the name used to reference the instance. Eg.
   ```
   IN = {name: "IN"} // correct
   IN = {name: "in"} // incorrect
   ```
   A better solution is to include the name just once, thus not inside the {} brackets.
10. There should be an error message when an indirect property is used as expression over the ast. Eg. self.type.name.
11. When importing a model unit by parsing an external file, the name of the model unit will be the name mentioned 
    in the content of the file, if present, otherwise the filename will be used.
12. We will rethink imports...

# Validator items
1. Any checks defined on interfaces will be executed for all instances of concepts that implement these interfaces.

# Far, far away future
In the long run we will consider the following questions.
1. Do we need 'static' properties?
2. A language engineer often needs to consult the 'owning' concept of a part property. 
   Currently, this can be managed on the typescript level by using "container().container".
   Will we support this on the AST level?
3. Maybe we could define a limited concept 'on the spot'? Eg. 
   ```   
   Concept XX {
      prefix: limited {GRAPH; EDGE; NODE};
   }   
   ```
4. Might we allow lists of primitive properties in limited concepts?
5. Might we allow default values for non-primitives? E.g. in octopus the default for multiplicity is [1..1]. 
   We cannot express that at the moment. Or, a default for visibility, when it is defined as:
   ```
   interface IPackagableElement base IModelElement {
      visibility: VisibilityKind;
   }
   ```
   This could be done using a json-like notation.
6. We might consider derived properties.
   ```
   concept CollectionType base DataType implements IType {
      elementType: IType;
      metatype: CollectionMetaType;
      /isSet: boolean = metatype === CollectionMetaType:Set;
   }
   ```
