//* Errors
  // SyntaxError - thrown when we run code that isn't syntactically correct
  function broken() {
    console.log("I'm Broke")
  }; //extra curly here
  // ReferenceError - thrown when we try to access unavailable variables
  function callPuppy() {
    let puppy = 'puppy';
  }
  // console.log(puppy);
  // TypeError - thrown when an operation cannot be performed because the operand is not the right datatype
  let dog= 'bowser';
  // dog();
  // Looking Up Errors
    // 1. Check the docs
    // 2. Google it
    let x = 123;
    let y = 123;
    x.toExponential(100);
  //* Custom Errors
  // new Error(message, filename, linenumber)
  let first = Error('I am an Error')
  // class PartyError extends Error{}
  // console.log(first);
  function giveMeNumber( num ) {
    if ( typeof num !== 'number') {
      throw new Error('Give me a number')
    } else {
      return 'yay number'
    }
  }
  // console.log( giveMeNumber('') )
  // console.log('Did we get here')
  //* Try...Catch
  // 
  try {
    giveMeNumber('')
  } catch (error) {
    console.log( error.name, error.message);
  }
  console.log('Did we get here')

  function safeDivide(a, b) {
    if (b === 0) {
      throw new Error('cannot divide by zero');
    } else {
      return a/b;
    }
  }

  try {
    safeDivide(3,0);
  } catch (hamsandy) {
    console.log( hamsandy.name, hamsandy.message );
  }
//* Testing Pyramid
  // Why do we Test?
    // To make sure our code works
    // Increase flexibility and reduce fear of code
    // Make collaboration Easier
    // Produces Documentation
  // What do we Test?
    // The Public Interface - the parts of your app that users will have access to
  // Tiers of the Pyramid
    // Bottom Level - Unit Tests - tests the smallest parts in isolation
    // Middle Level - Integration Tests - Make sure the pieces work together
    // End to End Testing (e2e) - tests the entire application
  
//* Test-Driven Development
  // Write our tests before we write code
    // ensures our code works
    // allows easier collaboration
  // Only required code is written
    // YAGNI - You aint gonna need it
  //  Better understanding of what our code should be doing

  // Red Green Refactor
    // Red - Write our test - we want to fail all tests
    // Green - Write our Minumum code to pass specs - passed tests are green
    // Refactor - ensure maintainability and readability
//* Mocha & Chai
  // Mocha is test framework, runs/presents our tests.
  // Chai is assertion library, performs the comparisons

  // npm install mocha and chai
  // we need a folder called 'tests'
  // on a spec.js
    // const {expect} = require('chai');
    // const User = require('../classes/user');

  // https://www.chaijs.com/api/bdd/ :: Link to Chai Docs
  // https://mochajs.org/ :: Link to Mocha Docs
  //* Describe
    describe('User', function() {

    })
  //* It
  let user;
  before(() => {
    user = new User('John Doe')
  })
  describe('User', function() {
    let user = new User('John Doe')
    it('should create a new User instance', () => {
      expect(user).to.exist;
    })
    it('should set username on creation', () => {
      expect(user.username).to.equal('John Doe');
    })
  })
  //* Hooks
    // before, beforeEach, after, afterEach
    // before - runs before all tests
    before(() => {
      let user = new User('John Doe')
    })
    // beforeEach - runs before each 'it'