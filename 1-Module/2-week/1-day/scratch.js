//TEMPLATE LITERALS - TEMPLATE STRINGS
//A different way to create a string. (Most commonly used when using a var

//REGULAR STRING CONCATENATION: "kajshdkjashdkj" + variable + "askdhaskjdh";
//SYNTAX:
//`ajshdgashdahsdsah`

/*
let string = "blue";
let a = 5;
let b = 6;

console.log(`The sky is ${a + b}.`);
*/

//ECHO
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

echo("Hey!");
*/

/*
//FIZZBUZZ
function fizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            console.log(i)
        }
    }
}
*/

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

fizzBuzz(20);
*/

//WHILE LOOP TRANSLATION

/*
function eCounter(word) {
    let count = 0;
    let index = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "e" || char === "E") {
            count++;
        }
        index++;
    }
    return count;
};

console.log(eCounter("appleeeee"));
*/
/*
let sliced = word.slice(1);
return sliced + word[0] + "ay";
*/