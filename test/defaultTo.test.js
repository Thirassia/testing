import chai from "chai";
import defaultTo from "../src/defaultTo.js";
import add from "../src/add.js";

const expect = chai.expect;

// Testing defaultTo function with different inputs
describe("defaultTo", () => {
    it("does not return null, returns 2nd parameter (number)", () => {
        const result = 8;
        expect(defaultTo(null,8)).to.eql(result);
    });
    it("returns 1st parameter (number)", () => {
        const result = 9;
        expect(defaultTo(9,699)).to.eql(result);
    });
    it("does not return undefined, returns 2nd parameter (text)", () => {
        const result = "text";
        expect(defaultTo(undefined,"text")).to.eql(result);
    });
    // defaultTo function returns NaN, but it should not
    it("does not return NaN, returns 2nd parameter (function)", () => {
        const result = add(1,1);
        expect(defaultTo(NaN,add(1,1))).to.eql(result);
    });
    it("returns 1st parameter (false)", () => {
        const result = false;
        expect(defaultTo(false,{})).to.eql(result);
    });
    it("returns 1st parameter (function)", () => {
        const result = add(1,1);
        expect(defaultTo(add(1,1),[])).to.eql(result);
    });
    it("returns 1st parameter (text)", () => {
        const result = "text";
        expect(defaultTo("text",5)).to.eql(result);
    });
    it("returns 1st parameter (object)", () => {
        const result = {};
        expect(defaultTo({},10)).to.eql(result);
    });
    it("returns 1st parameter (array)", () => {
        const result = [];
        expect(defaultTo([],"text")).to.eql(result);
    });
});
