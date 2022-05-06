/*
Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.
*/

console.log("--------------removeVowels Helper-------------")
//input: "wonderful";
//output: "wndrfl";

let removeVowels = function(word){
    let vowels = "AEIOUaeiou";
    //result = container to hold the words that aren't vowels
    let result = ""
    //iterate through the word
    for(let i=0; i<word.length; i++){
        let letter = word[i];
        //is letter is NOT A VOWEL
        if(!vowels.includes(letter)){
            //then we add it to result
            result+=letter;
        }
    }
    return result;
}

console.log("remove-vowels:",removeVowels("wonderful"));

console.log("--------------understand the problem-------------")
//inputs(string):  'what a wonderful place to live'
//outputs(string): 'what a wndrfl plc to live'
//remove the vowels of all the words that have more than 4 characters

console.log("--------------abbreviate words func-------------")
//1. define the function abbreviateWords
let abbreviateWords = function(sentence){
    
    //2. wordsArr = create an array to hold the split sentence
    let wordsArr = sentence.split(" ");
    // console.log(wordsArr);
    //3. let resultArr = the results of the words after check if it has more than 4 chars
    let resultArr = [];
    //4. iterate through wordsArr and get the currentWord
    for(let i=0; i<wordsArr.length; i++){
        //5. define the currentWord represents value at the current index
        let currentWord = wordsArr[i];
        
        //6. if currentWord's length is > 4.
        if(currentWord.length > 4){
            //7. then we remove the vowels from that word and push it to resultArr
            //7.5 create helper function to remove vowels from word.
            let noVowelsWord = removeVowels(currentWord) 
            resultArr.push(noVowelsWord);

        }
        //8. else push the currentWord normally into resultArr
        else{
            resultArr.push(currentWord);
        }
    }
    //9. return resultArr after we join it with " " because we are done.
    return resultArr.join(" ");
}



console.log("abbreviateWords:", abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg