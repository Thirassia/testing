import add from "../src/add.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(add);

// Testing add function with different inputs
describe("add", () => {
    testMaker.testCase("adds two positive decimal numbers together", 16.8, [9.9, 6.9]);
    testMaker.testCase("adds a positive decimal number and 0 together", 699.999, [0, 699.999]);
    testMaker.testCase("adds a positive decimal number and a negative decimal number together", 5354.51, [-99.99, 5454.5]);
    testMaker.testCase("adds two negative decimal numbers together", -84.4, [-59.9, -24.5]);
    testMaker.testCase("adds a negative decimal number and 0 together", -20.25, [0, -20.25]);
    testMaker.testCase("adds 0 and 0 together", 0, [0, 0]);
});
