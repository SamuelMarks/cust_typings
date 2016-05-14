declare function chaiJsonSchema(chai: any, utils: any): void;

declare namespace chaiJsonSchema {
    export function formatResult(error: string, data: string, schema: string, indent: string): string;

    export function extractSchemaLabel(schema: string, max: number): string;

    export function valueStrim(value: string, cutoff?: number): string;

    export interface Assertion {
        jsonSchema(j: JSON): Assertion;
        jsonSchema(o: {}): Assertion;
    }
}

export = chaiJsonSchema;
