//declare function chaiJsonSchema(chai: any, utils: any): void;
declare var chaiJsonSchema: chaiJsonSchema.chaiJsonSchema;

declare module chaiJsonSchema {
    export interface chaiJsonSchema {
        (chai: any, utils: any): void
    }
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

declare module "chai-json-schema" {
    export = chaiJsonSchema;
}
