/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:

2 = multiplier
5 = number we want to multiply with multiplier
const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25


***********************************************************************/

function dynamicMultiply(num) {
  let multiplier = num;

  return function(factor) {
    return multiplier * factor;
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = dynamicMultiply;
