import countBy from "../src/countBy.js";
import TestMaker from "./utility/utility.js";

const testMaker = new TestMaker(countBy);

function giveX(a) {
    return a.x;
}

function giveY(a) {
    return a.y;
}

// eslint-disable-next-line no-unused-vars
function giveLOL(a) {
    return "LOL";
}

// eslint-disable-next-line no-unused-vars
function giveNothing(a) {

}

const arr1 = [{ x: true }, { x: true }, { x: true }];
const arr2 = [{ x: "xd", p: "lol" }, { x: ":p" }, { x: "xd" }, { x: "xd" }];

// Testing countBy function with different inputs
describe("countBy", () => {
    // testMaker.testCase("Array of objects with x: true", { true: 3 }, [arr1, giveX]);
    // testMaker.testCase("Array of objects with no y property", { undefined: 3 }, [arr1, giveY]);
    // testMaker.testCase("Array of objects with x: 'xd' or x: ':p'", { xd: 3, ":p": 1 }, [arr2, giveX]);
    // testMaker.testCase("Array of empty objects.", { undefined: 4 }, [[{}, {}, {}, {}], giveX]);
    testMaker.testCase("Empty array.", { }, [[], giveX]);
    // testMaker.testCase("Function returns nothing.", { undefined: 3 }, [arr1, giveNothing]);
    // testMaker.testCase("Function always returns 'LOL'", { LOL: 4 }, [arr2, giveLOL]);
});
