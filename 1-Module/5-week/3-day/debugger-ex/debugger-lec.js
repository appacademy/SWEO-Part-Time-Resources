const sumArrRecr = function(numsArr){
    if(numsArr === 0){
        return 0; 
    }
  
    const firstNum = numsArr[0];
    const restOfResult = sumArrRecr(numsArr.slice(0)); 
    const result = firstNum + restOfResult;

    return result;

}

console.log(sumArrRecr([1,2,3])) 