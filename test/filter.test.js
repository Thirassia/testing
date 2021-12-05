import filter from "../src/filter.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(filter);

const truthyX = [
    { x: true },
    { x: 3 },
    { x: "xd" }];

const testArray = [
    { x: 2, o: false },
    { x: false },
    { b: null },
    { x: ["string", { obj: "ect" }] },
    { x: null },
    { y: "b" },
];

const resultArray = [
    { x: 2, o: false },
    { x: ["string", { obj: "ect" }] },
];

function giveX(object) {
    return object.x;
}

// eslint-disable-next-line no-unused-vars
function giveY(object) {
    return object.y;
}

// eslint-disable-next-line no-unused-vars
function giveTrue(object) {
    return true;
}

describe("filter", () => {
    testMaker.testCase("Array of objects with property x, function returns value of x. Return the array.", truthyX, [truthyX, giveX]);
    // testMaker.testCase("[{y: false}], function returns value of y. Return empty array.",
    // [], [[{ y: false }], giveY]);
    // testMaker.testCase("[{y: null}], function returns value of y. Return empty array.",
    // [], [[{ y: null }], giveY]);
    // testMaker.testCase("[{y: 0}], function returns value of y. Return empty array.",
    // [], [[{ y: 0 }], giveY]);
    // testMaker.testCase("[{y: undefined}], function returns value of y. Return empty array.",
    // [], [[{ y: undefined }], giveY]);
    // testMaker.testCase("[{y: \"\"}], function returns value of y. Return empty array.",
    // [], [[{ y: "" }], giveY]);
    // testMaker.testCase("[{y: NaN}], function returns value of y. Return empty array.",
    // [], [[{ y: NaN }], giveY]);
    // testMaker.testCase("[], function returns value of y. Return empty array.", [], [[], giveY]);
    testMaker.testCase("Array of objects, function always returns true. Return the array.", testArray, [testArray, giveTrue]);
    // testMaker.testCase("Array of objects with no property y, "
    //     + "function returns value of y. Return empty array", [], [truthyX, giveY]);
    testMaker.testCase("Array of objects some of which have property x, function returns value of x. Return array filtered.", resultArray, [testArray, giveX]);
    // testMaker.testCase("Null instead of array, function returns value of y. "
    //     + "Return empty array.", [], [null, giveY]);
});
