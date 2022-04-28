/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Helper-Functions
*/

// ----------------Helper Function---------------
//takes a string, then uppercase it and add '!' at the end.
function yellWord(word) {
    let upperString = word.toUpperCase();
    return upperString + '!';
}
console.log(yellWord("hi")) // --> 'HI!'

// ----------------Using Helper in Main Function---------------
//takes an array of words, then yell each one (uppercase the word then + !)
function yellAllWords(words) {
    let yelled = [];

    for (let i = 0; i < words.length; i++) {
        //get the current word i.e. 'hi'
        let currentWord = words[i];

        //apply the helper to change 'hi' to 'HI!'
        let yelledWord = yellWord(currentWord);

        //pushed yelled word to final array.
        yelled.push(yelledWord);
    }
    return yelled;
}

console.log(yellAllWords(["hi", "john", "quack"])) // --> [ 'HI!', 'JOHN!', 'QUACK!' ]