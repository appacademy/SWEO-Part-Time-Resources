//Ternary Operators
//Its used in place of an if...else statement

//SYNTAX

//condition ? (if true do this) : (else, do this);

/*
let fruit = "pear";

//fruit === "lemon" ? console.log("yeah, its a lemon") : console.log("idk man");

fruit === "lemon" ? console.log("lemon") : fruit === "apple" ? console.log("apple") : console.log("idk");
*/

//Suffix Cipher
/*
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.
*/

function suffixCipher(sentence, obj) {
    let words = sentence.split(" ");
    let result = words.map(function(word) {
        for (let key in obj) {
            if (word.endsWith(key)) {
                let cb = obj[key];
                return cb(word);
            }
        }
        return word;
    });
    return result.join(" ");
}


/*
let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer
let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
*/

//Alternating Map
/*
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.
*/

function alternatingMap(arr, cb1, cb2) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (i % 2 === 0) {
            result.push(cb1(el));
        } else {
            result.push(cb2(el));
        }
    }
    return result;
}