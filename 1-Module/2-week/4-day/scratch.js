//2D Arrays
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

//-----------------------------------------------------------------------------
//MUTABILITY
let arr1 = [1,2,3,4,5,6]
let str = 'Witcher'

// mutable example
// What does it mean if something is mutable, and what are
// the 2 mutable data types in javascript?
// object and arrays

// please demonstrate how to mutate the mutable data type above
// using any method you prefer.
// arr1.pop();

//immutable example
// what does it mean if something is immutable and what are
// 3 immutable data types?
// string number boolean

// please demonstrate how the immutable data type above is immutable.
// str[0] = 'T';
// console.log(str) // Witcher
// str = fjkldsl

//-----------------------------------------------------------------------------
//PUSH POP UNSHIFT SHIFT

let arr2 = [1,2,3,4,5,6]

// Common Array Methods to cover:

// Push
// What is .push's functionality?
// adds an element to the end of an array

// What does it return? Please demonstrate how to access the return value below.
let newLength = arr2.push(7)

// Pop
// What is .pop's functionality?
// removes the last element from the Array.

// What does it return? Please demonstrate how to access the return value below.
let lastElement = arr2.pop();

// Shift
// What is .shift's functionality?
// removes the first element from an array.

// What does it return? Please demonstrate how to access the return value below.
let firstElement = arr2.shift();

// Unshift
// What is .unshift's functionality?
// Add a new element or many elements to the beginning of the array

// What does it return? Please demonstrate how to access the return value below.
newLength = arr.unshift();
