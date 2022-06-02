//how do we detect if we need to apply DRY? 
//- there's repeating logic that are similar that can be abstracted from each function
// - Typically have strings that are logged or returned with repeating words
// - if you ever find yourself changing a piece of code (value or variable) and have to change it in multiple places

function getBiggestValue(first, second){
  let biggest;
  if (first > second) {
    biggest = first;
  } else {
    biggest = second;
  }
  return biggest;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = getBiggestValue(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2, divisor=3) {
  let bigNum = getBiggestValue(num1, num2);
  return bigNum / divisor; //divisor is a dynamic input
}

function eatMostTacos(sum1, sum2) {
  let mostTacos = getBiggestValue(sum1, sum2);
  return `I ate ${mostTacos} tacos.`;
}


// function adoptSmallerDog(weight1, weight2) {
//   let bigDog = getBiggestValue(weight1, weight2);
//   let smallDog;
//   if (weight1 < bigDog) { //if weight1 is smaller than bigDog, then we know that it is the smaller one of the two
//     smallDog = weight1;
//   } 
//   else{
//     smallDog = weight2;
//   }
//   return `I adopted a dog that weighs ${smallDog} pounds.`;
// }

function adoptSmallerDog(weight1, weight2) {
  let smallDog = getBiggestValue(-1*weight1, -1*weight2)

  return `I adopted a dog that weighs ${-smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};