// funtion broken () { // Uncaught SyntaxError: Unexpected identifier
//     console.log("I'm broke");
//   }

//   function callPuppy() {
//     const puppy = "puppy";
//     console.log(pupy);
//   }

//   callPuppy(); // ReferenceError: pupy is not defined

//   let dog; // Remember unassigned variables are undefined!

//   dog(); // TypeError: dog is not a function


  //ERRORS
  const err = new Error('I am an error')

//   console.log(err)

//   function giveMeNumber(num) {
//     if (typeof num !== "number") {
//       throw new Error("Give me a number!");
//     } else {
//       return "yay number!";
//     }
//   }

//   console.log(giveMeNumber(1)); // prints "yay number!";
//   console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
//   console.log(giveMeNumber(1)); // doesn't get run because execution was stopped.

//TRY CATCH
//   try {
//     // statements that will be attempted to here
//   } catch (error) {
//     // if an error is thrown it will be "caught"
//     // allowing the program to continue execution
//     // these statements will be run and the program will continue!
//   }
// function giveMeNumber(num) {
//        if (typeof num !== "number") {
//            throw new Error("Give me a number!");
//         } else {
//       return "yay number!";
//     }
//   }

//   try{
//       console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
//     } catch (error){
//         console.error(error.name + ": " + error.message)
//         console.log(giveMeNumber(1)); // doesn't get run because execution was stopped.
//     } finally{
//         console.log("This will always run")
//     }
