// Generated by the ProjectIt Language Generator.
import { PiError, PiErrorSeverity, PiTyper, PiWriter, PiNamedElement } from "@projectit/core";
import {
    Entity,
    AttributeType,
    MockEnumeration,
    AbsExpression,
    MultiplyExpression,
    EntityFunction,
    AttributeWithLimitedType,
    Text,
    AttributeWithEntityType,
    Variable,
    EntityExpression,
    AppliedFeature,
    AttributeRef,
    VariableRef,
    LiteralExpression,
    StringLiteralExpression,
    NumberLiteralExpression,
    BooleanLiteralExpression,
    BinaryExpression,
    PlusExpression,
    DivideExpression,
    AndExpression,
    OrExpression,
    ComparisonExpression,
    LessThenExpression,
    GreaterThenExpression,
    EqualsExpression,
    FunctionCallExpression,
    IfExpression,
    BaseType,
    Type,
    SomeOtherModelUnit,
    EntityModelUnit
} from "../../language/gen";
import { EntityEnvironment } from "../../environment/gen/EntityEnvironment";
import { EntityDefaultWorker } from "../../utils/gen";
import { EntityCheckerInterface } from "./EntityValidator";
import { reservedWordsInTypescript } from "./ReservedWords";

/**
 * Class EntityValidationRulesChecker is the part of validator that is generated from, if present,
 * the validator definition. As the other checkers, it uses the visitor pattern.
 * Class EntityDefaultWorker implements the traversal of the model tree. This class implements
 * the actual checking of each node in the tree.
 */
