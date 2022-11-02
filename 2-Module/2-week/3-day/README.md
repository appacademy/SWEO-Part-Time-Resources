# W2D3 (Error Handling and TDD)

## Error Handling

### Error Handling Practices (40m)

- [Error Types Quiz]
- [Error Handling Quiz]
- [Error Handling Practice]

### Error Handling Discussion

- Purpose of Error Handling

```js
const add = (num1, num2) => num1 + num2;
add("banana", "orange");
```

```js
const add = (num1, num) => {
  try {
    return num1 + num2;
  } catch (e) {
    console.error(e.message);
  }
};
add("banana", "orange");
```

- Practice Walkthrough

### TDD (1h)

### TDD Practices

- [Testing Pyramid Quiz]
- [TDD Quiz]
- [Mocha and Chai Quiz]
- [Unit Tests with Mocha and Chai Practice]

### TDD Discussion

Testing Pyramid

![testing_pyramid](./testing_pyramid.png)

- Unit Tests: Smallest unit of testing. Focuses on individual functions or tasks
  individually.
- Integration Tests: Testing how separate pieces of code work with one another.
- End-to-End Tests: Tests the whole application, high level functionality, close
  to the user experience.

TDD Process

![tdd](./tdd.png)

- Red: Write tests, watch them fail
- Green: Write code, just enough to pass the previously written tests.
- Refactor: Write more tests, watch them fail, pass the tests. The loop of
  easily maintainable, fully tested, clean code.

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
    - 3 A's
      - Assemble
      - Act
      - Assert
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
  - `before` and `after` hooks are run before and after each group of tests (`describe` blocks).
  - `beforeEach` and `afterEach` hooks are run before and after each spec (`it` blocks).

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


Practice Walkthrough

[error types quiz]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/error-types-quiz
[error handling quiz]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/error-handling-quiz
[error handling practice]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/practice--error-handling
[testing pyramid quiz]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/testing-pyramid-quiz
[tdd quiz]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/tdd-quiz
[mocha and chai quiz]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/mocha-and-chai-quiz
[unit tests with mocha and chai practice]: https://open.appacademy.io/learn/part-time-canonical/week-8---context-and-tdd/practice--units-test-w--mocha-and-chai
