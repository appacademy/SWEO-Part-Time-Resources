console.log("------------the call stack------------")
// 1. The call stack is a datastructure (stack datastructure)

// 2. JavaScript uses this to keep track of the EVALUATION of FUNCTION CALLS.

// 3. LIFO - last in first out. The most recent function call added (pushed a frame) will be evaluated first until it finishes / has returned (pop the frame)


// Recursion uses a call stack for its calls!

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
    const result = firstNum + sumArrRecr(restOfNums); //paused for the next calls
    //1 + 5 -- > 6
    return result;

}
console.log(sumArrRecr([])) // 0
console.log(sumArrRecr([1,2,3])) // 0 + 1 + 2 + 3 --> 6

// GOING DOWN THE CALL STACK (creating calls)
//sumArrRecr([1,2,3]
//        |
//      1 + sumArrRecr([2,3])
//                  |
//                2 + sumArrRecr([3])
//                          |
//                        3 + sumArrRecr([])
//                                  |
//                                  0

//  GOING BACK UP THE STACK (finish evaluating calls)
//sumArrRecr([1,2,3]
//        |
//      1 + sumArrRecr([2,3])
//                  |
//                2 + sumArrRecr([3])
//                          |
//                        3 + sumArrRecr([])
//                                  |
//                                  0