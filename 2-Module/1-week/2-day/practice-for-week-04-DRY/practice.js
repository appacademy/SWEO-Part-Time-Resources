// const myHelper = (num1, num2, flag) => flag === true ? (num1 > num2 ? num1 : num2) : (num1 > num2 ? num2 : num1)

// const myHelper2 = (num1, num2, flag) => {
//   if(flag === true){
//     if(num1 > num2){
//       return num1
//     }else{
//       return num2
//     }
//   }else{
//     if(num1 > num2){
//       return num2
//     }else{
//       return num1
//     }
//   }
// }
const myHelper = (num1, num2) => {
  if(num1 > num2){
    return num1
  }else{
    return num2
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return myHelper(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return myHelper(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${myHelper(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let finalWeight;
  if(myHelper(weight1, weight2) === weight1) finalWeight = weight2
  else finalWeight = weight1
  return `I adopted a dog that weighs ${finalWeight} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};