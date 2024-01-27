//ARRAYS - Collections of items similar to a list
//In order denote an array in JS we use [] (Square brackets)
//Items within an array should be seperated by commas

//JS will let you mix Data Types in arrays

// let mixedArray = ['string', true, 546, [1, 2, 3], false];

// let fruitArray = ['apple', 'pear', 'lemon', 'cherry'];

// //console.log(mixedArray[2])

// console.log(mixedArray[mixedArray.length - 1])


//CONTROL FLOW - The order in which instructions in a program are executed.

//Two main structures for control flow in JS - Conditional Statements and Loops

//CONDITIONAL STATEMENTS

// Three conditional statements - IF     ELSE IF      ELSE

//IF - Simplest conditional statement, there are two parts to it: Test expression and the code to execute

/* 
if (TEST EXPRESSION (condition that has to true)) {
    //CODE TO EXECUTE IF THE CONDITION IS TRUE
}
*/

//TRUTHY & FALSEY

//THIS WILL WORK BC THE CONDITION IS TRUTHY
// if (3 === 3) {
//     console.log("Yup")
// }

// //THIS WILL NOT WORK AS THE CONDITION IS FALSEY
// if (3 === 2) {
//     console.log("Yup")
// }

//ELSE IF - Allows to chain additional if conditions onto an already existing if statement
//You can chain as many else if statements as you want

// let color = 'pink';

// if (color === 'yellow') {
//     console.log('Yellow')
// } else if (color === 'pink') {
//     console.log('WOOOOO')
// } else if (color === 'blue') {
//     console.log('okay')
// } else {
//     console.log(`I don't know what color that is... ${color}.`)
// }

//ELSE - The else statement will run if no other condition is met
//In a chain of conditionals you can only have ONE IF and ONE ELSE, but as many ELSE IF's as you want

//LOOPING
// Loops will run blocks of code repeatedly until they are told to stop. So they will loop
// WHILE a condition is true, or FOR a certain number of times

//GENERALLY - We use while loops when we don't know the exact number of iterations, and we use a for loop
// when we do know the exact number


//WHILE LOOPS

/* 
WHILE LOOP SYNTAX

while (CONDITION TO KEEP LOOPING) {
    //CODE TO RUN WHILE CONDITION IS TRUE
}
*/
// let index = 0;
// while (index < 10) {
//     console.log(index);
//     index++;
// }

// let lives = 12;

// while (lives > 0) {
//     lives--;
//     console.log(`You have ${lives} lives left.`);
// }

// console.log(`GAME OVER: You have ${lives} lives left.`)


//FOR LOOP - Will iterate for a certain number of iterations
/* 
FOR LOOP SYNTAX
    Three important parts:
    1. INITIAL EXPRESSION - Is run once at the very beginning and then never again
    2. CONDITION - Checked every time we loop (Before each iteration). If this condition is false
                    the loop will end.
    3. LOOP END EXPRESSION - Helps us make the middle condition false

    for (intial expression; condition; loop end expression) {
        //CODE TO EXECUTE
    }
*/
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


//ITERATE THROUGH AN ARRAY

// let fruitArray = ['apple', 'pear', 'lemon', 'cherry'];

// for (let i = 0; i < fruitArray.length; i++) {
//     console.log(fruitArray[i])
// }

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

console.log("END")