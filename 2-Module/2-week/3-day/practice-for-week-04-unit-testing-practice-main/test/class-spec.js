const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let newInstance = new Word('word')
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(newInstance).to.have.keys("word")
      expect(newInstance.word).to.exist
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(newInstance.word).to.equal('word')
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let shouldBeCorrect = 'wrd'
      expect(newInstance.removeVowels()).to.equal(shouldBeCorrect)
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let shouldBeCorrect = 'o'
      expect(newInstance.removeConsonants()).to.equal(shouldBeCorrect)
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let shouldBeCorrect = 'ordway'
      expect(newInstance.pigLatin()).to.equal(shouldBeCorrect)
    });
  });
});