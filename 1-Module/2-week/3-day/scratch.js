// ----------------Helper Function---------------
//write yellWord function that takes a string, then uppercase it and add '!' at the end.
//input: string --> `hi`
//output: string with every letter uppercase + ! at the end --> `HI!`
function yellWord(word) {
    let upperString = word.toUpperCase();
    return upperString + '!';
}
console.log(yellWord("hi")) // --> "HI!"

// ----------------Using Helper in Main Function---------------
//takes an array of words, then yell each one (uppercase the word then + !)
function yellAllWords(words){
    let yelled = [];
    for(let i=0; i<words.length; i++){
        let currentWord = words[i];
        //call yellWord helper on currentWord, then push it to yelled.
        let yelledWord = yellWord(currentWord);
        yelled.push(yelledWord);
    }
    return yelled;
}

console.log(yellAllWords(["hi", "john", "quack"])) // --> [ 'HI!', 'JOHN!', 'QUACK!' ]