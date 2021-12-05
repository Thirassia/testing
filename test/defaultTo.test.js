import defaultTo from "../src/defaultTo.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(defaultTo);

function testFunction() {
    let i = 1;
    i += 1;
    return i;
}

const testObject = {
    hehe: 3,
};

const testArray = [3, "ldr"];

// Testing defaultTo function with different inputs
describe("defaultTo", () => {
    testMaker.testCase("Returns default value (number) instead of null", 8, [null, 8]);
    testMaker.testCase("Returns value-to-check (number) instead of default (number)", 9, [9, 699]);
    testMaker.testCase("Returns default value (text) instead of undefined", "text", [undefined, "text"]);
    // testMaker.testCase("Returns default value (function) instead of NaN", testFunction, [NaN, testFunction]);
    testMaker.testCase("Returns value-to-check (false) instead of default value (object)", false, [false, testObject]);
    testMaker.testCase("Returns value-to-check (function) instead of default value (array)", testFunction, [testFunction, testArray]);
    testMaker.testCase("Returns value-to-check (text) instead of default value (number)", "kk", ["kk", -5.3]);
    testMaker.testCase("Returns value-to-check (object) instead of default value (number)", testObject, [testObject, 0.4]);
    testMaker.testCase("Returns value-to-check (array) instead of default value (text)", testArray, [testArray, ".fsa"]);
});
