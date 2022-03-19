//Truth table and how to solve programmatically 
/* 
A  B  |  !A && B 
0  0  |    ? 0 // !false && false
0  1  |    ? 1 // !false && true
1  1  |    ? 0
1  0  |    ? 0
*/

// const myTruthTableSolver = (arrOfBool) => {
//     for(let i  = 0; i < arrOfBool.length; i++){
//         let ele = arrOfBool[i]
//         let [A, B] = ele
//         console.log(!A && B)
//     }
// }

// myTruthTableSolver([[0,0], [0, 1], [1,1], [1, 0]])


// Arrays
// what is a stack/ queue

// Stack
// Last in First out
// First in last out

// const myStack = (arr) => {
//     console.log(arr.pop())
//     console.log(arr)
//     console.log(arr.pop())
//     console.log(arr)
//     console.log(arr.pop())
//     console.log(arr)

//     arr.push(5)
//     console.log(arr)
//     arr.push(4)
//     console.log(arr)
//     arr.push(6)
//     console.log(arr)

//     console.log(arr.pop())
//     console.log(arr)

// }

// myStack([1,2,3,4,5])

// first in first out
// last in last out 
// const myQueue = (arr) => {
    

//     for(let i = 0; i < arr.length; i++){
//         let queue = arr.slice()
//         console.log(arr.shift())
//         console.log(queue)
//         arr.push(2)
//     }

// }
// myQueue([1,2,3,4,5])

// What is a dynamic array
// is an array that can be filled with elements of any data type
// actually a hash table,(next week) , where array are actually key value pairs where the key is the memory address, and the value is the element 

// what is a pointer, memory reference, memory address 
// [1       ,2     ,3    ,4    ,5     ,6    ,7     ]
//  10       11      12    13    14    15    16 

// why are arrays indexed in constant time
// valueAddress = startAddress + index * sizeof(dataType)

// valueOfIndexZero = 10 + 0 * 1
// valueOfIndexOne  = 10 + 1 * 1

// with push, pop why do we say the time complexity is average O(1) worst O(n)
// because the way javascript creates  arrays, it creates them with extra space at the back so that adding values doesn't need a resize
// worst case scenario we get to a point where we run out of extra space, and have to resize.
// let arr = [] // [empty, empty, empty]
// let arr2 = new Array() // [empty, empty, empty]

// simplified Big O
// const bigOExample = (n) => { // O(n + n**2 + n + n )
//                                 // evaluates to O(n**2)
//     let arr = []
//     for(let i = 0; i < n; i++){  // O(n)
//         arr.push(n)
//     }
//     for(let i = 0; i < n; i++){// O(n)
//         for(let j = 0; j < n; j++)// O(n)
//         arr.push(n)
//     }
//     for(let i = 0; i < n; i++){// O(n)
//         arr.push(n)
//     }
//     for(let i = 0; i < n; i++){// O(n)
//         arr.push(n)
//     }
// }
// space complexity in recursion vs iteration
// const bigOSpaceExample = (n) => {
//     let arr = []
//     for(let i = 0; i < n; i++){
//         arr.push(n)
//     }
//     return arr // Space O(n)
// }

// const bigOSpaceExampleRec =(n) => { // Space O(n)
//     if(n===0) return
//     return bigOSpaceExampleRec(n -1)
// }
// converting hex to deci, ascii, bin
// let ourHexCode = '0xC10'
// console.log(parseInt(ourHexCode, 16))
// console.log(String.fromCharCode(ourHexCode))
// console.log(parseInt(ourHexCode, 16).toString(2))
// memory review

// Bytes, kilobytes, megabytes, gigabytes, terabytes:
// 1 byte = 8 bits
// one binary digit is one bit 

// kilo - thousand // 3.2 kilobytes
// mega - million 
// giga - billion
// tera - trillion
// peta - quadrillion
// exa - quintillion
// zetta - sextillion
// yotta - septillion



