/******************************************************************************
Abbreviate Words
Write a function abbreviateWords(sentence) that takes in a sentence string.
The function should return a new sentence where words that are longer than 4
characters have their vowels removed. Hint: Consider creating a helper function
to remove all vowels in a string.
******************************************************************************/
// your code here
let isVowel = char => "aeiou".includes(char.toLowerCase())

function abbreviate(word){
    let result = "";
    for (let char of word) if (!isVowel(char)) result += char;
    return result;
}

let abbreviateWords = function(sentence){
    let words = sentence.split(" ")
    // console.table(words)
    for (let i = 0; i < words.length; i++){
        if (words[i].length > 4) words[i] = abbreviate(words[i])
        // console.log(words)
    }
    return words.join(" ")
}


console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
