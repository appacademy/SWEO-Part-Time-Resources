console.log("------------What is Recursion------------")
// 1) The ability for a function to call and use itself to solve a similar problem
// 2) We use recursion to help us solve the original problem by...
//      - Solving many smaller and similar problems first (sub problems).



console.log("------------Regular For Loop------------")
//write a function that takes an array of numbers and then returns the total sum of all those numbers
const sumArrIter = function(numsArr){
    let baseTotal = 0;  //0 + num //then reassign baseTotal to that new number
    for(let i=0; i<numsArr.length; i++){
        const num = numsArr[i];
        baseTotal += num; 
    }
    return baseTotal;
} 

console.log(sumArrIter([1])) //0 + 1 --> 1
console.log(sumArrIter([1,2])) //0 + 1 + 2 --> 3


console.log(sumArrIter([1,2,3])) //0 + 1 + 2 + 3 --> 6

let result123 = 1 + sumArrIter([2,3]) // 1 + 5 // 6
console.log("1 + sumArrIter([2,3]):", result123)


console.log("------------Using Recursion------------")
//1) base cases (foundation we build from)
//2) recursive case - where we call itself
    //2.1) Any logic Necessary
//3) recursive step - get closer to the base case(sometimes combined with recursive case)

//start with the smallest example first [], then [1], then [1,2], etc.

// const sumArrRecr = function(numsArr){
//     //base case: if empty numsArr empty, then give us 0
//     if(numsArr.length === 0){
//         return 0; //i.e. if numsArr is an empty array, return 0
//     }
//     return numsArr[0] + sumArrRecr(numsArr.slice(1));
// }
const sumArrRecr = function(numsArr){
    //base case: if empty numsArr empty, then give us 0
    if(numsArr.length === 0){
        return 0; //i.e. if numsArr is an empty array, return 0
    }
  
    //starting array: [1,2,3]
    //1 + sumArrRecr([2,3])
    //I need the first number from the array to start adding on
    const firstNum = numsArr[0]; // 1
    const restOfNums = numsArr.slice(1) //[2,3]
    //this will solve the smaller problems ([2,3]) and then we add our initial one to that sub-result.
    const result = firstNum + sumArrRecr(restOfNums); 
    //1 + 5 -- > 6
    return result;

}
console.log(sumArrRecr([])) // 0
console.log(sumArrRecr([1])) //0 + 1 --> 1
console.log(sumArrRecr([1,2])) // 1 + 2 + 0 + --> 3
console.log(sumArrRecr([1,2,3])) // 0 + 1 + 2 + 3 --> 6

