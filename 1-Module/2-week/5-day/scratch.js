//HELPER FUNCTIONS

//Non helper:
/*
let removeEWords = function(sentence) {
    let words = sentence.split(' ');

    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!word.toLowerCase().includes('e')) {
            filtered.push(word);
        }
    }

    return filtered.join(' ');
};
*/

/*
function helperFunction(string) {
    let misfits = []
    if (!string.toLowerCase().includes('e')) {
        return string;
    }
}

function removeEWords(sentence) {
    let wordsArr = sentence.split(' ');
    let filtered = [];
    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        filtered.push(helperFunction(word));
    }
    return filtered.join(' ');
}

let testString = "What time is it, it's party time.";

console.log(removeEWords(testString));
*/

/*
let twoDArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function traverseIt(arr) {
    let allNums = [];
    for (let i = 0; i < arr.length; i++) {
        let innerArr = arr[i];
        for (let j = 0; j < innerArr.length; j++) {
            let num = innerArr[j];
            allNums.push(num);
        }
    }
    return allNums;
}

console.log(traverseIt(twoDArray));

let arr = ["string", "hi"];

arr[0] = 4;

console.log(arr[0]);
*/

//Palindrome Function
//Palindrome is a string that is the same forwards or backwords aka 'tacocat';

//Take in a string and return true or false based on if its a palindrome

/*
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (reversedStr === str) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("ortland is being sassy"));
*/