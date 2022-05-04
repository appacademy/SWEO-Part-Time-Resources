const giveLargeNum = (num1, num2) => {
  if (num1 > num2) return num1;
  else return num2;
};

function multiplyBiggerNumByTwo(num1, num2) {
  return giveLargeNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return giveLargeNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${giveLargeNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
	let smallDog;
	if (giveLargeNum(weight1, weight2) === weight1) {
		smallDog = weight2
	} else {
		smallDog = weight1
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
