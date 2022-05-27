/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Two-Dimensional-Arrays
*/

// Please answer the questions below then we will go over it together briefly.
// You may NOT use any resources for this! If you don't know, guess!

let arr = [
    ["a", "b", "c"], 
    [1, 2, 3], 
    ['x', 'y','z']
];

// What is the length of the arr above?
// 3

// what element would be returned if we console.log(arr[1][2])?
// 3

// Using code comments, please explain what each line of the following for loop is doing
// in your own words.

for (let i = 0; i < arr.length; i++) { 
    // What does arr[i] refer to (not the exact value, but the item in the array)?

    for (let j = 0; j < arr[i].length; j++) { 
        // what does arr[i][j] refer to (not the exact value, but the item in the array)? 
    }
}

// if i = 1 and j = 2, what would be returned if we console.log(arr[j][i])?

