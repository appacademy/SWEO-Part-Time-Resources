const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const jeff = new Word("Jeff"); //jeff = {word: "jeff"}
      expect(jeff).to.have.all.keys("word")
      expect(jeff).to.have.property("word")
      // expect(true).to.be.true //FALSE POSITIVE. even if we had the wrong code, this will still give us the passing test.

    });
  
    it('should set the "word" property when a new word is created', function () {
      expect.fail("replace with your code");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect.fail("replace with your code");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const jeff = new Word("jeff");
      const jeffNoVowels = jeff.removeVowels()
      expect(jeffNoVowels).to.equal("jff")
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect.fail("replace with your code");
    });
  });
});