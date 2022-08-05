// let company = {
//   name: "Coffee Co.",
//   product: "coffee",
//   location: "Seattle",
//   ceo: {
//     name: "Jared",
//     age: 34,
//   }
// }

// // let name = company.name;
// // let product = company.product;
// // let location = company.location;

// let location = "Chicago";

// let { product, location: city, name, ceo: { name: ceoName, age } } = company;

// console.log(ceoName, age)

// let arr = [1, 2, 3];

// let [banana, _cat, ant] = [1, 2, 3];

// console.log(banana, ant);

// let mylo = 300;
// let jm = 1001;

// // let temp = mylo;
// // mylo = jm;
// // jm = temp;

// console.log(mylo, jm);
// [mylo, jm] = [jm, mylo];
// console.log(mylo, jm);

// function sum(message, ...nums) {
//   console.log(nums);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     sum += num;
//   }
//   return message + sum;
// }

// console.log(sum("This is the sum: ",1,2,3,4,5));

// Spread Operator

// let biff = {
//   type: "dog",
//   age: 10,
// };

// let buster = { ...biff };
// buster.age = 0;

// console.log(biff, buster); // Two objs with age 0
// console.log(biff === buster);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, "s", ...arr2, 9, 10, 12];
// console.log(arr3)
