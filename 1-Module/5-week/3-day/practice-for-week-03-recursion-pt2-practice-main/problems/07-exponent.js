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
// /4^3 = 4 x 4 x 4 x 1 = 64
// 4^0 ==> 1
function exponent(base, power) {
    debugger;
    //base case
    if(power === 0){
        return 1;
    }

    //postive power case
    if(power > 0){
        //exponent(4, 3) ==> 4 * exponent(4, 2) ==> 4 * 4 * exponent(4,1) ==> 4 * 4 * 4 * exponent(4,0) ==> 4 * 4 * 4 * 1 ==> 64

        //determine  base  * exponent(base, power - 1)
        const result = base * exponent(base, power - 1);
        return result;
    }


    //negative power case
    else if(power < 0){
        //exponent(4, -3) ==> 1/4 * exponent(4, -2) ==> 1/4 * 1/4 * exponent(4,-1) ==> 1/4 * 1/4 * 1/4 * exponent(4,0) ==> 1/4 * 1/4 * 1/4 * 1 ==> 1/64

        //determine 1/base * exponent(base, power + 1);
        const result = 1/base * exponent(base, power + 1);
        return result;
    }
}
console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}