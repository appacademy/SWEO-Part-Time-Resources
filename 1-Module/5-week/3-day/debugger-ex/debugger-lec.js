const sumArrRecr = function(numsArr){ 
    debugger; //pauses here 
    if(numsArr.length === 0){
        return 0; 
    }
  
    const firstNum = numsArr[0];
    //need to check recursive step to see if it's getting closer to the base case
    const restOfResult = sumArrRecr(numsArr.slice(1)); 
    const result = firstNum + restOfResult;

    return result;

}

//debugger keyword tells the debugger to pause here at this line of code when it executes the javascript file.

//the "continue / play button" will execute all lines of code until we hit the next `debugger` keyword

console.log(sumArrRecr([1,2,3])) 