Things to add to the docs for the next release (Anneke's branch):

1. limited concepts have no projection, but the name of the instances will be used as concrete syntax.
```
Attribute {
        [
        [?${self.visibility}] ${self.name} : ${self.type} ;
        ]
}

limited VisibilityKind {
	PUBLIC = { name: "+" }
	PRIVATE = { name: "-" }
	PROTECTED = { name: "#" }
}
```

will be shown as
```
+ title: String ;
```
When the instances are not explicitly named, they will be shown as their names.
This may be merged:
```
limited VisibilityKind {
PUBLIC = { name: "+" }
PRIVATE = { name: "-" }
PROTECTED;
}
```
```
+ title: String ;
- ghostwriter: Writer;
PROTECTED dateOfPrint: Date;
```
2. Named projections
* only allowed for non-primitive part properties => other ones do not make sense.

