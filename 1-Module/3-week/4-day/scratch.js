// let jm = {
//   name: "JM",
//   age: 300,
//   shirtColor: "Red",
//   hair: "AWESOME",
//   job: {
//     title: "CA",
//     program: "PT",
//   },
// };

// let hair = "brown";

// let { age, hair: bigHair, name, job: { title, program }, job } = jm;

// // let name = 'JM'
// // let age = 300
// // let hair = 'AWESOME'

// console.log(name, age, hair, bigHair, job, title, program);

// let arr = ["a", "b", "c"];

// let [banana, _second, joe] = arr;

// console.log(banana, joe);

// let mylo = 300;
// let jm = 1001;
// console.log(mylo, jm);

// [mylo, jm] = [jm, mylo];

// console.log(mylo, jm);

// Rest Parameter

// function sum(message, ...nums) { 
//   console.log(nums)
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) { 
//     let num = nums[i];
//     sum += num;
//   }
//   return message + sum;
// }

// console.log(sum("This is the sum: ", 5, 6, 7));

// Spread Operator

let biff = {
  type: "dog",
  age: 10,
};

let buster = { ...biff };
console.log(biff, buster);
console.log(biff === buster);
buster.age = 0;
console.log(biff, buster);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3)