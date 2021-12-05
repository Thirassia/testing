import toNumber from "../src/toNumber.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(toNumber);

// eslint-disable-next-line no-unused-vars
function testFunction() {

}

// Testing toNumber function with different inputs
describe("toNumber", () => {
    testMaker.testCase("Return 0 as is.", 0, [0]);
    testMaker.testCase("Return positive integer as is", 699, [699]);
    testMaker.testCase("Return negative integer as is.", -5454, [-5454]);
    testMaker.testCase("Return positive decimal number as is", 84.45, [84.45]);
    testMaker.testCase("Return negative decimal number as is", -20.25, [-20.25]);
    testMaker.testCase("Return text as positive integer", 20, ["20"]);
    testMaker.testCase("Return text as negative integer", -2078, ["-2078"]);
    testMaker.testCase("Return text as positive decimal number", 78.4, ["78.4"]);
    testMaker.testCase("Return text as negative decimal number", -7.4, ["-7.4"]);
    testMaker.testCase("Return text representing binary number as number", 0b1111, ["0b1111"]);
    testMaker.testCase("Return text representing octal number as number", 0o17, ["0o17"]);
    testMaker.testCase("Return text representing hexadecimal number as number", 0xF, ["0xF"]);
    testMaker.testCase("Return text starting with whitespace as decimal number", 7.4, ["  7.4"]);
    testMaker.testCase("Return text representing a binary number fraction as NaN", NaN, ["0b11.111"]);
    testMaker.testCase("Return text not representing a number as NaN", NaN, ["text"]);
    testMaker.testCase("Return text representing a number with multiple dots as NaN", NaN, ["34.2.6"]);
    testMaker.testCase("Return object as NaN", NaN, [{ 23: 43 }]);
    testMaker.testCase("Return symbol as NaN", NaN, [Symbol(12)]);
    testMaker.testCase("Return null as 0", 0, [null]);
    testMaker.testCase("Return function as NaN", NaN, [testFunction]);
    testMaker.testCase("Return Infinity as Infinity", Infinity, [Infinity]);
    testMaker.testCase("Return text representing Infinity as Infinity", Infinity, ["Infinity"]);
});
