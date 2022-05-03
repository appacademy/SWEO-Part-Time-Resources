const compare = (val1, val2) => {
  let bigNum;
  if (val1 > val2) {
    bigNum = val1;
  } else {
    bigNum = val2;
  }
  return bigNum;
};

function multiplyBiggerNumByTwo(num1, num2) {
  return compare(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return compare(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  // let bigNum = compare(sum1, sum2);
  // return `I ate ${bigNum} tacos.`;
  return `I ate ${compare(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (compare(weight1, weight2) === weight1) {
    smallDog = weight2;
  } else {
    smallDog = weight1;
  }
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
