/******************************************************************************
Remove E Words
Write a function removeEWords(sentence) that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.
******************************************************************************/
// your code here
function removeEWords(sentence){
    let result = []
    let words = sentence.split(" ")
    for(let i = 0; i < words.length; i++){
        // let currWord = ""
        // for(let j = i; j < sentence.length; j++){
        //     let currChar = sentence[j]
        //     if (currChar !== " " || j === sentence.length-1) currWord += currChar;
        //     else {
        //         i = j;
        //         break;
        //     }
        // }
        // if (!currWord.toLowerCase().includes("e")) {
        //     result += currWord;
        //     if (i === sentence.length -1) break
        //     result += " ";
        // }
        let currWord = words[i]
        if (!currWord.toLowerCase().includes("e")) result.push(currWord)
    }
    return result.join(" ")
}




console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
