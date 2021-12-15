// function foo() {
//   debugger;
//   return 2 + bar();
// }

// function bar() {
//   debugger;
//   return 6 + baz();
// }

// function baz() {
//   debugger;
//   return 3;
// }

// console.log(foo());


// const recurSum = (num) => {
//   console.log(num);
//   if(num === 1){
//     return 1;
//   }

//   return num + recurSum(num - 1);
// }

// console.log(recurSum(5));

/*
1. Base Case: When do I stop recursing
2. Recursive Case: When do I recurse
3. Recursive Step: How do move towards the Base Case

BC: num === 1

f5(1) -> 1
f4(2) -> 2 + f5(num - 1) //1
f3(3) -> 3 + f4(num - 1) //3
f2(4) -> 4 + f3(num - 1) //6
f1(5) -> 5 + f2(num - 1) //10
*/

// function exponent(num, power) {
//   if (power < 0) {
//       return (1 / exponent(num, Math.abs(power)));
//   }

//   if (power === 1) {
//       return num
//   }

//   return num * exponent(num, power - 1);
// }

// console.log(exponent(5,5));

// do this for warmup problem
