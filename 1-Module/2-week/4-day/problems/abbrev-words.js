/*Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.*/

// --------------understand the problem---------------
// inputs: 'what a wonderful place to live'
// outputs: what a wndrfl plc to live
// any word that have more than 4 letters have their vowels removed


//---------------remove vowels helper----------------
//input: string / word;
//output: string that has all vowels removed

//1. define removeVowels function
let removeVowels = function(word){
    //2. initialize var noVowelWord as empty string, add non vowels here.
    let noVowelWord = ""
    //3. initialize var vowels string with all vowels ('aeiouAEIOU')
    let vowels = "aeiouAEIOU";
    //4. iterate word to get each letter
    for(let i=0; i<word.length; i++){
        //5. initialize var letter and assign it value at i.
        let letter = word[i];
        //6. if letter is NOT a vowel (!vowels.includes(letter))
        if(!vowels.includes(letter)){
            //7. then add letter to noVowelWord string. 
            noVowelWord += letter
        }
    }

    //8. return at the end noVowelWord
    return noVowelWord;

}

console.log("removeVowels:", removeVowels('wonderful'));


//---------------abbreviateWords----------------
//1. define abbreviateWords function
let abbreviateWords = function(sentence){
    //2. wordsArr = split sentence into words
    let wordsArr = sentence.split(" "); // [what, a, wonderful, place, to, live,]
    
    //3. initialize resultArr to be empty. This is what we return.
    let resultArr = [];

    //4. iterate through words array 
    for(let i=0; i<wordsArr.length; i++){
        //5. initialize currentWord to get value at i from wordsArr
        let currentWord = wordsArr[i]; //ex: 'what'
        //6. if currentWord has length > 4, 
        if(currentWord.length > 4){
            //7. create a variable wordNoVowels = apply removeVowels helper to current word
            let wordNoVowels = removeVowels(currentWord);

            //8. then add wordNoVowels to the resultArr.
            resultArr.push(wordNoVowels);
        }
        //9. else we just push the normal currentWord unchanged to resultArr
        else{
            resultArr.push(currentWord);
        }
    }
    //10. at the end, return resultArr joined with a space
    return resultArr.join(" ");
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg