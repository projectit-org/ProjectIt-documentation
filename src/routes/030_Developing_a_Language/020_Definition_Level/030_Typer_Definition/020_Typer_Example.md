# Generic Types: an Example Typer Definition

This example shows how generic types and unit of measurements can be defined.

## The Structure Definition of the Example Language
Obviously, we first need a structure definition of the example language. The language is very simple,
its units consists of lists of expression - declared type pairs. Ultimately, we want to compare the declared 
type with the type of the expression.

```text
UnitA correctExps

12 : NUMBER;
"string" : STRING;
2345: NUMBER;
"this is a large string": STRING;
true : BOOLEAN;
false: BOOLEAN;

Set{ true, true, false } : Set<BOOLEAN>;
Bag { Set { 12, 13, 14 }, Set { 12, 13, 14, 15, 16 } } : Bag<Set<NUMBER>>;

124 Meters : Meters<NUMBER>;
45 kWh : kWh<NUMBER>;
```

The type in this list is an instance of concept **TypeUsage**, which comes in two flavours: a type declaration,
and a type reference, that holds a reference to another AST node. (Below you can find the complete .ast input.)

```text
abstract concept TypeUsage {
}

concept TypeRef base TypeUsage  {
	reference type: NamedType;
}

abstract concept TypeDecl base TypeUsage {
}
```

There are two options for a type declaration, a generic type, and a unit of measurement. For this example,
we have used the names of the generic types from the Object Constraint Language: Set, Bag, Sequence, and Collection.
Note that these type declarations are part of the AST. They are not type concepts themselves.

```text
concept GenericType base TypeDecl {
    baseType: TypeUsage;
    kind: GenericKind; // is it a set, sequence, bag, or anything else
}
limited GenericKind { Set; Sequence; Bag; Collection; }

concept UnitOfMeasurement base TypeDecl {
    reference baseType: PredefinedType; // is always NUMBER!!
    unit: UnitKind; // is it measured in km, kWh, grams, or anything else
}
limited UnitKind { Meters; Grams; kWh; Hours; }
```

The definitions of the expressions in the example language are straightforward. There are literal expressions for
strings, booleans, and number, as well as generic literals and unit literals.

```text
expression UnitLiteral base Exp {
    // 62 kilogram, or 112 miles
    inner: NumberLiteral;
    unit: UnitKind;
}

expression GenericLiteral base Exp {
    // Set{ 12, 14, 16, 18 }
    content: Exp[];
    kind: GenericKind;
}
```

## The Typer Definition of the Example Language

Now, we are able to focus on the typer definition. Because types in ProjectIt do not reside within the AST, 
but are completely separate from it, we need to associate a type concept with each of our type declarations.

First, we define a type concept that corresponds 
with our type declaration called *GenericType*, and one that corresponds with *UnitOfMeasurement*. 
They are quite similar to their AST counterparts, but note that here we use **PiType** as type for the property. 
We want to build a structure of type concepts, not of AST nodes!

```text
type TT_GenericType {
    base: PiType;
    kind: GenericKind;
}

type TT_MeasurementType {
    base: PiType;
    unit: UnitKind;
}
```

Next, we associate the AST nodes with the type concepts, using infertype rules. When invoked, these rules will create a new instance of 
the type concepts. We do not only associate the type declarations with these type concepts, but also the literal expressions, because, 
ultimately, we want to compare the declared type with the type of the expression. 

```text
GenericType { // Set<BOOLEAN>
    infertype TT_GenericType {
        base: typeof(self.baseType),
        kind: self.kind
    };
}

UnitOfMeasurement { // kWh<NUMBER>
    infertype TT_MeasurementType {
        base: typeof(self.baseType),
        unit: self.unit
    };
}

UnitLiteral { // 62 kilogram, or 112 miles
    infertype TT_MeasurementType {
                  base: typeof(self.inner),
                  unit: self.unit
              };
}

GenericLiteral { // Set{ 12, 14, 16, 18 }
    infertype TT_GenericType {
        base: typeof(self.content),
        kind: self.kind
    };
}
```

To be able to compare the types of expressions and of type declarations, 
we need to state the *equalsto* and/or *conformsto* rules.

```text
TT_GenericType {
    equalsto x:TT_GenericType where {
            x.base equalsto self.base;
            x.kind equalsto self.kind;
        };
    conformsto other:TT_GenericType where {
            // both conditions must be true
            self.base conformsto other.base;
            self.kind conformsto other.kind;
        };
}

GenericKind {
    Set conformsto Collection;
    Sequence conformsto Collection;
    Bag conformsto Collection;
}

TT_MeasurementType {
    equalsto aap:TT_MeasurementType where {
            aap.base equalsto self.base;
            aap.unit equalsto self.unit;
        };
    conformsto rr:TT_MeasurementType where {
            self.base conformsto rr.base;
            self.unit equalsto rr.unit;
        };
}
```

# The Complete Structure Definition

# The Complete Typer Definition
