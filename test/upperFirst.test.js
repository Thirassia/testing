import upperFirst from "../src/upperFirst.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(upperFirst);

// Testing upperFirst function with different inputs
describe("upperFirst", () => {
    testMaker.testCase("Convert lowercase word", "Text", ["text"]);
    testMaker.testCase("Capitalized word unaltered", "Maybe", ["Maybe"]);
    testMaker.testCase("Uppercase word unaltered", "YELLING", ["YELLING"]);
    testMaker.testCase("Convert lowercase sentence", "These be words", ["these be words"]);
    testMaker.testCase("Convert variable case word starting with lowercase", "AbCDf", ["abCDf"]);
    testMaker.testCase("Convert variable case sentence with variable case words", "THese Too Are worDS", ["tHese Too Are worDS"]);
    testMaker.testCase("Word starting with number returned as is", "4our", ["4our"]);
});
