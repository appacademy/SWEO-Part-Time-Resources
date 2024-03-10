// Demonstrating how strings are immutable

// let catName1 = "Riley"
// let catName2 = catName1
// // catName2 = "Riley"

// console.log('Cat Name1: ', catName1)
// console.log('Cat Name2: ', catName2)

// catName1 = "Garfield"

// console.log('Cat Name1: ', catName1)
// console.log('Cat Name2: ', catName2)



// Demonstrating arrays how they reference points in memory
// let fruits1 = ["apple", "orange", "banana"]
// let fruits2 = fruits1


// let shallowFruits = fruits1.slice(0) // this is a shallow copy
// let deepFruits = [...fruits1] // this is a deep copy

// console.log("fruitsCopy:", shallowFruits) // fruits copy BEFORE the change

// fruits2[2]  = "pineapple"

// console.log('fruits1:', fruits1)
// console.log('fruits2:', fruits2)


// console.log("fruitsCopy:", shallowFruits) // fruits copy AFTER the change



// Polya example:
// let array = [0, 1, 0, 3, 12] // [1, 3, 12, 0, 0]
// array = [0, 9, 0, 3, 6] // => [9, 3, 6, 0, 0]

// function moveZeros(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) {
//             // we're gonna do the thing
//             // splice (mutates the array)
//             // we can't use slice, because that DOESN'T mutate the array
//             arr.splice(i, 1)
//             arr.push(0)
//         }
//     }
//     return arr
// }


// console.log(moveZeros(array))
