// recursion

// base case - the condition where you stop recursing
// recrursive case -
// recursive step - the condition where you continue recursing, you ("typicaly") make progress towards your base case

// problem: given n and an input x, return x after adding 1 to it n times, using recursion
function addOneRecursively(n, x){
    // for(let i = 0; i < n; i++){
    //     x++
    // }
    // return x
    debugger
    if(n === 0) return x
    n = n - 1
    x = x + 1
    // return addOneRecursively(n - 1, x + 1)
    console.log(n, x)
    return addOneRecursively(n, x)
}

// console.log(addOneRecursively(5, 2))

// problem: given an array, return the sum of all the numbers in the array, using recursion
function sumNumbers(arr, sum){
    // let sum = 0
    // for(let i = 0; i < arr.length; i++){
    //     sum += arr[i]
    // }
    // return sum
    debugger
    if(arr.length === 0) return sum
    else {
        sum += arr[arr.length - 1]
        arr.pop()
        return sumNumbers(arr, sum)
    }
}

console.log(sumNumbers([1,2,3,4,5], 0))
