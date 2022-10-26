// create a helper function to check what the big num is
function findBiggerNum(num1, num2){
  let bigNum
  if(num1 > num2){
    bigNum = num1
  } else {
    bigNum = num2
  }
  return bigNum
}

function multiplyBiggerNumByTwo(num1, num2) {

  let bigNum = findBiggerNum(num1, num2)
  return bigNum * 2
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }
}

function divideBiggerNumByFour(num1, num2) {
  let bigNum = findBiggerNum(num1, num2)
  return bigNum / 4
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerNum(sum1, sum2)
  return `I ate ${bigNum} tacos.`;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }
}

function adoptSmallerDog(weight1, weight2) {
  let bigDog = findBiggerNum(weight2, weight1)
  if(bigDog === weight1){
    return `I adopted a dog that weighs ${weight2} pounds.`;
  } else{
    return `I adopted a dog that weighs ${weight1} pounds.`;
  }
  }
  // if (weight1 < weight2) {
  //   bigDog = weight1;

  // } else {
  //   smallDog = weight2;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // }


console.log(adoptSmallerDog(2, 1))
console.log(adoptSmallerDog(1, 2))


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
