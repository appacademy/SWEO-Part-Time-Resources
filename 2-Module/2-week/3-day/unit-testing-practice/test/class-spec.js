const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      //!!START SILENT
      const newWord = new Word("computer");

      expect(newWord).to.have.property("word");
      //!!END
      //!!ADD
      // expect.fail("replace with your code");
      //!!END_ADD
    });
  
    it('should set the "word" property when a new word is created', function () {
      //!!START SILENT
      const newWord = new Word("banana");

      expect(newWord.word).to.equal("banana");
      //!!END
      //!!ADD
      // expect.fail("replace with your code");
      //!!END_ADD
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      //!!START SILENT
      const newWord = new Word("dog");

      const result = newWord.removeVowels();

      expect(result).to.equal("dg");
      //!!END
      //!!ADD
      // expect.fail("replace with your code");
      //!!END_ADD
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      //!!START SILENT
      const newWord = new Word("racecar");

      const result = newWord.removeConsonants();

      expect(result).to.equal("aea");
      //!!END
      //!!ADD
      // expect.fail("replace with your code");
      //!!END_ADD
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      //!!START SILENT
      const newWord1 = new Word("banana");
      const newWord2 = new Word("able");

      const result1 = newWord1.pigLatin();
      const result2 = newWord2.pigLatin();

      expect(result1).to.equal("ananabay");
      expect(result2).to.equal("ableyay");
      //!!END
      //!!ADD
      // expect.fail("replace with your code");
      //!!END_ADD
    });
  });
});
