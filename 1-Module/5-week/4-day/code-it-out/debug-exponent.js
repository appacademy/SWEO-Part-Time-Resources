/***********************************************************************
This recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.


Your task: utilize the debugger to get the exponent function to work properly!
hint: remember to watch variables
***********************************************************************/

function exponent(num, power) {
    //base case
    if(power){ //anything to the power of 0 will be 1, so if power is 0, return 1
        return 1;
    }

    //account for positive power; 4 x 4 x 4 x 1 = 64;
    if(power < 0){
        const restOfResult = exponent(num, power - 1) //exponent(4, 3-1)
        const finalResult = num * restOfResult; //exponent(4, 3) --> 4 x exponent(4, 2)
        return finalResult;
    }

    //acount for negative power; (1/4) x (1/4) x (1/4) x 1 = 1/64;
    if(power > 0){
        //rest of result from recursion but power + 1 since power is negative.
        const restOfResult = exponent(num, power - 1) //exponent(4, 3 + 1)
        const finalResult = 1/num * restOfResult;
        return finalResult;
    }
}

//comment out examples to see which one is causing that failure
console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)

  