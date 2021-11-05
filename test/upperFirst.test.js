import chai from "chai";
import upperFirst from "../src/upperFirst.js";

const expect = chai.expect;

// Testing upperFirst function with different inputs
describe("upperFirst", () => {
    it("should convert lowercase text properly", () => {
        const result = "Text";
        expect(upperFirst("text")).to.eql(result);
    });
    it("should convert capitalized text properly", () => {
        const result = "Text";
        expect(upperFirst("Text")).to.eql(result);
    });
    it("should convert uppercase text properly", () => {
        const result = "TEXT";
        expect(upperFirst("TEXT")).to.eql(result);
    });
    it("should convert text with multiple words properly", () => {
        const result = "Result text";
        expect(upperFirst("result text")).to.eql(result);
    });
});
