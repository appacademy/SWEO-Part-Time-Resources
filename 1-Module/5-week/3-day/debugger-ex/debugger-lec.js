const sumArrRecr = function(numsArr){ 
    //debugger keyword tells the debugger to pause here at this line of code when it executes the javascript file.
    debugger;
    if(numsArr.length === 0){ // [] !== 0
        return 0; 
    }
  
    const firstNum = numsArr[0];
    const restOfResult = sumArrRecr(numsArr.slice(1)); 
    const result = firstNum + restOfResult;

    return result;

}



//the "continue / play button" will execute all lines of code until we hit the next `debugger` keyword

console.log(sumArrRecr([1,2,3])) 