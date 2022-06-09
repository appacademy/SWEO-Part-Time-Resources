// 1.

// --------Christopher's Solution-------
// function sum(array) {
//   try {
//     if(!Array.isArray(array)){
//       throw new TypeError("incorrect array input")
//     }
//     else{
//       let sum = 0;
//       for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//       }
//       return sum;
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// }

function sum(array) {
  try {
    // throw new Error("Jack's Error");
    // TRY TO EXECUTE THIS BLOCK OF CODE
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;

  } catch (error) {
    //IF THE ABOVE CODE FAILS, DO NOT DEFAULT TO NORMAL ERROR, HANDLE THAT ERROR HERE INSTEAD!
    //if the error instance is an instance of the TypeError class, then we shall execute the desired message, otherwise, we will log the normal error message
    if(error instanceof TypeError){ 
      console.log("MyTypeError: input for array argument is incorrect")
    }
    else{
      console.error(error.message);
      // throw error; //we throw the error, but what will catch it? The default handler and the default handler will catch this thrown error, and stop the program

    }
  }
}

// console.log("CONTINUE THIS BLOCK OF CODE")

let res = sum();
console.log(res);

// 2.
// tests
sayName("Alex");
sayName(1);

function sayName(name){
  try {
    if(typeof name !== 'string'){
      throw new TypeError("Invalid name! Must be a string!")
    }
    else{
      console.log(name);
    }
  } catch (error) {
    console.error(`Problem 2 Error: ${error.message}`);
  }

}

// 3.
function greet(greeting) {
  try {
    if (!greeting) {
      throw new Error("There was no greeting given.");
    }
  
    console.log(greeting);
  } catch (error) {
    console.error("Problem 3 Error:", error.message);
  }
}

greet("") //falsy value, and so !"" (!greeting) ==> `true` which will execute the if statement above which will throw an error.
