let globalScope = "this is global scope";

let GLOBALVARIABLE = 'GLOBAL CAPSED'

// let exampleFunc = function(functionScoped){
//   let alsoFunctionScoped = 'I am also function scoped'
//   console.log(globalScope)

//   if(true){
//     let blockScoped = 'I am blockScoped'
//     if(true){
//       functionScoped = alsoFunctionScoped
//       blockScoped += '!!!'
//       console.log(functionScoped, blockScoped, alsoFunctionScoped)
//     }
//   }
//   // blockScoped += '???' // cannot access blockScoped variable because cannot look inwards
//   // console.log(blockScoped)

// }

// exampleFunc()


let car = "vroom";


// function makeSounds(dogSound) {
//   let cow = "moo";

//   if (true) {
//     let turkey = "gobble";

//     for (let i = 0; i < 2; i++) {
//       let ele = turkey[i]
//       console.log(car, dogSound, cow, turkey, i, ele);
//     }
//   }
// }
// makeSounds("woof");


// let hungry = false;

// function sayHungry() {
//   const hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!", hungry);
//     hungry = false
//   } else {
//     console.log("I'm coding");
//   }
// }

// sayHungry();
// console.log(hungry)

// const dontUseVar = function(){
//   test = "hello";
//   console.log(test)
//   if(true){
//     var test = "hi";
//   }
//   console.log(test, this);
// }

// dontUseVar();

// const dontUseVar2 = function(arr){
//   // var test = undefined;

//   for(let i = 0; i < arr.length; i++){
//     var ele = arr[i]
//   }
//   return ele
// }

// console.log(dontUseVar2([1,2,3,4]));


/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

take in a sentence and an object as params
  split sentence into array of words
  create a newArray variable
  loop oveer the sentence array
  save each element to a variable 
  loop over our object
  check if our element ends with our key
    call our callback, which is a value of our object, on our word
    push our changed value into our new array

  return our new array joined to a string

*******************************************************************************/

// let suffixCipher = function(sentence, obj) {
//   let split = sentence.split(' ')
//   let arr = []
//   for(let i = 0; i < split.length; i++){
//     let value = split[i]
//     for(let key in obj){
//       if(value.endsWith(key)){
//         let cb = obj[key]
//         split[i] = cb(value)
//       } 
//     }
//   }
//   return split.join(' ')
// };

// let cipher1 = {
//     ly: function(word) {
//         return word.slice(0, -1) + 'ee';
//     },
//     ize: function(word) {
//         return word + 'r';
//     }
// };
// console.log(suffixCipher('quietly and gently visualize', cipher1));
// // quietlee and gentlee visualizer

// let cipher2 = {
//     tal: function(word) {
//         return word.toUpperCase();
//     },
//     s: function(word) {
//         return word + 'th';
//     }
// };
// console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// // INCREMENTAL progressth isth very INSTRUMENTAL


/*******************************************************************************
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

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
optional initial accumulator


Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.


takes in array and callback
grab the first element
*******************************************************************************/


// let mySimpleReduce = function (arr, cb) {
//   let accumulator = arr[0]
//   for(let i = 1; i < arr.length; i++){
//     // arr.slice(1).forEach(ele => {
//     accumulator = cb(accumulator, ele)
//   })
//   return accumulator
// };




// let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
//   return sum + el;
// });
// console.log(result1); // 14

// let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
//   return product * el;
// });
// console.log(result2); // 48

// let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
//   if (el > max) {
//       return el;
//   } else {
//       return max;
//   }
// });
// console.log(result3); // 8

// let arr = [1,2,3,4,5]

// let reduced = arr.reduce(function(accum, ele){
//  return accum += ele
// })
// console.log(reduced)