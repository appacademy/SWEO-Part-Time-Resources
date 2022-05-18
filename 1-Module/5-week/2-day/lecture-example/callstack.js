console.log("------------the call stack------------")
// 1. The call stack is a datastructure (stack datastructure)

// 2. JavaScript uses this to keep track of the EVALUATION of FUNCTION CALLS.

// 3. LIFO - last in first out. The most recent function call added (pushed a frame) will be evaluated first until it finishes / has returned (pop the frame)


// Recursion uses a call stack for its calls!

//sumArrRecr([1,2,3]
const sumArrRecr = function(numsArr){
    //base case where numsArr length is 0, return 0
    if(numsArr.length === 0) return 0;

    //take the front number
    const frontNum = numsArr[0];

    //get the final result by combining our frontNum with the recursion of the smaller sub problem
    const result = frontNum + sumArrRecr(numsArr.slice(1)) // 1 + sumArrRecr([2,3]) //PAUSES H
    //                                                                   |
    //                                                                 2 + sumArrRec([3])
    return result; // 1 + 5 = 6
}

console.log(sumArrRecr([1,2,3])) // 1 + 2 + 3 --> 6

// in english: going down and creating the callstack
//result =  sumArrRecr([1,2,3])
//                  |
//                1 + sumArrRecr([2,3])
//                          |
//                        2 + sumArrRecr([3])
//                                  |
//                                3 + sumArrRecr([])
//                                          |
//                                          0

// in english: popping the calls off the callstack (back up)
//result =  sumArrRecr([1,2,3])
//                  |
//                  6
//                          
//                          
//                                  
//                                  
//                                          
//                                          