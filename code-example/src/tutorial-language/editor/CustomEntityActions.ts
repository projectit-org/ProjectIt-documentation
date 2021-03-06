// Generated by the ProjectIt Language Generator.
import {
    KeyboardShortcutBehavior,
    PiBinaryExpressionCreator,
    PiCustomBehavior,
    PiExpressionCreator,
    PiActions,
    Box, PiTriggerType, PiEditor, PiElement
} from "@projectit/core";
import { AttributeWithLimitedType } from "../language/gen/AttributeWithLimitedType";
import { Entity } from "../language/gen/Entity";

/**
 * Class CustomEntityActions provides an entry point for the language engineer to
 * define custom build additions to the editor.
 * These custom build additions are merged with the default and definition-based editor parts
 * in a three-way manner. For each modelelement,
 * (1) if a custom build creator/behavior is present, this is used,
 * (2) if a creator/behavior based on the editor definition is present, this is used,
 * (3) if neither (1) nor (2) yields a result, the default is used.
 */

export class CustomEntityActions implements PiActions {
    binaryExpressionCreators: PiBinaryExpressionCreator[] = MANUAL_BINARY_EXPRESSION_CREATORS;
    customBehaviors: PiCustomBehavior[] = MANUAL_CUSTOM_BEHAVIORS;
    expressionCreators: PiExpressionCreator[] = MANUAL_EXPRESSION_CREATORS;
    keyboardActions: KeyboardShortcutBehavior[] = MANUAL_KEYBOARD;
}

export const MANUAL_EXPRESSION_CREATORS: PiExpressionCreator[] = [
    // Add your own custom expression creators here
];

export const MANUAL_BINARY_EXPRESSION_CREATORS: PiBinaryExpressionCreator[] = [
    // Add your own custom binary expression creators here
];

export const MANUAL_CUSTOM_BEHAVIORS: PiCustomBehavior[] = [
    // Add your own custom behavior here
    {
        activeInBoxRoles: ["end-of-attribute-list"],                                            // <1>
        trigger: "attribute",                                                                   // <2>
        action: (box: Box, trigger: PiTriggerType, editor: PiEditor): PiElement | null => {     // <3>
            var entity: Entity = box.element as Entity;
            const attribute: AttributeWithLimitedType = new AttributeWithLimitedType();
            entity.attributes.push(attribute);
            return attribute;
        },
        boxRoleToSelect: "Attribute-name"                                                       // <4>
    },
];

export const MANUAL_KEYBOARD: KeyboardShortcutBehavior[] = [
    // Add your own custom keyboard shortcuts here
];
