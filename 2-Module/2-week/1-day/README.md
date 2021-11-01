# M2W2D1

## Assessment

## Context

- [JS Context Learning Objectives]
- [Context]
- [Context in Regular Functions Quiz]

## Discussion - Context

- Context refers to the value of this within a function and this refers to where a function is invoked.

```js
class Dog {
  constructor(name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
  }

  standOrSit() {
    this.isSitting = !this.isSitting;
    return this.isSitting;
  }

  test() {
    debugger;
    return `this is equal to dog: ${this === dog}`;
  }
}

const dog = new Dog('Fido', true);
console.log(dog.standOrSit()); //
console.log(dog.test()); //
const dogTest = dog.test; //
console.log(dogTest()); //
setTimeout(dog.test, 1000); //

function someFunc() {
  console.log(this);
}

someFunc(); //
```

[JS Context Learning Objectives]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/js-context-learning-objectives
[Context]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/context
[Context in Regular Functions Quiz]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-8---tdd/context-in-regular-functions-quiz
