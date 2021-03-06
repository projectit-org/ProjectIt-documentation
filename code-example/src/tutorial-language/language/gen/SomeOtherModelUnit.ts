// Generated by the ProjectIt Language Generator.
import { observable, makeObservable } from "mobx";
import { model, MobxModelElementImpl, observablepart, PiModelUnit, PiUtils } from "@projectit/core";
import { Entity, EntityMetaType } from "./internal";

/**
 * Class SomeOtherModelUnit is the implementation of the model unit with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to changes in the state of its properties.
 */
@model
export class SomeOtherModelUnit extends MobxModelElementImpl implements PiModelUnit {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data
     */
    static create(data: Partial<SomeOtherModelUnit>): SomeOtherModelUnit {
        const result = new SomeOtherModelUnit();
        if (!!data.name) {
            result.name = data.name;
        }
        if (!!data.somePart) {
            result.somePart = data.somePart;
        }
        return result;
    }

    fileExtension: string;
    readonly $typename: EntityMetaType = "SomeOtherModelUnit"; // holds the metatype in the form of a string
    $id: string; // a unique identifier
    name: string = ""; // implementation of name
    somePart: Entity; // implementation of part 'somePart'

    constructor(id?: string) {
        super();
        if (!!id) {
            this.$id = id;
        } else {
            this.$id = PiUtils.ID(); // uuid.v4();
        }
        // both 'observablepart' and 'observablelistpart' change the get and set of an attribute
        // such that the parent-part relationship is consistently maintained,
        // and make sure the part is observable
        observablepart(this, "somePart");
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    piLanguageConcept(): EntityMetaType {
        return this.$typename;
    }

    /**
     * Returns the unique identifier of this instance.
     */
    piId(): string {
        return this.$id;
    }

    /**
     * Returns true if this instance is a model concept.
     */
    piIsModel(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is a model unit.
     */
    piIsUnit(): boolean {
        return true;
    }

    /**
     * Returns true if this instance is an expression concept.
     */
    piIsExpression(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    piIsBinaryExpression(): boolean {
        return false;
    }
}
