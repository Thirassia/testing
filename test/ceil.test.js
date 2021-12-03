import ceil from "../src/ceil.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(ceil);

// Testing ceil function with different inputs
describe("ceil", () => {
    testMaker.testCase("Round up a positive number according to specified positive precision. "
        + "Number is of greater precision than specified precision", 6.34, [6.333, 2]);
    testMaker.testCase("Round up a negative number according to specified positive precision. "
        + "Number is of greater precision than specified precision", -9.4, [-9.433, 1]);
    testMaker.testCase("Add decimals to a positive number according to specified positive precision. "
        + "Float makes the result the same as the input", 5454.5, [5454.50, 2]);
    testMaker.testCase("Add decimals to a negative number according to specified positive precision. "
        + "Float makes the result the same as the input", -24.5, [-24.5000, 4]);
    testMaker.testCase("Round up a positive number according to specified negative precision. "
        + "Number is of greater precision than specified precision", 2200, [2125, -2]);
    testMaker.testCase("Round up a negative number according to specified negative precision. "
        + "Number is of greater precision than specified precision", -320, [-325, -1]);
    testMaker.testCase("Round up a positive number according to specified precision. "
        + "Number is of lesser precision than specified precision", 10000, [5.3, -4]);
    testMaker.testCase("Return 0 with a negative number of lesser precision "
        + "than specified negative precision.", 0, [-5.2, -4]);

    // Cannot compute with a decimal precision value
    testMaker.testCase("Return NaN when trying to round up a positive number "
        + "according to specified decimal precision", NaN, [333.33, 4.11]);
    testMaker.testCase("Round up a positive integer according to specified positive precision. "
        + "Float makes the result the same as the input", 325.0, [325, 1]);
    testMaker.testCase("Round a positive number according to default precision", 1000, [999.99]);
});
