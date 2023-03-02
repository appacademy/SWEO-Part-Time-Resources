// Types of errors in Javascript

// the 3 common errors

// Syntax Error
// Is thrown when JS attempts to parse the code that is
// syntatically incorrect

// common causes - missing brackets, parenthesis or mispelled keywords

// function test({

// }

// Reference Error
// represents an error when we reference a non-existent variable

// let name = 'Kate'

// console.log(nam) reference error nam does not exists

// Type Error
// Two common causes
// 1. Operation cannot be performed on the operand

// const str = 'test'
// str() // str is not function

// 2. Attempting to modify a value that cannot be changed

// const str = 'test'
// str = 'test2' // TypeError: Assignment to constant variable.


// Error Handling

// We can create our own custom errors
// We can use javascripts built in errors
// Prevent application from crashing, stopping, breaking down

// keywords
// 'try', 'catch', 'finally'

// 'throw' --> is used for errors

// try is where we put our code to test, essentially and prevent any sort of
// crashes
// protect our application from crashing

// catch
// is where our errors get thrown

// finally
// will always run regardless of what happens

// console.log('WILL THIS RUN?')

// syntax

// try {
// 	const str = 'test'
// 	str = 'test2' // TypeError: Assignment to constant variable.
// 	// console.log(str)
// 	console.log('WILL THIS LINE 66 RUN?')
// }
// // catch(e), catch(err), catch(error)
// catch(e) {
// 	// console.log('OOPS WE BROKE OUR CODE')
// 	console.log('e =====> ', e)
// }
// finally {
// 	console.log('This will always run regardless of what happens')
// }

// [input1, input2, input3, input4, input5]

// [input2] --> breaks, throws an error

// console.log('WILL THIS RUN?')

// class Error
// new Error('message')
// new Error('message', optional('file name', 'line number'))

// function checkIfPasswordsMatch(password, checkPassword){
// 	if(password === checkPassword) console.log('Passwords Match')
// 	else throw new Error('Your fingers have betrayed you')
// }

// try {
// 	checkIfPasswordsMatch(1234, 1234)
// } catch(error) {
// 	console.log(error)
// }


// console.log('will this print out')

// Testing

// Make sure it works!
// keeps our code consistent and helps out other engineers

// Testing Pyramid

// E2E - 'end to end' this tests the entire application
// fromt top to bottom

// Integration testing - tests the interactions between 2 pieces of code
// or multiple pieces of code

// Unit tests - Test one piece of code.
// the backbone of testing

// TDD
// test driven development
// write tests, and then write code to pass those tests

// RED - tests are failing
// GREEN - when test are passing
// Yellow/Refactor - Make it readable, understandabale, optimizing perfomance and
// making it pretty so that its maintainable

