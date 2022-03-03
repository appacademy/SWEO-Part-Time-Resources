const sortTwoNums = (num1, num2) => {
  if(num1 > num2){
    return [num1, num2]
  }else{
    return [num2, num1]
  }
}
// function multiplyBiggerNumByTwo(num1, num2) {
//   return sortTwoNums(num1, num2)[0] * 2
// }

// function divideBiggerNumByThree(num1, num2) {
//   return sortTwoNums(num1, num2)[0] / 3
// }

// function eatMostTacos(sum1, sum2) {
//   return `I ate ${sortTwoNums(sum1, sum2)[0]} tacos.`;
// }

// function adoptSmallerDog(weight1, weight2) {
//   return `I adopted a dog that weighs sortTwoNums(weight1, weight2)[1]} pounds.`;
// }
function multiplyBiggerNumByTwo(num1, num2) {
  return Math.max(num1, num2) * 2
}

function divideBiggerNumByThree(num1, num2) {
  return Math.max(num1, num2) / 3
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${Math.max(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${Math.min(weight1, weight2)} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};