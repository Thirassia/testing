import { expect } from "chai";

// Concat test ID with description
function descriptionWithID(description, i) {
    return `${i}. ${description}`;
}

export default class TestMaker {
    // Test ID
    #ID;

    // Function to be tested
    #operation;

    constructor(operation) {
        this.#ID = 1;
        this.#operation = operation;
    }

    // Create a test case with a description and ID. Compare result of operation to expected result
    testCase(description, result, paramArray) {
        it(descriptionWithID(description, this.#ID), () => {
            expect(this.#operation(...paramArray)).to.eql(result);
        });
        this.#ID += 1;
    }
}
