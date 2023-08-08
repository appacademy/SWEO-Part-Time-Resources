/****************************************************************************** 
Remove E Words
Write a function removeEWords(sentence) that accepts a sentence string as an 
arg. The function should return a new string, containing only the words that 
don't have the letter "e" in them.
******************************************************************************/
// your code here
function removeEWords(sentence){
    let wordsArr = sentence.split(" ");
    let result = []
    for (let i  = 0; i < wordsArr.length; i++){
        let currentWord = wordsArr[i].toLowerCase()
        if (!(currentWord.includes("e"))) result.push(currentWord)
    }
    return result.join(" ")
}






console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'