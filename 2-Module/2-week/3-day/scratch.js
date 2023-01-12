//* Errors
  // SyntaxError - When you try to run code that isn't syntactically correct
  function broken() {
    console.log('Im Broke')
  };
  // ReferenceError - When you attempt to reference a variable that doesn't exist
  function callPuppy() {
    const puppy = 'puppy';
  }
  // console.log(puppy);
  // TypeError - When an operation can't be performed when the operand is a value of the wrong type or attempting to modify a const
  let dog;
  // dog();
  const cat = 'whiskers';
  // cat = 'mittens';

  let x = 123.00;
  let y = 99;
  x.toExponential(y);
  // Look up toExponential on MDN
  // Look up RangeError on google

  // class RangeError extends Error{...}
  let LectureError = new Error('This is a test Error');
  // console.log(LectureError);
  function giveMeNumbers( num ) {
    if ( typeof num !== 'number' ) {
      throw new Error('Give me a number!');
    } else {
      return 'yay number!';
    }
  }
// try {
//   console.log(giveMeNumbers(9))
// } catch (hamsandwich) {
//   console.log(`${hamsandwich.name}: ${hamsandwich.message}`);
// } finally {
//   console.log('This will always run');
// }
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  } else {
    return a / b;
  }
}
function trySafeDivide(n) {
  try {
    console.log( safeDivide(30, n))
  } catch (error) {
    console.log(`${error.name}: ${error.message}`)
    return;
  }
}
trySafeDivide(0)
//* Testing Pyramid
  // Why Do we Write Tests?
    // To make sure Tests
    // Increase Flexibility and Reduce fear of the code
    // Make Collaboration Easier
    // Produces Documentation
  // What Do we Write Tests For?
    // The Public Interface
  //* Test Driven Development - Write tests before writing any actual code
    // Ensures that our written code works
    // Only necessary code is written
    // YAGNI - You ain't gonna need it
    // Enforces Modularity

    // Testing Pyramid
      // Unit Tests - At Bottom -> tests the smallest pieces of your app in isoloation
      // Integration Tests - Middle => tests that check everything works well together
      // End-to-End Test (e2e) - Top => tests the entire application

    // How to TDD
      // Red - writing our tests, they should all fail
      // Green - write the minimum amount of code to pass
      // Refactor - refactor our code
//* Mocha & Chai
  // mocha - test framework, specializes in runnings tests and presenting the results
  // chai - assertion library, the one doing the actual testings

  // 1. npm install mocha and chai
  // 2. test folder - holds our test specs
  // 3. inside a spec file
    // const {expect} = require('chai');
      // import the files we want to test
    // const Calculator = require('../classes/calculator')

    // https://www.chaijs.com/api/bdd/ :: Link to Chai Docs
  describe ('Calculator', function () {
    it('should be able to make a calculator instance', function () {
      expect(calculator).to.exist;
    });
    it('', function() {
      // ...
    })
  })
  //* Hooks
  // before, beforeEach, after, afterEach
    // before
    /*
      before(() => {
      calculator = new Calculator();
    })
    */ 
    // beforeEach
    /*
      beforeEach(() => {
        calculator.total = 10;
      })
    */