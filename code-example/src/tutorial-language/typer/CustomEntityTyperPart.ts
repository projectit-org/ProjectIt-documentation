// Generated by the ProjectIt Language Generator.
import { PiTyperPart } from "@projectit/core";
import { EntityEveryConcept, Variable } from "../language/gen";
import { EntityEnvironment } from "../environment/gen/EntityEnvironment";

/**
 * Class 'CustomEntityTyperPart' is meant to be a convient place to add any
 * custom code for type checking.
 */
export class CustomEntityTyperPart implements PiTyperPart {
    /**
     * See interface
     */
    public inferType(modelelement: EntityEveryConcept): EntityEveryConcept | null {
        return null;
    }
    /**
     * See interface
     */
    public equalsType(elem1: EntityEveryConcept, elem2: EntityEveryConcept): boolean | null {
        return null;
    }
    /**
     * See interface
     */
    public conformsTo(elem1: EntityEveryConcept, elem2: EntityEveryConcept): boolean | null {
        return null;
    }
    /**
     * See interface
     */
    public conformList(typelist1: EntityEveryConcept[], typelist2: EntityEveryConcept[]): boolean | null {
        if (typelist1.length > 0 && (typelist1[0] instanceof Variable)) {
            if (typelist1.length !== typelist2.length) return false;
            let result: boolean = true;
            const max_length = typelist1.length;
            for (let i = 0; i < typelist1.length; i++) {
                result = EntityEnvironment.getInstance().typer.conformsTo(typelist1[i], typelist2[max_length - i]);
                if (result == false) return result;
            }
            return result;
        } else {
            return null;
        }
    }
    /**
     * See interface
     */
    public isType(elem: EntityEveryConcept): boolean | null {
        return null;
    }
}
