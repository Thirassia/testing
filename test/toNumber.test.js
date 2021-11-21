import chai from "chai";
import toNumber from "../src/toNumber.js";

const expect = chai.expect;

// Testing toNumber function with different inputs
describe("toNumber", () => {
    it("returns 0 as is", () => {
        const result = 0;
        expect(toNumber(0)).to.eql(result);
    });
    it("returns positive integer as is", () => {
        const result = 699;
        expect(toNumber(699)).to.eql(result);
    });
    it("returns negative integer as is", () => {
        const result = -5454;
        expect(toNumber(-5454)).to.eql(result);
    });
    it("returns positive decimal number as is", () => {
        const result = 84.45;
        expect(toNumber(84.45)).to.eql(result);
    });
    it("returns negative decimal number as is", () => {
        const result = -20.25;
        expect(toNumber(-20.25)).to.eql(result);
    });
    it("returns text as positive integer", () => {
        const result = 20;
        expect(toNumber("20")).to.eql(result);
    });
    it("returns text as negative integer", () => {
        const result = -2078;
        expect(toNumber("-2078")).to.eql(result);
    });
    it("returns text as positive decimal number", () => {
        const result = 78.4;
        expect(toNumber("78.4")).to.eql(result);
    });
    it("returns text as negative decimal number", () => {
        const result = -7.4;
        expect(toNumber("-7.4")).to.eql(result);
    });
    it("returns text resembling binary number as number", () => {
        const result = 1111100111;
        expect(toNumber("1111100111")).to.eql(result);
    });
    it("returns text resembling octal number as number", () => {
        const result = 123;
        expect(toNumber("123")).to.eql(result);
    });
    it("returns text resembling hexadecimal number as number", () => {
        const result = 5E-64;
        expect(toNumber("5E-64")).to.eql(result);
    });
    it("returns text with whitespaces as decimal number", () => {
        const result = 7.4;
        expect(toNumber("  7.4")).to.eql(result);
    });
    it("returns text resembling binary decimal number as number", () => {
        const result = 0.1011;
        expect(toNumber("0.1011")).to.eql(result);
    });
    it("returns text as NaN", () => {
        const result = NaN;
        expect(toNumber("text")).to.eql(result);
    });
    it("returns number with multiple dots as NaN", () => {
        const result = NaN;
        expect(toNumber("34.2.6")).to.eql(result);
    });
    // new test to increase coverage
    it("returns object as NaN", () => {
        const result = NaN;
        expect(toNumber({})).to.eql(result);
    });
});
