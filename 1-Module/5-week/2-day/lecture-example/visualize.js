const sumArrRecr = function(numsArr){
    if(numsArr.length === 0){
        return 0; 
    }
  
    const firstNum = numsArr[0]; // 1
    const restOfResult = sumArrRecr(numsArr.slice(1)); 

    return firstNum + restOfResult;

}

console.log(sumArrRecr([1,2,3])) 

/*
const sumArrRecr = function([1,2,3]){
    if(numsArr.length === 0){
        return 0; 
    }
    const firstNum = 1
    const restOfResult = sumArrRecr([2,3]); //pause here to evaluate sumArrRecr
                                |
    return 1 + restOfResult;    |
}                               |
                                |
                const sumArrRecr = function([2,3]){
                    if(numsArr.length === 0){
                        return 0; 
                    }    
                    const firstNum = 2
                    const restOfResult = sumArrRecr([3]); //pause here to evaluate sumArrRecr
                                                |
                    return 2 + restOfResult;    |
                }                               |
                                                |
                            const sumArrRecr = function([3]){
                                if(numsArr.length === 0){
                                    return 0; 
                                }
                                const firstNum = 3
                                const restOfResult = sumArrRecr([]); //pause here to evaluate sumArrRecr                 |
                                return 3 + restOfResult;   |
                            }                              |
                                                           |
                                                const sumArrRecr = function([]){
                                                    if(numsArr.length === 0){
                                                        return 0;  
                                                        //HIT BASE CASE----sumArrRecr[]----> 0
                                                    }

                                                    //------IGNORE---------
                                                    const firstNum = 3
                                                    const restOfResult = sumArrRecr([]); //pause here to evaluate sumArrRecr

                                                    return 3 + restOfResult;
                                                } 

*/

