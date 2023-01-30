/******************************************************************************
Hipsterfy
Write a function hipsterfy(sentence) that takes in a sentence string and
returns the sentence where every word is missing its last vowel.
******************************************************************************/
// your code here
function hipsterfy(sentence){
    let words = sentence.split(" ");
    console.table(words)
    let result = [];
    for (let i = 0; i < words.length; i++){
        let currentWord = words[i];
        let last;
        for (let j = currentWord.length - 1; j >= 0; j--){
            if ("aeiou".includes(currentWord[j].toLowerCase())){
                last = j;
                break
            }
        }
        let str = ""
        for (let k = 0; k < currentWord.length; k++){
            if (k !== last) str+= currentWord[k]
        }
        result.push(str)
    }
    return result.join(" ");
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
