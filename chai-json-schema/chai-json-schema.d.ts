import {LanguageChains, NumericComparison, TypeComparison} from '~chai/lib/Assertion';
declare function chaiJsonSchema(chai: any, utils: any): void;

declare namespace Chai {
    export function formatResult(error: string, data: string, schema: string, indent: string): string;

    export function extractSchemaLabel(schema: string, max: number): string;

    export function valueStrim(value: string, cutoff?: number): string;

    export interface Assertion {
        jsonSchema(j: JSON): Assertion;
        jsonSchema(o: {}): Assertion;
    }

    // For BDD API
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        eventually: Assertion;
        become(expected: any): Assertion;
        fulfilled: Assertion;
        rejected: Assertion;
        rejectedWith(expected: any, message?: string | RegExp): Assertion;
        notify(fn: Function): Assertion;
        jsonSchema(j: JSON): Assertion;
        jsonSchema(o: {}): Assertion;
    }

    // For Assert API
    interface Assert {
        jsonSchema: Assert;
        jsonSchema(j: JSON): Assert;
        jsonSchema(o: {}): Assert;
    }
}

namespace chaiJsonSchema {
}

export = chaiJsonSchema;
