// const addAndMultiply = (num1, num2 = 10, num3 = 5) => {
//   let sum = num1 + num2;
//   let product = sum * num3;
//   return product;
// };

// console.log(addAndMultiply(1, 2, 3)) // 9
// console.log(addAndMultiply(1, 2)); // 15
// console.log(addAndMultiply(1)); // 55
// console.log(addAndMultiply()); // NaN

// const printMyVals = (num = 1, str = false, arr = [10]) => {
//   console.log(num);
//   console.log(str);
//   console.log(arr);
// };

// printMyVals(20, [100, 200]);
//-----------------------------------------------------------------------------



//! Focus on getting to this solution, the others are good too but this
//! one is the most relevant for where we're at in the curriculum
const rangeDefault = (start, end, finalArr = []) => {
  // debugger;
  // console.log(finalArr);
  let arr = []
  if (start >= end) return finalArr;

  finalArr.push(start);

   rangeDefault(start + 1, end, finalArr); // [1, 2, 3, 4]
   return finalArr
};

console.log(rangeDefault(1, 5)); // => [1, 2, 3, 4]
console.log(rangeDefault(3, 4)); // => [3]


//------------------------------------------------------------------------------------

const rangeClosure = (start, end) => {
  const finalArr = [];

  const innerRange = () => {
    if (start >= end) return finalArr;
    finalArr.push(start);
    start += 1;
    return innerRange();
  };

  return innerRange();
};

// console.log(rangeClosure(1, 5)); // => [1, 2, 3, 4]
