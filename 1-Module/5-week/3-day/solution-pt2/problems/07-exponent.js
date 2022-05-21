/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {
    debugger;
    //base case
    // num = 2, power = 0 --> anything to the power of 0 will be 1
    if(power === 0){
        return 1;
    }

    //account for positive power 4 x 4 x 4 x 1 = 64;
    if(power > 0){

        //exponent(4, 3) --> 4 x exponent(4, 2) --> 4 x 4 x exponent(4,1) --> 4 x 4 x 4 x exponent(4,0) -> 4 x 4 x 4 x 1 --> 64
        const restOfResult = exponent(num, power - 1) //exponent(4, 2)
        const finalResult = num * restOfResult; //exponent(4, 3) --> 4 x exponent(4, 2)
        return finalResult;
    }

    //acount for negative power
    if(power < 0){
        //exponent(4, -3) --> 1/4 x exponent(4, -2) --> 1/4 x 1/4 x exponent(4,-1) --> 1/4 x 1/4 x 1/4 x exponent(4,0) -> 1/4 x 1/4 x 1/4 x 1 --> 1/64
        const restOfResult = exponent(num, power + 1) // power + 1 because it's negative and we want to get closer to 0;
        const finalResult = 1/num * restOfResult;
        return finalResult;
    }
}
console.log(exponent(4, 3)); // 64
console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
console.log(exponent(5, 5)); // 3125
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}