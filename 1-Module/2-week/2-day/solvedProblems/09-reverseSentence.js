/****************************************************************************** 
Reverse Sentence
Write a function reverseSentence(sentence) that takes in a sentence as an arg. 
The function should return a new sentence where the order of the words is 
reversed. Note that you should reverse the order among words, not the order 
among characters.
******************************************************************************/
// your code here
// one line solve
// let reverseSentence = sentence => sentence.split(" ").reverse().join(" ")
function reverseSentence(sentence){
    let words = sentence.split(" ");
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--){ // loop from back to front!
        reversed.push(words[i])
    }
    return reversed.join(" ")
}




console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'