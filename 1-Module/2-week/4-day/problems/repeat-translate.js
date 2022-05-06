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

//isLetterVowel --> returns true or false // true if it's a vowel.
let isLetterVowel = function(letter){
    let vowels = "AEIOUaeiou";
    return vowels.includes(letter);
}
console.log("isLetterVowel:", isLetterVowel("A"))

//function to handle the transform
//input: 'trash'
//output: 'trashash'
let transformHandler = function(word){
    //we need to determine when we hit that last vowel;
    for(let i=word.length-1; i>=0; i--){
        let letter = word[i];
        // console.log("backwards:", letter);
        if(isLetterVowel(letter)){
            let copyFromLastVowel = word.slice(i) //--> "trash" --> "ash" 
            return word + copyFromLastVowel // word + copyFromLastVowel = "trash" + "ash"
        }
    }
    return word;
}
console.log("transform:", transformHandler("trash"))



//1. define repeatingTranslate Function
let repeatingTranslate = function(sentence){
    //2. wordsArr = split sentence up into words
    let wordsArr = sentence.split(" ");
    //3. resultArr = result of applying the conditions to each word and add to result. initially empty.
    let resultArr = [];

    //4. iterate over wordsArr to get each word
    for(let i=0; i<wordsArr.length; i++){
        //5. let currentWord = define each word at i
        let currentWord = wordsArr[i];
        //6. if currentWord is < 4 letters, add to resultArr unchanged
        if(currentWord.length < 4){
            resultArr.push(currentWord);
        }
        //7. else if currentWord is > 3 letters --> add more conditions
        else if(currentWord.length > 3){
            
            //8. if currentWord ends in a vowel (the last letter)
            //current word = "HEY"
            let lastLetter = currentWord[currentWord.length-1] //hey length is 3, 3-1 = 2, index at 2 is 'y'
            if(isLetterVowel(lastLetter)){
                //9. repeat twice then push to result array.
                resultArr.push(currentWord + currentWord);
            }
            //10. if currentWord doesn't end in a vowel
            else{
                //11. transform current word up until the last vowel and add it to original.
                //12. push transformed word to resultArr.
                let transformedWord = transformHandler(currentWord);
                resultArr.push(transformedWord);
                
            }

        }
    }
    //13. return resultArr after adding everything there. combine back into sentence
    return resultArr.join(" ");
}





console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"