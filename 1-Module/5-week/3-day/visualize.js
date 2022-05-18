const sumArrRecr = function(numsArr){
    if(numsArr.length === 0){
        return 0; 
    }
  
    const firstNum = numsArr[0];
    const result = firstNum + sumArrRecr(numsArr.slice(1)); 

    return result;

}

console.log(sumArrRecr([1,2,3])) 

/*
FOR EXAMPLE: sumArrRecr([1,2,3])

const sumArrRecr = function([1,2,3]){
    //base case
    if(numsArr.length === 0) return 0; 

    const firstNum = numsArr[0];
    const result = 1 + sumArrRecr([2,3]); 
    return result;           |
}                            |
                             |
            const sumArrRecr = function([2,3]){
                //base case
                if(numsArr.length === 0) return 0; 

                const firstNum = numsArr[0];
                const result = 2 + sumArrRecr([3]); 
                return result;          |
            }                           |
                                        |
                                        |
                        const sumArrRecr = function([3]){
                            //base case
                            if(numsArr.length === 0) return 0; 

                            const firstNum = numsArr[0];
                            const result = 3 + sumArrRecr([]); 
                            return result;          |
                        }                           |
                                                    |
                                                    |
                                    const sumArrRecr = function([]){
                                        //HIT BASE CASE------sumArrRecr([])-------> 0
                                        if(numsArr.length === 0) return 0; 

                                        //****return val for this func sumArrRecr([]) is 0****

                                        // -------STOP IGNORE BELOW NOW-------
                                        const firstNum...
                                    }                               
*/ 