// recursion

// base case - the condition where you stop recursing
// recursive step - the condition where you continue recursing, you ("typicaly") make progress towards your base case

// problem: given n and an input x, return x after adding 1 to it n times, using recursion
// function addOneRecursively(n, x){
//     debugger
//     // for(let i = 0; i < n; i++){
//     //     x = x + 1
//     // }
//     // return x
//     if(n === 0) return x
//     return addOneRecursively(n - 1, x + 1)
// }

// console.log(addOneRecursively(5, 2))

// problem: given an array, return the sum of all the numbers in the array, using recursion
function sumNumbers(arr, sum){
    // for(let i = 0; i < arr.length; i++){
    //     sum = sum + arr[i]
    // }
    // return sum
    debugger
    if(arr.length === 0) return sum // base case
    let lastValueofArray = arr[arr.length - 1]
    // sum = sum + currValue
    arr.pop()
    return sumNumbers(arr, sum + lastValueofArray)
}
console.log(sumNumbers([1,2,3,4,5], 0))
