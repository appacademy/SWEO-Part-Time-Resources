// // Single Responsibility Principle
// const VOWELS = 'aeiou';

// const abbreviateWords = function (sentence) {
//     const words = sentence.split(' ');

//     for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
//         const word = words[wordIdx];
//         if (word.length > 3) {
//             let newWord = "";
//             let charIdx = 0;

//             while (charIdx < word.length && newWord.length < 3) {
//                 let char = word[charIdx];
//                 if (!VOWELS.includes(char)) {
//                     newWord += char;
//                 }
//                 charIdx++;
//             }

//             words[wordIdx] = newWord;
//         }
//     }

//     return words.join(' ');
// };

// console.log(abbreviateWords("Hello World!")); // Hll Wrl

// Lookit that mess. While this does satisfy the prompt, it's kind of confusing
// to follow. Let's refactor a bit:

const VOWELS = 'aeiou';

// function to create new abbreviated word from long words
const changeWord = function (word) {
    let newWord = "";
    let charIdx = 0;

    while (charIdx < word.length && newWord.length < 3) {
        let char = word[charIdx];
        if (!VOWELS.includes(char)) {
            newWord += char;
        }
        charIdx++;
    }
    return newWord;
}

// function to determine whether or not the original or abbreviated version
// should be included
const abbreviateWord = function (word) {
    if (word.length > 3) {
        return changeWord(word);
    }
    return word;
}

// main function to control logic of solve
const abbreviateWords = function (sentence) {
    const words = sentence.split(' ');

    for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
        const word = words[wordIdx];
        words.splice(wordIdx, 1, abbreviateWord(word));
    }

    return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl

// // Ahh, much easier to follow. Each function has 1 job and performs it well
