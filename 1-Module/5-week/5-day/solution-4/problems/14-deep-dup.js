/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
***********************************************************************/


function deepDup(arr) {
  let dupArr = [];
  for (let ele of arr) {
    if (ele instanceof Array) {
      dupArr.push(deepDup(ele));
    } else dupArr.push(ele);
  }
  return dupArr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}