//function declartion
// function helloDeclarationFunc() {
//   helloDeclarationFunc()
//   return 'hello I am a function declaration';
// }

// // function expression syntax
// let helloExpressionFunc = function() {
//   return 'hello I am a function expression';
// };



// console.log(helloDeclarationFunc())
// console.log(helloExpressionFunc())


// let name = "Alvin";
// let age = 1000;
// let getAvg = function (num1, num2) {
//   return (num1 + num2) / 2;
// };

// console.log(name, age, getAvg(4, 2))

//Mutability
// let nums = [1, 2, 3];
// console.log(nums);
// nums[0] = 100;
// console.log(nums);

// let name1 = "WIZ";
// console.log(name1);
// name1[1] = "E"; // This will not work
// name1[2] = "S"; // This will not work
// console.log(name1); //still "WIZ"

// // reassigning !== mutable
// let str = "abc";
// str += "d"; // str = str + 'd';
// console.log(str); // 'abcd'


//ADVANCED ARRAY METHODS
//PUSH
// let arr = [4, 3, 2];
// console.log(arr, "length:", arr.length);
// let newLength = arr.push('string'); // Push will accept any number of arguments

// console.log(arr, "length:", newLength);


//POP
// console.log(arr);
// let el = arr.pop();
// console.log(el, arr);

let arr = [4, 3, 2];

// //shift
// console.log(arr)
// let unshifted = arr.shift()
// console.log(unshifted, "Old length: ", arr)


// UNSHIFT
newLength = arr.unshift(1);
console.log("New length: :", newLength, arr);


// let firstEle = arr.shift();
// console.log(firstEle, arr);
