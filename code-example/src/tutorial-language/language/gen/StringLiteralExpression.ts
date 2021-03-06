// Generated by the ProjectIt Language Generator.
import { observable, makeObservable } from "mobx";
import { model, PiExpression, PiUtils } from "@projectit/core";
import { LiteralExpression, EntityMetaType } from "./internal";

/**
 * Class StringLiteralExpression is the implementation of the concept with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to changes in the state of its properties.
 */
@model
export class StringLiteralExpression extends LiteralExpression implements PiExpression {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data
     */
    static create(data: Partial<StringLiteralExpression>): StringLiteralExpression {
        const result = new StringLiteralExpression();
        if (!!data.value) {
            result.value = data.value;
        }
        if (!!data.appliedfeature) {
            result.appliedfeature = data.appliedfeature;
        }
        return result;
    }

    readonly $typename: EntityMetaType = "StringLiteralExpression"; // holds the metatype in the form of a string

    value: string = ""; // implementation of value

    constructor(id?: string) {
        super(id);
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    piLanguageConcept(): EntityMetaType {
        return this.$typename;
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
        return false;
    }

    /**
     * Returns true if this instance is an expression concept.
     */
    piIsExpression(): boolean {
        return true;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    piIsBinaryExpression(): boolean {
        return false;
    }
}
