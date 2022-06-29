const findBiggest = (num1, num2) => {
  if (num1 > num2) return num1
  return num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = findBiggest(num1, num2)
  return bigNum * 2; 
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = findBiggest(num1, num2)
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggest(sum1, sum2)
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = findBiggest(weight1, weight2) === weight1 ? weight2 : weight1; // ternary!
  console.log(smallDog)
    return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};