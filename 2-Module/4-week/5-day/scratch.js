//Saturday Review

//What is a pointer?
// - A byte that points to a specific location in memory

//What is the time complexity of this function
// Linear - O(n)

//What is the space complexity of this function
// Linear - O(n)

function time(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].toUpperCase());
    }
    return result;
}

//Get the character code of this index :

let str = "beep beep boop boop";
let index = 12;

console.log(str.charCodeAt(12));

//What is the time complexity of loopDeLoop
//O (n ^ 2) - Quadratic
function loopDeLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(i , j);
        }
    }

    for (let i = 1; i < arr.length; i++) {
        console.log("Current", arr[i]);
    }
}

/*
What are the results of this truth table from top to bottom

A    B     A || !(A && B) - !A || !B
0    0       1
0    1       1
1    0       1
1    1       1

*/

//Which data structure has the worst space complexity?
//All are O(n)