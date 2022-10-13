const addAndMultiply = (num1, num2 = 10, num3 = 5) => {
  let sum = num1 + num2;
  let product = sum * num3;
  return product;
};

console.log(addAndMultiply(1, 2, 3)) // 9
console.log(addAndMultiply(1, 2)); // 15
console.log(addAndMultiply(1)); // 55
console.log(addAndMultiply()); // NaN

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
  // let arr = []
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
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//PROBLEM SOLUTIONS FOR PT 2

//---------------------------------------------------------------------
//---------------------------------------------------------------------
function reverse(str, arr = []) {
  // Your code here
  if (str.length === 0){
    return ""

  }
  let strArr = str.split("")

  let shifted = strArr.shift()

  arr.unshift(shifted)
  let joined = strArr.join("")

  reverse(joined, arr)
  return arr.join("");
}

function reverse(str) {
  //!!START
  if (!str.length) return str;

  return reverse(str.slice(1)) + str[0];
  //!!END
}
//---------------------------------------------------------------------
function addToTwelve(arr) {
  // Your code here
  //BASE CASE
  if(arr.length < 2) {
    return false
  }

  //return true if two adj nums === 12
  if(arr[0] + arr[1] === 12) {
    return true
  }

  //RECURSIVE STEP
arr.shift()
// console.log(arr)
  //RECURSIVE CASE
return addToTwelve(arr)
  //if the arr doesn't have that return false
}

//---------------------------------------------------------------------

function exponent(num, power) {
  if (power === 0) return 1; // base case

  if (power > 0) {
    return num * exponent(num, power - 1); //3 * 3 * 1
  }

  if (power < 0) {
    return (1 / num) * exponent(num, power + 1);
  }
}

//---------------------------------------------------------------------
function advancedExponent(b, n) {
  // Your code here
//   exponent(b, 0) //
console.log(null + 1)
if(n === 0) return 1
// exponent(b, 1) // b
if(n === 1) return b
// exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
if(n % 2 === 0){
  return  advancedExponent(b, n / 2) * advancedExponent(b, n / 2)
}
// exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]
if(n%2 !== 0){
  return b * advancedExponent(b, (n - 1) / 2) * advancedExponent(b, (n - 1) / 2)
}

}
