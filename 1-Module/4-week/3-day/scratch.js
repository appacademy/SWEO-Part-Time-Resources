let globalScope = "this is global scope";

// let myFunc = function(arg){
//   let functionScope = "this is function scope";
//   if(true){
//     let blockScope = "this is block scoped";
//   }
//   // blockScoped += '???' // cannot access blockScoped variable because cannot look inwards
//   // console.log(blockScoped)

// }

// myFunc("this is also function scoped");

// let car = "vroom"; // global scope

// let firstName = "James";

// let nameFunction = function(){
//   // let firstName = "Sarah";
//   if(true){
//     // let firstName = "William"
//     console.log(firstName);
//   }
// }
// nameFunction();

// console.log(__dirname);

// const num = 5;
// const newNum = num + 2
// console.log({new: newNum, num: num});

// const dontUseVar = function(){
//   test = "hello";
//   console.log(test)
//   if(true){
//     var test = "hi";
//   }
//   console.log(test);
// }
  let arrCopy = arr.slice(1)
  arr.slice(1).forEach(ele => accum = cb(accum, ele))
  return accum
};

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
  return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
  return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
  if (el > max) {
      return el;
  } else {
      return max;
  }
});
console.log(result3); // 8
=======
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

let atMost = function() {

};

/*******************************************************************************

 Examples:

 let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

// dontUseVar();

const dontUseVar2 = function(){
  // var test = undefined;
  console.log(test);
  let test = "test";
}

dontUseVar2();
