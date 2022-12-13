//TEMPLATE LITERALS - TEMPLATE STRINGS

//A different way to create a string. Commonly used when inserting a variable into a string.

//SYNTAX

/*
let templateLiteral = `The sky is blue`;

console.log(templateLiteral);
*/

//STRING CONCATENATION
//let stringConcatenate = "Beginning of string" + variable + "end of string";

//TEMPLATE LITERAL

/*
let color = "blue";

let template = `The sky is ${color}.`;
let concat = "The sky is " + color;
*/

//FRIDAYS HOMEWORK

//ECHO:

/*
function echo(str) {
    console.log(str.toUpperCase() + " ... " + str + " ... " + str.toLowerCase());
}
*/

/*
function echo(str) {
    let upper = str.toUpperCase();
    let lower = str.toLowerCase();
    console.log(`${upper} ... ${str} ... ${lower}`);
}

echo("hey!")
*/

//FIZZBUZZ

/*
function fizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
*/

//ALTERNATE- Again there are tons of solutions
/*
function fizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && (i % 3 !== 0 || i % 5 !== 0)) {
            console.log(i)
        }
    }
}
*/

//WHILE LOOP TRANSLATION
/*
function eCounter(word) {
    let count = 0;
    let index = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === 'e' || char === "E") {
            count++;
        }
        index++;
    }
    return count;
}

console.log(eCounter("apple"));
*/

//Take in a number and check if its even.

/*
function isEven(num) {
    if (num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isEven(5);
*/