export class EntityValidationRulesChecker extends EntityDefaultWorker implements EntityCheckerInterface {
    // 'myWriter' is used to provide error messages on the nodes in the model tree
    myWriter: PiWriter = (EntityEnvironment.getInstance() as EntityEnvironment).writer;
    // 'typer' is used to implement the 'typecheck' rules in the validator definition
    typer: PiTyper = (EntityEnvironment.getInstance() as EntityEnvironment).typer;
    // 'errorList' holds the errors found while traversing the model tree
    errorList: PiError[] = [];

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeAttributeType(modelelement: AttributeType): boolean {
        let hasFatalError: boolean = false;
        // self.extra >= 12
        if (!(modelelement.extra >= 12)) {
            this.errorList.push(new PiError("'self.extra >= 12' is false", modelelement, modelelement.name, PiErrorSeverity.ToDo));
        } // self.extra <= 30
        if (!(modelelement.extra <= 30)) {
            this.errorList.push(new PiError("'self.extra <= 30' is false", modelelement, modelelement.name, PiErrorSeverity.ToDo));
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeEntityModelUnit(modelelement: EntityModelUnit): boolean {
        let hasFatalError: boolean = false;
        // @notEmpty self.entities
        if (modelelement.entities.length == 0) {
            this.errorList.push(
                new PiError("List 'self.entities' may not be empty", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        } // isunique name in self.entities
        let uniqueNameInEntities: string[] = [];
        modelelement.entities.forEach((elem, index) => {
            if (elem === undefined || elem === null) {
                this.errorList.push(
                    new PiError(
                        `Element[${index}] of property 'entities' has no value`,
                        modelelement.entities[index],
                        modelelement.name,
                        PiErrorSeverity.ToDo
                    )
                );
            } else {
                if (!uniqueNameInEntities.includes(elem.name)) {
                    uniqueNameInEntities.push(elem.name);
                } else {
                    this.errorList.push(
                        new PiError(
                            "The value of property 'name' is not unique in list 'entities'",
                            modelelement.entities[index],
                            modelelement.name,
                            PiErrorSeverity.ToDo
                        )
                    );
                }
            }
        }); // @notEmpty self.functions
        if (modelelement.functions.length == 0) {
            this.errorList.push(
                new PiError("List 'self.functions' may not be empty", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        } // isunique name in self.functions
        let uniqueNameInFunctions: string[] = [];
        modelelement.functions.forEach((elem, index) => {
            if (elem === undefined || elem === null) {
                this.errorList.push(
                    new PiError(
                        `Element[${index}] of property 'functions' has no value`,
                        modelelement.functions[index],
                        modelelement.name,
                        PiErrorSeverity.ToDo
                    )
                );
            } else {
                if (!uniqueNameInFunctions.includes(elem.name)) {
                    uniqueNameInFunctions.push(elem.name);
                } else {
                    this.errorList.push(
                        new PiError(
                            "The value of property 'name' is not unique in list 'functions'",
                            modelelement.functions[index],
                            modelelement.name,
                            PiErrorSeverity.ToDo
                        )
                    );
                }
            }
        }); // @validName self.name
        if (!this.isValidName(modelelement.name)) {
            this.errorList.push(
                new PiError("'" + modelelement.name + "' is not a valid identifier", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeEntity(modelelement: Entity): boolean {
        let hasFatalError: boolean = false;
        // @notEmpty self.attributes
        if (modelelement.attributes.length == 0) {
            this.errorList.push(
                new PiError("List 'self.attributes' may not be empty", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        } // isunique name in self.attributes
        let uniqueNameInAttributes: string[] = [];
        modelelement.attributes.forEach((elem, index) => {
            if (elem === undefined || elem === null) {
                this.errorList.push(
                    new PiError(
                        `Element[${index}] of property 'attributes' has no value`,
                        modelelement.attributes[index],
                        modelelement.name,
                        PiErrorSeverity.ToDo
                    )
                );
            } else {
                if (!uniqueNameInAttributes.includes(elem.name)) {
                    uniqueNameInAttributes.push(elem.name);
                } else {
                    this.errorList.push(
                        new PiError(
                            "The value of property 'name' is not unique in list 'attributes'",
                            modelelement.attributes[index],
                            modelelement.name,
                            PiErrorSeverity.ToDo
                        )
                    );
                }
            }
        }); // @notEmpty self.functions
        if (modelelement.functions.length == 0) {
            this.errorList.push(
                new PiError("List 'self.functions' may not be empty", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        } // isunique name in self.functions
        let uniqueNameInFunctions: string[] = [];
        modelelement.functions.forEach((elem, index) => {
            if (elem === undefined || elem === null) {
                this.errorList.push(
                    new PiError(
                        `Element[${index}] of property 'functions' has no value`,
                        modelelement.functions[index],
                        modelelement.name,
                        PiErrorSeverity.ToDo
                    )
                );
            } else {
                if (!uniqueNameInFunctions.includes(elem.name)) {
                    uniqueNameInFunctions.push(elem.name);
                } else {
                    this.errorList.push(
                        new PiError(
                            "The value of property 'name' is not unique in list 'functions'",
                            modelelement.functions[index],
                            modelelement.name,
                            PiErrorSeverity.ToDo
                        )
                    );
                }
            }
        }); // @validName self.name
        if (!this.isValidName(modelelement.name)) {
            this.errorList.push(
                new PiError("'" + modelelement.name + "' is not a valid identifier", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeAttributeWithLimitedType(modelelement: AttributeWithLimitedType): boolean {
        let hasFatalError: boolean = false;
        // @validName self.name
        if (!this.isValidName(modelelement.name)) {
            this.errorList.push(
                new PiError("'" + modelelement.name + "' is not a valid identifier", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeVariable(modelelement: Variable): boolean {
        let hasFatalError: boolean = false;
        // @validName self.name
        if (!this.isValidName(modelelement.name)) {
            this.errorList.push(
                new PiError("'" + modelelement.name + "' is not a valid identifier", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeEntityFunction(modelelement: EntityFunction): boolean {
        let hasFatalError: boolean = false;
        // @typecheck conformsTo( self.expression, self.declaredType )
        if (!this.typer.conformsTo(modelelement.expression, modelelement.declaredType?.referred)) {
            this.errorList.push(
                new PiError(
                    "Type " +
                        this.myWriter.writeNameOnly(this.typer.inferType(modelelement.expression)) +
                        " of [" +
                        this.myWriter.writeNameOnly(modelelement.expression) +
                        "] does not conform to " +
                        this.myWriter.writeNameOnly(modelelement.declaredType?.referred),
                    modelelement.expression,
                    modelelement.name,
                    PiErrorSeverity.ToDo
                )
            );
        } // isunique name in self.parameters
        let uniqueNameInParameters: string[] = [];
        modelelement.parameters.forEach((elem, index) => {
            if (elem === undefined || elem === null) {
                this.errorList.push(
                    new PiError(
                        `Element[${index}] of property 'parameters' has no value`,
                        modelelement.parameters[index],
                        modelelement.name,
                        PiErrorSeverity.ToDo
                    )
                );
            } else {
                if (!uniqueNameInParameters.includes(elem.name)) {
                    uniqueNameInParameters.push(elem.name);
                } else {
                    this.errorList.push(
                        new PiError(
                            "The value of property 'name' is not unique in list 'parameters'",
                            modelelement.parameters[index],
                            modelelement.name,
                            PiErrorSeverity.ToDo
                        )
                    );
                }
            }
        }); // @validName self.name
        if (!this.isValidName(modelelement.name)) {
            this.errorList.push(
                new PiError("'" + modelelement.name + "' is not a valid identifier", modelelement, modelelement.name, PiErrorSeverity.ToDo)
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeAbsExpression(modelelement: AbsExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.expr, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.expr, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.expr) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.expr,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeMultiplyExpression(modelelement: MultiplyExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.left, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.left, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck equalsType( self.right, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.right, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.right) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.right,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck conformsTo( self.left, self.right )
        if (!this.typer.conformsTo(modelelement.left, modelelement.right)) {
            this.errorList.push(
                new PiError(
                    "Type " +
                        this.myWriter.writeNameOnly(this.typer.inferType(modelelement.left)) +
                        " of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] does not conform to " +
                        this.myWriter.writeNameOnly(modelelement.right),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforePlusExpression(modelelement: PlusExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.left, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.left, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck equalsType( self.right, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.right, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.right) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.right,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck conformsTo( self.left, self.right )
        if (!this.typer.conformsTo(modelelement.left, modelelement.right)) {
            this.errorList.push(
                new PiError(
                    "Type " +
                        this.myWriter.writeNameOnly(this.typer.inferType(modelelement.left)) +
                        " of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] does not conform to " +
                        this.myWriter.writeNameOnly(modelelement.right),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeDivideExpression(modelelement: DivideExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.left, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.left, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck equalsType( self.right, AttributeType:Integer )
        if (!this.typer.equalsType(modelelement.right, AttributeType.Integer)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.right) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Integer),
                    modelelement.right,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeAndExpression(modelelement: AndExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.left, AttributeType:Boolean )
        if (!this.typer.equalsType(modelelement.left, AttributeType.Boolean)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Boolean),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck equalsType( self.right, AttributeType:Boolean )
        if (!this.typer.equalsType(modelelement.right, AttributeType.Boolean)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.right) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Boolean),
                    modelelement.right,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeOrExpression(modelelement: OrExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.left, AttributeType:Boolean )
        if (!this.typer.equalsType(modelelement.left, AttributeType.Boolean)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Boolean),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck equalsType( self.right, AttributeType:Boolean )
        if (!this.typer.equalsType(modelelement.right, AttributeType.Boolean)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.right) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Boolean),
                    modelelement.right,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeComparisonExpression(modelelement: ComparisonExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.left, self.right )
        if (!this.typer.equalsType(modelelement.left, modelelement.right)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.left) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(modelelement.right),
                    modelelement.left,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * @param modelelement
     */
    public execBeforeIfExpression(modelelement: IfExpression): boolean {
        let hasFatalError: boolean = false;
        // @typecheck equalsType( self.condition, AttributeType:Boolean )
        if (!this.typer.equalsType(modelelement.condition, AttributeType.Boolean)) {
            this.errorList.push(
                new PiError(
                    "Type of [" +
                        this.myWriter.writeNameOnly(modelelement.condition) +
                        "] should equal " +
                        this.myWriter.writeNameOnly(AttributeType.Boolean),
                    modelelement.condition,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        } // @typecheck conformsTo( self.whenTrue, self.whenFalse )
        if (!this.typer.conformsTo(modelelement.whenTrue, modelelement.whenFalse)) {
            this.errorList.push(
                new PiError(
                    "Type " +
                        this.myWriter.writeNameOnly(this.typer.inferType(modelelement.whenTrue)) +
                        " of [" +
                        this.myWriter.writeNameOnly(modelelement.whenTrue) +
                        "] does not conform to " +
                        this.myWriter.writeNameOnly(modelelement.whenFalse),
                    modelelement.whenTrue,
                    "unnamed",
                    PiErrorSeverity.ToDo
                )
            );
        }
        return hasFatalError;
    }

    /**
     * Returns true if 'name' is a valid identifier
     * @param name
     */
    private isValidName(name: string): boolean {
        if (!!!name) return false;
        // cannot start with number
        if (/[0-9]/.test(name[0])) return false;
        // may contain letters, numbers, '$', and '_', but no other characters
        if (/[.|,|!|?|@|~|%|^|&|*|-|=|+|(|)|{|}|"|'|:|;|<|>|?]/.test(name)) return false;
        if (/\\/.test(name)) return false;
        if (/[/|[|]]/.test(name)) return false;
        // may not contain whitespaces
        if (/[\t|\n|\r| ]/.test(name)) return false;
        // may not be a Typescript keyword
        if (reservedWordsInTypescript.includes(name)) return false;
        return true;
    }
}
