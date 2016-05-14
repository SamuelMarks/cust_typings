declare module chaiJsonSchema {
    function chaiJsonSchema(chai: any, utils: any): void;

    export function formatResult(error: string, data: string, schema: string, indent: string): string;

    export function extractSchemaLabel(schema: string, max: number): string;

    export function valueStrim(value: string, cutoff?: number): string;
}

declare namespace Chai {
    // For BDD API
    interface Assertion {
        jsonSchema(j: JSON|{}): Assertion;
    }

    // For Assert API
    interface Assert {
        jsonSchema(j: JSON|{}): Assert;
    }
}

export = chaiJsonSchema;