/****************************************************************************** 
Abbreviate
Write a function abbreviate(word) that takes in a string arg. The function 
should return a new string where all of its vowels are removed.
******************************************************************************/
// your code here

function abbreviate(word){
    let newStr = ""
    let vowels = "aieouAEIOU"
    console.log("word is:", word)
    for (let char of word){
        console.log("current char:    ", char)
        if (!vowels.includes(char)) newStr += char
    }
    return newStr
}





console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'