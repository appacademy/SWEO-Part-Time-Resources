//ARRAYS
//A collection of items

//Normally we keep them in variables, but they don't have to be (Just like
//any other data type)
//In JS in order to create an array you have to use square brackets []

//We can mix data types in arrays

let fruitArray = ['orange', 'apple', 'pear', 'lemon'];

let mixedArray = ['string', true, 425, [1, 2, 3], false];

//console.log(mixedArray[3]);

//Arrays use indexes starting from 0.

//In order to find the length of an array, we will use the .length method

//console.log(mixedArray[mixedArray.length - 1])



//Control flow - Controlling the flow of the program. By deciding the order in which
// instructions are executed

//CONDITIONALS - One of two types of control flows

// IF, IF ... ELSE, ELSE STATEMENTS

//IF - Is the simplest conditional statement, if a condition is true: do this.

//Have two parts, the test expression/condition and the code to execute if that is true

//IF SYNTAX:
// if (condition is true) {
//     //Code to execute
// }



// if (3 == 3) {
//     console.log('Yup')
// }

// let color = 'pink';

// if (color === 'blue') {
//     console.log('YEAHYUHH')
// }

//TRUTHY and FALSEY values
// Are something that is not a boolean (AKA it isn't literally true or false) however,
// the condition is inherently true


//ELSE ... IF
//We can chain as many else if statements onto a conditional as we want

//ELSE statement will run if none of the above statements are true

// let color = 'silver';

// if (color === 'blue') {
//     console.log('okay whatever')
// } else if (color === 'pink') {
//     console.log("WOOOOOO")
// } else if (color === 'orange') {
//     console.log('Boooo')
// } else {
//     console.log('I dont know what color that is... ' + color)
// }

//There can only be one IF and one ELSE in a chain, but there can be as many ELSE IF statements as you want



//LOOPS - Our second example of a control flow structure
//Will run code repeatedly either WHILE a condition is true or FOR a certain number of times


//WHILE loops - Will run a block of code repeatedly while a condition is true

//WHILE LOOP SYNTAX

/*
while (condition is true) {
    //Code to execute
}
*/

// let index = 0;

// while (index < 5) {
//     console.log(index);
//     index++ // Index++     the equivalent to index += 1
// }


// let lives = 5;

// while (lives > 0) {
//     console.log('You get another life');
//     console.log(`You currently have ${lives} LIVES left`)
//     lives--
// }

// console.log(`Game over you have ${lives} lives left.`)

//INFINITE LOOPING - Will happen if we don't let the condition become false
//We want to structure our while loops so that they WILL BECOME FALSE at some point

//FOR LOOPS - Are generally used when we know exactly how many iterations will occur
/*
    - 3 Important parts to a for loop

    1. INITIAL EXPRESSION - Run one time at the beginning AND NEVER AGAIN
    2. CONDITION - Checked EVERY TIME we loop and the loop will stop once it is false
    3. LOOP END EXPRESSION - Helps us break the loop normally by updating something

    ALL THREE of these items fo in the for loops parenthesis seperated by semi colons

    for (initial expression; condition; loop end expression) {
        //Code to execute
    }

*/
// let index = 0;
// while (index < 5) {
//     console.log(index);
//     index++ // Index++     the equivalent to index += 1
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// for (let i = 5; i > 0; i--) {
//     console.log(i)
// }


// let fruitArray2 = ['apple', 'pear', 'lemon', 'cherry'];

// for (let i = 0; i < fruitArray2.length; i++) {
//     console.log(fruitArray2[i])
// }

// for (let i = fruitArray2.length - 1; i >= 0; i--) {
//     console.log("BACKWARDS", fruitArray2[i])
// }


// let lives = 5;

// while (lives > 0) {
//     console.log('You get another life');
//     console.log(`You currently have ${lives} LIVES left`)
//     lives--
// }

// console.log(`Game over you have ${lives} lives left.`)

//THIS ONE DOES NOT WORK

// for (let i = 5; i >= 0; i--) {
//     if (i === 0) {
//         console.log(`Game over you have ${i} left.`);
//         break;
//     }
//     console.log('You get another life');
//     console.log(`You currently have ${i}left`)
// }

function double(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result += nums[i] * 2
    }
    return result
}

console.log(double([2, 3, 4, 5]))