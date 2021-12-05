import compact from "../src/compact.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(compact);

// Testing compact function with different inputs
describe("compact", () => {
    // testMaker.testCase("Return a list with null-value removed", [1], [[1, null]]);
    // testMaker.testCase("Return a list with 0-value removed", [1, 2, 3], [[0, 1, 2, 3]]);
    // testMaker.testCase("Return a list with false-value removed", [8, 10], [[8, 10, false]]);
    // testMaker.testCase("Return a list with \"\"-value removed", ["test", 2], [["test", "", 2]]);
    // testMaker.testCase("Return a list with undefined-value removed", [{ ":)": 2 }], [[undefined, { ":)": 2 }]]);
    // testMaker.testCase("Return a list with NaN-value removed", [4, 3, 9], [[4, 3, 9, NaN]]);
    // testMaker.testCase("Return a list with multiple falsey values removed", [4, 12], [[false, undefined, 4, "", 12]]);
    // testMaker.testCase("Return an unaltered list with no falsey values", [3, "ss", 1], [[3, "ss", 1]]);
    testMaker.testCase("Return an empty list with all values removed because they were falsey", [], [["", false]]);
    testMaker.testCase("Return an unaltered empty list", [], [[]]);
});
