# M2W2D1

## Assessment

---

## Context
### Context refers to the value of `this` within a function and `this` refers to where a function is invoked.
- If a function is invoked on the object it was created in, its context stays the same
- If a function (not invoked) is assigned to variable, its context changes
- If a function (not invoked) is passed as a callback, its context changes

```js
class Test {
  testFunc() {
    debugger;
    console.log(this);
    console.log(`this is equal to test1: ${this === test1}`);
  }
}

const test1 = new Test();
// Calling the method on the instance
test1.testFunc(); // 

// Calling the method outside the class
const test1Func = test1.testFunc;
console.log(test1Func, 14);
test1Func(); // 

// Calling the method as a callback
setTimeout(test1.testFunc, 1000); // 
const arr = ["test",  "array"]
arr.map(test1.testFunc) // 

// Using this in Function Declaration Syntax
function someFunc() {
  console.log(this);
}
someFunc(); // 
```