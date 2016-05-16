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

//declare function chaiJsonSchema(chai: any, utils: any): void;
declare var chaiJsonSchema: chaiJsonSchema.chaiJsonSchema;

declare module chaiJsonSchema {
    export interface chaiJsonSchema {
        new (): chaiJsonSchema;
        (chai: any, utils: any): void
    }
}

declare module "chai-json-schema" {
    export = chaiJsonSchema;
}
