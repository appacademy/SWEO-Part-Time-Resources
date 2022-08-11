let globalScope = "this is global scope";


let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped"
  
  if(true){
    let blockScope = "I am block scoped"
    if(true){
      // console.log(alsoFunctionScope2)
    }
  };


};

// myFunction("I am function scoped");


// function myFilter(array, cb) {
//   let newArr = []
//   let newStr = 'something '
//   for(let i = 0; i< array.length; i++){
//     let ele = array[i]
//     let newStr = 'something different'
//     console.log(newStr, 'inside for block')
//     // if(cb(ele) === true){ // same thing as below
//     if(cb(ele)){
//       newArr.push(ele)
//     }
  
//   }
//   console.log(newStr, 'inside function scope')
//   // console.log(ele) 
//   // return newStr
// }

// myFilter([1,2,3], myFunction)

// let car = "vroom"; // global scope


// function makeSounds(dogSound) { // local or function scope
//   let cow = "moo";

//   if (true) {
//     let turkey = "gobble"; // block scoped

//     for (let i = 0; i < 2; i++) {
//       console.log(car, dogSound, cow, turkey, i);
//     }
//   }
// }


// makeSounds("woof");



// let hungry = false;

// function sayHungry() {
//   let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }

// }

// console.log(hungry) // false

// sayHungry(); // I'm hungry

// console.log(hungry) // true


// let someVariable1 = 'some Variable 1' // let is block scoped reassignable 

// const someVariable2 = 'some variable 2' // const is block scoped not reassignable

// var someVariable3 = 'some variable 3' // var is function scoped reassignable 

// someVariable2 = 'some variable 2 reassign' // errror


// const someFunc2 = function(str){
//   const newArr = []
//   for(let i = 0; i < str.length; i++){
//     const letter = str[i]
//     newArr.push(letter)
//   }
// console.log(newArr.join(''))
// console.log(newArr)

// }

// console.log(someFunc2('james thompson'))

// var test4 = 'how ya mom an em'


// const dontUseVar = function(){
//   var test = "hello";
//   if(true){
//     var test = "hi";
//     if(true){
//       var test2 = 'hey'
//     } if (true){
//       var test3 = 'how ya derin'
//       console.log(test, test2, test3);
//     }
//   }
// }

// dontUseVar(); // 

// const dontUseVar2 = function(){
//   // console.log(test);
//   // var test = "test";
//   let someString = 'james'
//   const someString = 'thompson'
// }

// dontUseVar2();


// const sumFunc = function(arr){
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//     const ele = arr[i]
//     sum += ele
//   }
//   return sum
// }

// console.log(sumFunc([1,2,3,4,5]))

/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:
make a plan
pass an array, and a callback as parameters
itearte over our array
reassign each element to what is returned from our callback passing in the element and the index

*******************************************************************************/

// let mapMutator = function(arr, cb) {
//   // for(let i = 0; i < arr.length; i++){
//   //   let ele = arr[i]
//   arr.forEach(function(ele, i){
//     let newVal = cb(ele, i)
//     arr[i] = newVal
//   })
// };

// let arr1 = [4, 2, 6, 5];
// mapMutator(arr1, function (el) {
//     return el * 2;
// });
// console.log(arr1);  // [ 8, 4, 12, 10 ]

// let arr2 = [8, 9, 10];
// mapMutator(arr2, function (el, i) {
//     return el * i;
// });
// console.log(arr2); // [ 0, 9, 20 ]

/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:


*******************************************************************************/

// let suffixCipher = function(str, obj) {
//   let words = str.split(' ')
//   let newArr = []
//   for(let i = 0; i < words.length; i++){
//     let word = words[i]
//     for(let key in obj){

//       let cb = obj[key]
//       if(word.endsWith(key)){
//        words[i] = cb(word)
//       }
//     }
//   }
//   return words.join(' ')
// };

// let cipher1 = {
//   ly: function(word) {
//       return word.slice(0, -1) + 'ee';
//   },
//   ize: function(word) {
//       return word + 'r';
//   }
// };
// console.log(suffixCipher('quietly and gently visualize', cipher1));
// // quietlee and gentlee visualizer

// let cipher2 = {
//   tal: function(word) {
//       return word.toUpperCase();
//   },
//   s: function(word) {
//       return word + 'th';
//   }
// };
// console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// // INCREMENTAL progressth isth very INSTRUMENTAL


/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

make a plan


*******************************************************************************/

function none(array, cb) {
  // for(let i = 0; i < array.length; i++){
  //   let el = array[i]
  //   if(cb(el) === true) return false
  // }
  let filtered = array.filter(cb)
  console.log(filtered)
  return filtered.length === 0
}

// let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
//     return w.includes('e');
// });
// console.log(result1);   // true

// let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
//     return w.includes('e');
// });
// console.log(result2);   // false

// let result3 = none([4, 5, 7, 1], function(n) {
//     return n < 0;
// });
// console.log(result3);   // true

// let result4 = none([4, -5, 7, -1], function(n) {
//     return n < 0;
// });
// console.log(result4);   // false

/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

*******************************************************************************/

let one = function(arr, cb) {
  // let count = 0;
  // let newArr = []
  // for(let i = 0; i < arr.length; i++){
  //   let char = arr[i]
  //   let res = cb(char, i)
  //   if(res === true){
  //     count++
  //   }
  // }
  // if(count === 1){
  //   return true
  // }
  let filtered = arr.filter(cb)
  return filtered.length === 1
};

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true