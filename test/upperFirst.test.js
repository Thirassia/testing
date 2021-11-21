import chai from "chai";
import upperFirst from "../src/upperFirst.js";

const expect = chai.expect;

// Testing upperFirst function with different inputs
describe("upperFirst", () => {
    it("converts lowercase text properly", () => {
        const result = "Text";
        expect(upperFirst("text")).to.eql(result);
    });
    it("converts capitalized text properly", () => {
        const result = "Text";
        expect(upperFirst("Text")).to.eql(result);
    });
    it("converts uppercase text properly", () => {
        const result = "TEXT";
        expect(upperFirst("TEXT")).to.eql(result);
    });
    it("converts text with multiple words properly", () => {
        const result = "Result text";
        expect(upperFirst("result text")).to.eql(result);
    });
});
