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

// const myArr = [];

// console.log(myArr);
// myArr.push(1, 2, 3, 4, 5);
// console.log(myArr);

// Range return all numbers from start to end
// NON-INCLUSIVE
// range(1, 5) => [1, 2, 3, 4]
// range(7, 6) => []
// range(9, 9) => []

// 1. Base/Edge case: start >= end
// 2. Recursive case: ...range();
// 3. Recursive step: start + 1

const range = (start, end) => {
  if (start >= end) return [];
  return [start, ...range(start + 1, end)];
};

const range2 = (start, end) => {
  const finalArr = [];

  if (start >= end) return finalArr;

  finalArr.push(start);
  start++;

  //either this
  finalArr.push(...range2(start, end));
  return finalArr;

  // or this
  // return [...finalArr, ...range2(start, end)];
};
// [...[2], ...range2(3, 5)] => [...[2], ...[3, 4]] => [2, 3, 4]
// [...[3], ...range2(4, 5)] => [...[3], ...[4]] => [3, 4]
// [...[4], ...range2(5, 5)] => [ ...[4], ...[]] => [4]
// []

// console.log(range2(1, 3)); // => [1, 2]
// console.log(range2(1, 5)); // => [1, 2, 3, 4]

//! Focus on getting to this solution, the others are good too but this
//! one is the most relevant for where we're at in the curriculum
const rangeDefault = (start, end, finalArr = []) => {
  debugger;
  // console.log(finalArr);
  if (start >= end) return finalArr;

  finalArr.push(start);

  return rangeDefault(start + 1, end, finalArr); // [1, 2, 3, 4]
};

// console.log(rangeDefault(1, 5)); // => [1, 2, 3, 4]
// rangeDefault(1, 5);

// const myArr = [1];

// myArr.push(2);

// const myFunc = (arr) => {
//   return arr[1];
// };

// console.log(myFunc(myArr));

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

/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.
Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

// 1. Base/Edge case: flavArr.length = 0
// 2. Recursive step: flavArr.pop()

const iceCreamShop = (flavors, fav) => {
	if (flavors.length === 0) return false
	if (flavors.pop() === fav) return true
	else return iceCreamShop(flavors, fav)
};

// const iceCreamShop = (flavors, fav) => {
// 	if (flavors.length === 0) return false

// 	let popped = flavors.pop();
// 	if (popped === fav) return true
// 	else return iceCreamShop(flavors, fav)
// };


// console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
// console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
// console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
// console.log(iceCreamShop([], 'honey lavender')); // false

// const iceCreamShop = (flavors, fav) => {
//   return flavors.includes(fav);
// };