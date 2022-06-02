function compareFindBiggest(first, second){
  //takes in the first and second value, then determines which one is bigger
  let biggest;
  if (first > second) {
    biggest = first;
  } else {
    biggest = second;
  }
  return biggest;
}
function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = compareFindBiggest(num1,num2);

  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2, divisor=3) {
  return compareFindBiggest(num1,num2) / divisor;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compareFindBiggest(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = -(compareFindBiggest(-weight1, -weight2)) //10 --> -10, 8 --> -8 --> -8 is bigger than -10 --> we then take -8 and convert back to a positive number
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

// function adoptSmallerDog(weight1, weight2) {
//   let smallDog;
//   if(compareFindBiggest(weight1, weight2) === weight1){
//     smallDog = weight2;
//   }
//   else{
//     smallDog = weight1;
//   }
//   return `I adopted a dog that weighs ${smallDog} pounds.`;
// }

// const applyCbToBiggerOrSmallerNum = (num1, num2, cb) => {
//   let bigNum;
//   let smallNum;
//   if (num1 > num2) {
//     bigNum = num1
//     smallNum = num2
//   } else {
//     bigNum = num2
//     smallNum = num1
//   }
//   return cb({ bigNum, smallNum })
// }

// function adoptSmallerDog(weight1, weight2) {
//   return applyCbToBiggerOrSmallerNum(weight1, weight2, ({ smallNum }) => {
//     return `I adopted a dog that weighs ${smallNum} pounds.`;
//   });

// }




/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};