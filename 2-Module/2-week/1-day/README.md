# M2W2D1

# June cohort specifically

We've added some folders to today for the adventure game classes and test files that we were working on throughout saturday and now. These will keep getting filled out as we practice TDD as well

## Assessment

## Context

- [JS Context Learning Objectives]
- [Context]
- [Context in Regular Functions Quiz]

## Discussion - Context

- Context refers to the value of this within a function and this refers to where a function is invoked.

```js
class Test {
  testFunc() {
    debugger;
    console.log(`this is equal to test: ${this === test1}`);

  }
}

const test1 = new Test();
// Calling the method on the instance
test1.testFunc(); //
// Calling the method outside the class
const test1Func = test1.testFunc; //
test1Func(); //
// Calling the method as a callback
setTimeout(test1.testFunc, 1000); //

// Using this in Function Declaration Syntax
function someFunc() {
  console.log(this);
}
someFunc(); //
```

[JS Context Learning Objectives]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/js-context-learning-objectives
[Context]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/context
[Context in Regular Functions Quiz]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/context-in-regular-functions-quiz
