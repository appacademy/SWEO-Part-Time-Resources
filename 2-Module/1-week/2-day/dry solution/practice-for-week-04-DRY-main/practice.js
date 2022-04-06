// const getMax = (num1, num2) => {
// 	if(num1 > num2) return num1
// 	else return num2
// }

function getMax(num1, num2, getMax = true) {
	return getMax ? Math.max(num1, num2) : Math.min(num1, num2);
}

const timesNumberBy = (bigNum, num)=>{
	return bigNum * num
}

function multiplyBiggerNumByTwo(num1, num2) {
	return timesNumberBy(getMax(num1, num2), 2)
}

const divideByThree = (bigNum) => {
	return bigNum / 3
}

function divideBiggerNumByThree(num1, num2) {
	return divideByThree(getMax(num1, num2))
}

const ateTaco = (bigNum) => {
	return `I ate ${bigNum} tacos.`
}

function eatMostTacos(sum1, sum2) {
	return ateTaco(getMax(sum1, sum2))
}

const adoptDog = (weight) => {
	return `I adopted a dog that weighs ${weight} pounds.`
}

function adoptSmallerDog(weight1, weight2) {
  if(biggNum(weight1, weight2) === weight1) {
	return adoptDog(weight2)
  } else {
	return adoptDog(weight1)
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
