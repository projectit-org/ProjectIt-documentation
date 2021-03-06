// Generated by the ProjectIt Language Generator.
import { PiNamedElement, Language } from "@projectit/core";
import { EntityDefaultWorker } from "../../utils/gen/EntityDefaultWorker";
import {
    EntityMetaType,
    AbsExpression,
    AndExpression,
    AppliedFeature,
    AttributeRef,
    AttributeType,
    AttributeWithEntityType,
    AttributeWithLimitedType,
    BinaryExpression,
    BooleanLiteralExpression,
    ComparisonExpression,
    DivideExpression,
    Entity,
    EntityExpression,
    EntityFunction,
    EntityModel,
    EntityModelUnit,
    EqualsExpression,
    FunctionCallExpression,
    GreaterThenExpression,
    IfExpression,
    LessThenExpression,
    LiteralExpression,
    MockEnumeration,
    MultiplyExpression,
    NumberLiteralExpression,
    OrExpression,
    PlusExpression,
    SomeOtherModelUnit,
    StringLiteralExpression,
    Text,
    Variable,
    VariableRef
} from "../../language/gen";

/**
 * Class EntityNamesCollector is part of the implementation of the scoper generated from, if present,
 * the scoper definition, using the visitor pattern.
 * Class EntityWalker implements the traversal of the model tree. This class implements
 * the collection of named parts of nodes in the tree.
 */
export class EntityNamesCollector extends EntityDefaultWorker {
    // 'namesList' holds the named elements found while traversing the model tree
    namesList: PiNamedElement[] = [];
    // 'metatype' may or may not be set; if set any named element is included only if it conforms to this type
    metatype: EntityMetaType;

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeEntityModel(modelelement: EntityModel): boolean {
        for (const z of modelelement.units) {
            this.addIfTypeOK(z);
        }
        this.addIfTypeOK(modelelement.extraUnit);
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeSomeOtherModelUnit(modelelement: SomeOtherModelUnit): boolean {
        this.addIfTypeOK(modelelement.somePart);
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeEntityModelUnit(modelelement: EntityModelUnit): boolean {
        for (const z of modelelement.functions) {
            this.addIfTypeOK(z);
        }
        for (const z of modelelement.entities) {
            this.addIfTypeOK(z);
        }
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeEntity(modelelement: Entity): boolean {
        for (const z of modelelement.attributes) {
            this.addIfTypeOK(z);
        }
        for (const z of modelelement.entAttributes) {
            this.addIfTypeOK(z);
        }
        for (const z of modelelement.functions) {
            this.addIfTypeOK(z);
        }
        for (const z of modelelement.int_attrs) {
            this.addIfTypeOK(z);
        }
        for (const z of modelelement.int_functions) {
            this.addIfTypeOK(z);
        }
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAttributeType(modelelement: AttributeType): boolean {
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeMockEnumeration(modelelement: MockEnumeration): boolean {
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAbsExpression(modelelement: AbsExpression): boolean {
        // type of expr has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeMultiplyExpression(modelelement: MultiplyExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeEntityFunction(modelelement: EntityFunction): boolean {
        // type of expression has no 'name' property
        for (const z of modelelement.parameters) {
            this.addIfTypeOK(z);
        }
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAttributeWithLimitedType(modelelement: AttributeWithLimitedType): boolean {
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeText(modelelement: Text): boolean {
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAttributeWithEntityType(modelelement: AttributeWithEntityType): boolean {
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeVariable(modelelement: Variable): boolean {
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeEntityExpression(modelelement: EntityExpression): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAppliedFeature(modelelement: AppliedFeature): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAttributeRef(modelelement: AttributeRef): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeVariableRef(modelelement: VariableRef): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeLiteralExpression(modelelement: LiteralExpression): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeStringLiteralExpression(modelelement: StringLiteralExpression): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeNumberLiteralExpression(modelelement: NumberLiteralExpression): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeBooleanLiteralExpression(modelelement: BooleanLiteralExpression): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeBinaryExpression(modelelement: BinaryExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforePlusExpression(modelelement: PlusExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeDivideExpression(modelelement: DivideExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeAndExpression(modelelement: AndExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeOrExpression(modelelement: OrExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeComparisonExpression(modelelement: ComparisonExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeLessThenExpression(modelelement: LessThenExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeGreaterThenExpression(modelelement: GreaterThenExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeEqualsExpression(modelelement: EqualsExpression): boolean {
        // type of left has no 'name' property
        // type of right has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeFunctionCallExpression(modelelement: FunctionCallExpression): boolean {
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Collects all parts of 'modelelement' that have a name.
     * @param modelelement
     */
    public execBeforeIfExpression(modelelement: IfExpression): boolean {
        // type of condition has no 'name' property
        // type of whenTrue has no 'name' property
        // type of whenFalse has no 'name' property
        // type of appliedfeature has no 'name' property
        return true;
    }

    /**
     * Checks whether 'namedElement' is an instance of 'this.metatype', if so 'namedElement' is added to 'result'.
     *
     * @param namedElement
     */
    private addIfTypeOK(namedElement: PiNamedElement) {
        if (!!namedElement) {
            if (!!this.metatype) {
                const concept = namedElement.piLanguageConcept();
                if (concept === this.metatype || Language.getInstance().subConcepts(this.metatype).includes(concept)) {
                    this.namesList.push(namedElement);
                }
            } else {
                this.namesList.push(namedElement);
            }
        }
    }
}
