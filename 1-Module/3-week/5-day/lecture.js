// Advanced array methods!

// How do they work?
// Combining loops with arrays -> smushing it into one function save data
// arr.forEach(function) -> function(ele, i, arr)

// Using array's forEach method, take an array of numbers and generate a
// new array with all of the numbers tripled

// let nums = [1, 2, 3, 4, 5]; // 

// let result = nums.forEach(console.log)
// let trips = [];
// let result = nums.forEach(ele => trips.push(ele*3))
// console.log(console.log) //  new array? same array? just the elements of the array?
// console.log(trips)

// const friends = [
//     {
//         name: "Albert",
//         yearsOfFriendship: 3
//     },
//     {
//         name: "Angela",
//         yearsOfFriendship: 2
//     },
//     {
//         name: "Freddy",
//         yearsOfFriendship: 8
//     },
//     {
//         name: "Agatha",
//         yearsOfFriendship: 6
//     }
// ];

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
// friends.forEach((banana)=>{
//   let {name, yearsOfFriendship} = banana;
//   console.log(name + ":", yearsOfFriendship, "years");
// })

// let nums = [1, 2, 3, 4, 5]; // 

// console.log(nums.map((ele, i, arr)=>{
//     console.log(ele, i, arr)
//     return "test"
// }))

// let trips = [];
// let result = nums.map((ele, i, arr) => {
//     // trips.push(ele*3) // ANTIPATTERN!
//     return ele * 3; 
// })

// console.log(result)
// console.log(trips)

// let nums = [1, 2, 3, 4, 5]; //  use filter to find odd numbers

// console.log(nums.filter((ele, i, arr)=>{
//     console.log(ele, i, arr)
//     if (ele % 2 !== 0) return true;
//     return false
// }))
// console.log(nums.filter((ele)=> ele % 2 !== 0 ))
let nums = [1, 2, 3, 4, 5]; //  use reduce to find sum
//                   (acc, ele, i arr) => 
let sum = nums.reduce((acc, ele, i, arr) => {
    // console.log(acc, ele, i, arr)
    // return acc + " " + ele
    console.log("Current sum: ", acc)
    console.log("next num   : ", ele)
    return acc + ele;
})

console.log(sum)