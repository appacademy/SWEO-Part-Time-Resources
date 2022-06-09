const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      //when we instantiate and make an instance of the Word class, that instance should have a 'word' property in it.
      
      //create our instance data, then test our instance data to make sure that it has the correct data (it has 'word' property)
      const newWord = new Word("Hello");
      expect(newWord).to.have.property("word");
      expect(newWord).not.property("ifi", "daskjg"); //newWord should not have the property of "ifi" and the value of "daskjg"
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect.fail("replace with your code");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word("Hello") 
      //if we remove all the vowels, the expected otuput will be "Hll"
      const newWordNoVowels = newWord.removeVowels(); //instance method to remove the vowels from the word property, and return it
      expect(newWordNoVowels).to.be.equal("Hll");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect.fail("replace with your code");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect.fail("replace with your code");
    });
  });
});