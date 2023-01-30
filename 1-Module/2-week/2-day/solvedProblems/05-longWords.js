/******************************************************************************
Long Words
Write a function longWords(words) that takes in an array of words. The function
should return an array containing only the words that are longer than 5
characters.
******************************************************************************/
// your code here
function longWords(words){
    let result = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        if (word.length > 5) result.push(word)
    }
    return result;
}





console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
