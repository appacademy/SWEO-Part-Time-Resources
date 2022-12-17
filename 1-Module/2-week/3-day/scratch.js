//ROTATE RIGHT PRACTICE

/*
let arr = ["a", "b", "c", "d", "e"];

let rotateRight = function(array, num) {
    let copy = array.slice();

    for (let i = 0; i < num; i++) {
        let element = copy.shift();
        copy.push(element);
    }
    return copy;
}

console.log(rotateRight(arr, 2));
*/

//NESTED LOOPS

//The outer loop will run once and then the inner loop will finish all iterations, before
//returning to outer loop

//Example
//Pair up our fruits- BUT we want all unique pairs
/*
let fruits = ["pear", "apple", "orange", "lemon", "grape"]; 

for (let i = 0; i < fruits.length; i++) {
    let fruit1 = fruits[i];
    for (let j = i + 1; j < fruits.length; j++) {
        let fruit2 = fruits[j];
        console.log(fruit1, fruit2);
    }
}
*/

//HELPER FUNCTIONS
//Help us solve smaller problems within a bigger problem
//Decomposition
//-The process of breaking down a large problem into smaller, sub-problems

//We're asked to write a function that takes an array of strings and returns 
//an array with those strings in all caps

/*
let helloArray = ["hello", "hey", "hi"]; // Output - ["HELLO!", "HEY!", "HI!"];

//Our first helper function

function yellString(str) {
    let upperCase = str.toUpperCase();
    return upperCase + "!";
}

function yellingArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let string = arr[i];
        let finalString = yellString(string);
        result.push(finalString);
    }
    return result;
}

console.log(yellingArray(helloArray));
*/

//TRAVERSING A 2D ARRAY

/*
let nestedArr = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];
let string = "";

for (let i = 0; i < nestedArr.length; i++) {
    let subArr = nestedArr[i];
    for (let j = 0; j < subArr.length; j++) {
        console.log(subArr[j])
    }
}
*/