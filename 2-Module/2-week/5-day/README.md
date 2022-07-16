# M2W2D5

## Review

### Context

The keyword `this` exists in every function and evaluates to the object that is currently invoking that function. (if there is no obvious object, it defaults to the global object.) This is why the value of `this` relies entirely on **where** the function is invoked.

- The context of a function is the value of `this` in that function.
- if using *method-style* invocation, the context is the object that is invoking the method.
- Incorrectly passing context is an inherent problem with **callbacks** because the context of a callback is the object that is invoking the callback.

### Changing the context of a function

We learned 3 methods to guarantee the context of a function. The first is to `bind` the function to an object. The second is to use the `apply` method. The third is to use the `call` method.

- Bind: `bind` is a method on functions that allows you to specify the context of a function.
  - **Does not** invoke the function, returns a new function with it's `this` bound. (exotic function).

  ```js
  function sayHello() {
    return `Hello ${this.name}`;
  }
  let sayHelloContext = sayHello.bind({name: "John"});
  console.log(sayHelloContext()); // Hello John
  ```

- Call: `call` is a method on functions that immediately invokes the function and sets the context of the function to the object passed in.
  - **Does** invoke the function, returns the result of the function.
  - the first argument is the `context` of the function, any additional arguments are **comma separated arguments** to be passed to the function `call` is being invoked on.

  ```js
  function sayHello(timeOfDay) {
    return `Hello ${this.name}, it's a fine ${timeOfDay}`;
  }
  let sayHelloContext = sayHello.call({name: "John"}, "afternoon");
  console.log(sayHelloContext); // Hello John, it's a fine afternoon
  ```

- Apply: `apply` is exactly the same as call, except that the second argument is an **array of arguments** to be passed to the function.

  ```js
  function sayHello(timeOfDay) {
    return `Hello ${this.name}, it's a fine ${timeOfDay}`;
  }
  let sayHelloContext = sayHello.apply({name: "John"}, ["afternoon"]);
  console.log(sayHelloContext); // Hello John, it's a fine afternoon
  ```

### Fat Arrow Functions

Arrow Functions are a more concise way of declaring functions. They were introduced in ES6 (ES2015).

- Remove the need for the `function` keyword.
- All arrow functions are **anonymous**. (but we set them to a variable for future use.)
- If there is only a single parameter, you can omit the `()` around the parameter declaration.
- If there is only a single expression, you can omit the `return` keyword and the `{}` around the expression. (this is known as an *implicit return*.)
- `context` works differently in arrow funcs. The value of `this` is determined by **where the function is declared**, not where the function is invoked.
- *You should not use arrow functions to create methods on objects*. (very memory intensive, because it will create a new function in memory for each instance of the object.)

  ```js
  class Dog {
    constructor(name) {
      this.name = name;
      this.sound = 'woof';
    }

    speak = () => {
      return `${this.name} says '${this.sound}'`
    }
  }

  let fido = new Dog("Fido");
  let fidoSpeak = fido.speak;
  console.log(fidoSpeak()); // Fido says 'woof'
  // the context is not lost.
  ```

### Error Handling

The Error constructor function is what is used to create new errors. It is unique in that you don't have to use the `new` keyword to create a new error, however you can and it will still work.

- When throwing an error in your functions, you can use the `throw` keyword.
  - `throw` will stop your programs execution if the function call that throws the error is not in a try/catch block.

  ```js
  function throwError() {
    throw new Error("This is an error");
  }
  try { 
    throwError();
  } catch (error) {
    console.error(error); // will not stop program execution because the error is caught. It will still be logged. console.log would work too, but console.error makes your errors more noticeable.
  }

  // dont forget about the `finally` block which can be added after the catch, it will always run whether or not an error is thrown.
  ```

- Remember that try/catch blocks slow down your programs execution. Use them sparingly, but when needed.

### Testing

Reasons for testing

- To make sure that your code is working as intended.
- Allows you to refactor with confidence.
- To ensure that update and upgrades don't break the code.
- Makes collaboration easier.
- Produce documentation for your code.

#### The testing Pyramid

<img src='https://i.ibb.co/SXhnxFc/w8d3testingpyramid.png' alt='testing pyramid' width=300 />

- Unit tests are the base, they are the smallest unit of testing and are used to ensure each piece works before you put them together for the next step. Fastest to write and run.
- Integration tests are used to ensure that the pieces of your code work together.
- End-to-End tests are used to test the entire flow of your app, it's the closest you'll get to testing actual user exeperience. Slowest to write and run.

### TDD

- The practice of writing tests before writing code is called Test-driven development or `TDD`.
  - When making updates or upgrades, ensures you don't **break the code**.
  - Only required code will be written
  - Helps enforce Modularity.
  - Helps devs to understand what the code *should be doing*.

#### Three Steps to TDD

<img src='https://i.ibb.co/r6zzTCS/w9d3-Steps-Of-Tdd.png' alt='Three Steps of TDD' width=300 />

- Red
  - Write a test.
  - Make sure the test fails properly
  - Important to guarantee no false positives.
- Green
  - Write the minimum amount of code to pass the tests.
- Refactor
  - refactor the code you just wrote to make sure it's `DRY` and following `SRP`.

### Unit Testing with Mocha and Chai

- `Mocha` is a testing framework that specializes in *running* tests and presenting them in an orgainzed and user friendly way.

- `Chai` is an assertion library that performs actual test comparisons.

`Mocha` expects all specs to be in a directory called `test`.

Steps:

- Create test folder with spec.js files.
- import `Chai` and the module you'll be testing
- setup a test for the basic functionality of your code.
  - `describe` block
    - is a group of tests.
  - `it` block
    - tests a single spec.
  - `expect` is an assertion that defines what we *expect* to happen.
- `describe` and `it` come from `Mocha`, while `expect` comes from `Chai`.

#### Keeping your test files dry

- We have `Mocha` hooks to help us keep our code dry, even in our tests. A few examples:
  - `before` and `after` hooks are run before and after each describe block.
  - `beforeEach` and `afterEach` hooks are run before and after each it block.

## Practice Assessment (until lunch)

## Lunch

## Practice Assessment Walkthru (1h)

## Projects (until EOD)

If you'd rather redo the practice assessment, you can. These projects are solo projects, however I highly encourage you to work on them with classmates so you can discuss as you go.

- [Adventure TDD Challenge](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/learning-boost-instructions)
- [Bejeweled Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/bejeweled-project)
