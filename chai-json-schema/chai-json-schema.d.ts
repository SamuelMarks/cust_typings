declare function chaiJsonSchema(chai: any, utils: any): void;

declare module chaiJsonSchema {
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