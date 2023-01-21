/****************************************************************************** 
Longest Word
Write a function longestWord(sentence) that takes in a sentence string as an 
argument. The function should return the longest word in the sentence. If there 
is more than one "longest word", return the first of these instances.
******************************************************************************/
// your code here
function longestWord(sentence){
    let wordsArr = sentence.split(" ")
    console.log(wordsArr)
    let longest = ""
    for(let i = 0; i < wordsArr.length; i++){
        let currentWord = wordsArr[i]
        if (currentWord.length > longest.length) longest = currentWord
    }
    return longest
}



console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''