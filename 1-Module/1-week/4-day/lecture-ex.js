//----------------------understanding truthy and falsy----------------------
// console.log(300 === 300);

// if(300 === 300){
// 	console.log("300!!!!"); //this will print because the expression (300 === 300) will evaluate to true
// }

// console.log(300 === true);
// if(300 === true){
// 	console.log("TRUELY 300!!");
// }

// if([]){
// 	console.log("EMPTY ARRAY");
// }

//[] --> under the truthy umbrella
// true --> under the truthy umbrella
// console.log([] === true); //even though both under truthy, they are not equal to each other.


// if (false === false) {  //false === false --> true --> true is TRUTHY
//     console.log("IS THIS TRULY FALSE?");
// }

// if (0) { //0 fallse under the falsy umbrella!
//     console.log("first index is always 0");
// }

// if (0 === 0) { // 0 === 0 --> true --> true is truthy
//     console.log("0___0");
// }

// console.log(0 === false); //0 is not strictly equal to false

// if (true) { 
//     if (true === 'true'){ //expression of true === 'true' --> false --> false is a falsy value
//         console.log("trueception");
//     }
// }

// ------------------------------arrays---------------------
// let arr2 = ["zero", false, "Let's go Nets", undefined, [1,2,3]];

// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log("value at index 4:", arr2[4]);
// console.log(arr2[4][1]);

// console.log(arr2.length);
// console.log(arr2.indexOf(false));
// console.log(arr2.indexOf("dogs"));

// -----------------concat example-------------------

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];


// let goodCombine = array1.concat(array2 ,array3, 10)

// console.log(goodCombine) 

// ------------------concat doesn't mutate original array--------------------
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];


array1 = array1.concat(array2 ,array3, 10)

// console.log(goodCombine) 
console.log(array1);