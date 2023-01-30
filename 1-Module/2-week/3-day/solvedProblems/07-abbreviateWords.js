/****************************************************************************** 
Abbreviate Words
Write a function abbreviateWords(sentence) that takes in a sentence string. 
The function should return a new sentence where words that are longer than 4 
characters have their vowels removed. Hint: Consider creating a helper function 
to remove all vowels in a string.
******************************************************************************/
// your code here
function abbreviate(word){
    let newStr = ""
    let vowels = "aieouAEIOU"
    // console.log("word is:", word)
    for (let char of word){
        // console.log("current char:    ", char)
        if (!vowels.includes(char)) newStr += char
    }
    return newStr
}

function abbreviateWords(words){
    let wordsArr = words.split(" ")
    let result = [];
    console.table(wordsArr)
    for (let i = 0; i < wordsArr.length; i+=1){
        let currentWord = wordsArr[i];
        console.log("+++++", currentWord)
        if (currentWord.length > 4){
            console.log("THAT WORDS GOT MORE THAN 4 CHARACTERS!!")
            result.push(abbreviate(currentWord))
        } else {
            console.log("THAT WORD IS A OK! :)")
            result.push(currentWord)
        }
    }
    return result.join(" ")
}


console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg