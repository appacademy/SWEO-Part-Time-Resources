# M2W2D2 (2's day)

## Quizzes: 30 mins

- [Bind Quiz]
- [Call and Apply Quiz]
- [Arrow Functions Review and Context Quiz]

## Bind, Call, Apply

```js
class Test {
  testFunc() {
    console.log(this === test1);
  }
}

const test1 = new Test();
/* 
Calling the method outside the class
How can we fix this with bind?
Could we fix this with call or apply?
*/
const test1Func = test1.testFunc;
test1Func(); // true

/* 
Calling the method as a callback
How can we fix this with bind?
Could we fix this with call or apply?
*/

setTimeout(test1.testFunc, 1000); // wait 1 second, true

/* 
Using this in Function Declaration Syntax
Could I make `this` equal to test1 in this function?
*/
function someFunc() {
  console.log(this);
}
someFunc(); // Test {...}
```

[Bind Quiz]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/bind-quiz
[Call and Apply Quiz]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/call-and-apply-quiz
[Arrow Functions Review and Context Quiz]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/arrow-functions-review-and-context-quiz
