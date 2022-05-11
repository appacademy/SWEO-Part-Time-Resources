const assert = require("assert");
const sentenceMapper = require("../problems/15-sentence-mapper.js");

describe("sentenceMapper", function() {
  it("", function() {
    let result1 = sentenceMapper("what is the answer?", function(word) {
      return word.toUpperCase() + "!";
    });
    assert.equal(result1, "WHAT! IS! THE! ANSWER?!");

    let removeVowels = function(word) {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
          newWord += char;
        }
      }
      return newWord;
    };

    let result2 = sentenceMapper("this is pretty cool right", removeVowels);
    assert.equal(result2, "ths s prtty cl rght");
  });
});
