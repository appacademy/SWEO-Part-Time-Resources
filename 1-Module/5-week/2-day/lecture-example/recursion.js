console.log("------------What is Recursion------------")
// 1) The ability for a function to call and use itself to solve a similar problem
// 2) We use recursion to help us solve the original problem by...
//      - Solving many smaller and similar problems first (sub problems).



console.log("------------Regular For Loop------------")
//write a function that takes an array of numbers and then returns the total sum of all those numbers
const sumArrIter = function(numsArr){

} 

console.log(sumArrIter([1])) // --> 1
console.log(sumArrIter([1,2])) // --> 3
console.log(sumArrIter([1,2,3])) // --> 6

// let result = sumArrIter([1,2,3])
// let result1 = 1 + sumArrIter([2,3])
// let result2 = 1 + 2 + sumArrIter([3])
// let result3 = 1 + 2 + 3 + sumArrIter([])

// console.log("sumArrIter([1,2,3]):", result)
// console.log("1 + sumArrIter([2,3]):", result1)
// console.log("1 + 2 + sumArrIter([3]):", result2)
// console.log("1 + 2 + 3 + sumArrIter([]):", result3)


console.log("------------Using Recursion------------")
//1) base cases (foundation we build from)
//2) recursive case - where we call itself
    //2.1) Any logic Necessary
//3) recursive step - get closer to the base case(sometimes combined with recursive case)

//start with the smallest example first [], then [1], then [1,2], etc.
const sumArrRecr = function(numsArr){
  
}
console.log(sumArrRecr([])) // --> 0
console.log(sumArrRecr([1])) //0 + 1 --> 1
console.log(sumArrRecr([1,2])) // 1 + 2 --> 3
console.log(sumArrRecr([1,2,3])) // 1 + 2 + 3 --> 6

