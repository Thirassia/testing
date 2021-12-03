import reduce from "../src/reduce.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(reduce);

function multiply(accumulator, element) {
    return accumulator * element;
}

function concat(accumulator, element) {
    return `${accumulator}${element}`;
}

function textLengthSum(accumulator, element) {
    return accumulator + element.length;
}

function propertyXLengthSum(accumulator, element) {
    return accumulator + element.x.length;
}

function counter(accumulator) {
    return accumulator + 1;
}

const objects = {
    a: { x: "kasf" },
    b: { x: "ju" },
    c: { x: "kaomao" },
    d: { x: "o" },
};

describe("reduce", () => {
    testMaker.testCase("Empty array, a function and a number. Return the number", 4, [[], multiply, 4]);
    testMaker.testCase("Empty object, a function and a number. Return the number", -40, [{}, multiply, -40]);
    testMaker.testCase("Array of numbers, a function multiplying by each element, a number.", -139.2, [[4, 8.7, -2], multiply, 2]);
    testMaker.testCase("Array of strings, a function that concats strings, a string.", "10ha haxd lol", [["ha ", "ha", "xd", " lol"], concat, "10"]);
    testMaker.testCase("Array of strings, a function that accumulates string lengths, number.", 16, [["re", "mmm", "popcorn"], textLengthSum, 4]);
    testMaker.testCase("Array of numbers, a function that accumulates string lenths, number.", NaN, [[4, 3, 10, 6], textLengthSum, 8]);
    testMaker.testCase("Object of objects with x: string, a function that accumulates lengths of those strings, number", 23, [objects, propertyXLengthSum, 10]);
    testMaker.testCase("Array of functions, a function that counts the elements, number", 10, [[multiply, textLengthSum, propertyXLengthSum], counter, 7]);
});
