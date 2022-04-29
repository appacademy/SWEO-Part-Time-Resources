// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

console.log("--------------understand the problem-------------")
//inputs(string):  "we like to go running fast"
//outputs(string): "we likelike to go runninging fastast"

//determine if letter is a vowel
let letterIsAVowel = function(letter){
    let vowels = "AEIOUaeiou";
    //if letter is a vowel, returns true, otherwise return false
    return vowels.includes(letter);
}

// console.log("letter:", letterIsAVowel("z"))

//transforming the word
//trash --> trashash
let transformHandler = function(word){
    //find the first encounte of the last vowel
    for(let i=word.length-1; i>=0; i--){
        let letter = word[i];
        //how to determine if letter is a vowel? USE letterIsAVowel HELPER!
        if(letterIsAVowel(letter)){
            //after we find the last vowel, we want to slice from the last vowel to the end
            let slicedWord = word.slice(i) //from i (last vowel) all the way to the end (ash)

            //add the original word with the sliced word (trash + ash)
            return word + slicedWord //trash + ash
        }
    }

    //if word doesn't contain vowel, just return it normally.
    return word;
}

console.log("transform:", transformHandler("cam"));

//1. define repeatingTranslate Function
let repeatingTranslate = function(sentence){
    //break up the sentence into words
    let wordsArr = sentence.split(" ");

    //create array to hold results of words
    let resultArr = [];

    //iterate through wordsArr and get the currentWord
    for(let i=0; i<wordsArr.length; i++){
        let currentWord = wordsArr[i];
        //if currentWord length is less than 3 ,
        if(currentWord.length < 3){
            //add to result unchanged
            resultArr.push(currentWord)
        }
        //any currentWord that has a length > 3
        else if(currentWord.length >= 3){
            //if it ends in a vowel, 
            let lastLetter = currentWord[currentWord.length - 1]
            if(letterIsAVowel(lastLetter)){
                //repeat the word twice
                let repeatedWord = currentWord + currentWord;
                //push repeated word to array
                resultArr.push(repeatedWord);
            }
            //else if non vowel, transform the word as described.
            else{
                //create transformHandler helper function to transform the word for us
                let transformedWord = transformHandler(currentWord);
                resultArr.push(transformedWord);
            }
        }
    }
    //sentence format, we need to join
    return resultArr.join(" ");

}





console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"