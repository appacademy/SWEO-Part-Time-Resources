// function foo() {
//   return 2 + bar();
// }

// function bar() {
//   return 6 + baz();
// }

// function baz() {
//   return 3;
// }

// console.log(foo()); // 2 + 6 + 3 === 11


// const iterSum = (n) => {
//   let sum = 0;

//   for(let i = 1; i <= n; i++){
//     sum += i;
//   }

//   return sum;
// }

// console.log(iterSum(5)); // 15;


/*
1. Base Case - When to stop
2. Recursive Case - When to go
3. Recursive Step - Making sure we are moving towards a base case.
*/

const recurSum = (num) => {
  if(num === 1) {
    return 1;
  };
  debugger;
  return num + recurSum(num - 1);
}


console.log(recurSum(5));






/*
f1(1) => 1
f2(2) => 2 + f1?
f3(3) => 3 + f2?
f4(4) => 4 + f3?
f5(5) => 5 + f4?
 */
