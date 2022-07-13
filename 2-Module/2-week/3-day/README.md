# M2W2D3

## Error Handling and TDD

### Error Handling (15m)

When you get an error, we say that an error has been `thrown`. In fact when you create custom errors you will use the `throw` keyword.

The 3 most common types of errors you will see are as follows:

- [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - thrown when JS tries to parse code that doesn't conform to the syntax of the JS language.
- [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  - thrown when a non-existent variable is referenced. (usually when the variable you're trying to use is out of scope or you've typoed it.)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - thrown when an operation cannot be performed because the operand is a value of the wrong type, or when you're attempting to modify a value that cant be changed. (for example if you try to invoke a variable with a string value, you'll get a TypeError because a string's type is not a function.)

You can look up any error on MDN and get a detailed account of why that error will be thrown if you don't understand why it's happening.

### Creating errors

To create a new error, you just create an instance of the Error class that's built into JS.

```js
const err = new Error('I am an error')
```

The Error constructor is unique in that you dont need the `new` keyword, but can use it.

```js
const alsoAnErr = Error('I am also an error')
```

We use the `throw` keyword to make an error happen and stop the execution of our code.

```js
function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Give me a number!");
  } else {
    return "yay number!";
  }
}

console.log(giveMeNumber(1)); // prints "yay number!";
console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
console.log(giveMeNumber(1)); // doesn't get run because execution was stopped.
```

If you don't want to stop the execution of the program, but still want an error to be thrown, you use the `try...catch` block.
One thing to note is that most SyntaxErrors wont be caught using `try...catch`, because those errors happen when the code is compiled (loaded), not when it is running.

```js
try {
  // statements that will be attempted to here
} catch (error) {
  // if an error is thrown it will be "caught"
  // allowing the program to continue execution
  // these statements will be run and the program will continue!
}
```

If you want your program execution to stop if there's an error, then just `throw` one. If you don't want it to block execution, use a `try...catch` block ~

- One final piece of the `try...catch` is the `finally` keyword. This bit of code will always run. No matter what happens. Every. Single. Time.

```js
function trySafeDivide(n) {
    try {
        console.log(safeDivide(30, n));
    } catch (error) {
        console.error(error.name + ": " + error.message); // Error: cannot divide by zero
        return;
    } finally {
        console.log("This will always run");
    }
}
```

## Quizzes and mini project (45m)

- [Error Types Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/error-types-quiz)
- [Error Handling Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/error-handling-quiz)
- [Error Handling Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/practice--error-handling)

### Testing (15m)

The general idea behind testing frameworks is to allow devs to write code that would *specify the behavior of a function or module or class*. We want to be able to run test code against our app code and **have confidence the code will work**.

- Testing allows us to refactor with confidence. If anything breaks, you'll know. Also, you'll know **the expectations** for the module you're refactoring, so if it meets the specs, you're good.
  - If anyone modifies your code in the future, they wont break anything important as long as they are following the test specs.
  - Tests also make collaboration easier. Most things are built by teams of engineers that may not get to talk to each other.
  - If the tests are written well they can serve as documentation for the code as well.

Tests are basically the rules or specifications of how your app should behave.

#### The Testing Pyramid

  <img src='https://i.ibb.co/SXhnxFc/w8d3testingpyramid.png' alt='testing pyramid' width=300 />
  
- Unit Tests
  - The smallest unit of testing
  - used to test the smallest pieces of code to ensure each piece works before you put them together.
  - Each unit test should focus on one thing. (`SRP`)
  - fastest to write and run.

- Integration Tests
  - Tests the interaction between multiple units of code.
  - ensures units you've written work coherently together.

- End-to-End Tests
  - Tests the entire flow of a user's interaction with your app.
  - Closest tests come to testing actual user experience.
  - slowest to write and run.

### TDD

The practice of writing tests before writing code is called Test-driven development or `TDD`.

- Writing tests before coding ensures that the code written *will work*.
  - When making updates or upgrades, ensures you don't **break the code**.
- Only required code will be written.
- Helps enforce Modularity.
- Helps devs to understand the what the code *should be doing*.

#### The Three Steps of TDD

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

```js
const { expect } = require('chai');

const { truthyBunny } = require("../truthyBunny.js");

describe('TruthyBunny Function', () => {
  it('should return true for rabbits', () => {
    let animal = 'rabbit'
    let result = truthyBunny(animal);
    expect(result).to.be.true;
  });

  it ('should return false for ducks', () => {
    let animal = 'duck'
    let result = truthyBunny(animal);
    expect(result).to.be.false;
  }); 
});
```

- `describe` and `it` come from `Mocha`, while `expect` comes from `Chai`.

#### Keeping your test files dry

- We have `Mocha` hooks to help us keep our code dry, even in our tests. A few examples:
  - `before` and `after` hooks are run before and after each test.
  - `beforeEach` and `afterEach` hooks are run before and after each spec.

```js
describe ('User class', function () {

  let user;

  beforeEach(() => {
    user = new User("john_doe");
  });

  it('should create successfully', function () {
    expect(user).to.exist;
  });

  it('should set username on creation', function () {
    expect(user.username).to.equal("john_doe");
  });

});
```

## Testing Quizzes and mini project (60m)

- [Testing Pyramid Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/testing-pyramid-quiz)
- [TDD Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/tdd-quiz)
- [Mocha and Chai Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/mocha-and-chai-quiz)
- [Unit Tests w/ Mocha and Chai Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/practice--units-test-w--mocha-and-chai)

## Long Project (until EOD)

- [TDD Style Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/tdd-style-project--phase-1-2)
  - Please only do phases 1 and 2, we will be continuing the project tomorrow.
