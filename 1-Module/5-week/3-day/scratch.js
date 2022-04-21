// const addAndMultiply = (num1, num2 = 2, num3 = 5) => {
//   let sum = num1 + num2;
// 	console.log(sum)
//   let product = sum * num3;
//   return product;
// };

// console.log(addAndMultiply(1, 2, 3)) // 9
// console.log(addAndMultiply(1)) // 15

// const stringOrNumber = (str = "hello", num = 50, arr = []) => {
// 	console.log(str)
// 	console.log(num)
// 	console.log(arr)
// };

// console.log(stringOrNumber([], ));

// Range returns all numbers from start to end in an array
// NON-INCLUSIVE
// range(1, 5) = [1, 2, 3, 4]
// range(7, 7) = []
// range(7, 6) = []

// 1. Base case - start >= end
// 2. Recursive case - calling range()
// 3. Recursive step - start + 1

// const range = (start, end) => {
//   if (start >= end) return [];

//   return [start, ...range(start + 1, end)];
// };

// const range2 = (start, end) => {
//   const finalArr = [];
//   if (start >= end) return finalArr;

//   finalArr.push(start);
//   start++;
//   finalArr.push(...range2(start, end));
//   return finalArr;
//   // return [...finalArr, ...range2(start, end)]
// };

//! Focus on getting to this solution, the others are good too but this
//! one is the most relevant for where we're at in the curriculum
const rangeDefault = (start, end, finalArr = []) => {
  // console.log(finalArr);
  if (start >= end) return finalArr;

  finalArr.push(start);

  return rangeDefault(start + 1, end, finalArr);
};

// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4]

// console.log(rangeDefault(1, 5)); // [1, 2, 3, 4]

// const rangeClosure = (start, end) => {
//   const finalArr = []

// 	const innerRange = () => {
// 		if (start >= end) return finalArr;
// 		finalArr.push(start)
// 		start += 1
// 		return innerRange();
// 	}

// 	return innerRange();
// };

// [1, 2, 3, 4]
// console.log(rangeClosure(1, 5));

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

// Base/Edge case: if length = 0, return false
// Recursive step: pop off array, work towards length 0

// const iceCreamShop = (arr, flav) => {
//   if (arr.length === 0) return false;

//   const currentFlav = arr.pop();

//   if (flav === currentFlav) return true;
//   else return iceCreamShop(arr, flav);
// };

const iceCreamShop = (arr, flav) => {
  if (!arr.length) return false;
  if (flav === arr.pop()) return true;
  else return iceCreamShop(arr, flav);
};

// console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
// console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
// console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
// console.log(iceCreamShop([], 'honey lavender')); // false
