// if we don't manually handle the error (try /catch) that is being thrown, javascript will have a catch handler under the hood that will handle that thrown error for us. 

//If we let javascript handle the default error that is thrown, then it will crash our program and not continue after.

//in a lot of cases (like in bigger applications) we want control of our code, so we want to manually handle our errors if they come up. (in the case, we can use the try/catch)

// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
  //if the code above fails, implicitly throw an error based on the issue that we encounter.
} catch (error) {
  //here we catch the error above. `error` that is being passed to catch represents the object instance of the type of error class that is being thrown (instance of the TypeError class)

  if(error instanceof TypeError){
    console.error(`problem 1 myTypeError: ${error.message}`) //the error instance has a property of .message
    // console.log()
  }
  // else if(error instanceof ReferenceError){

  // }
  else{
    //Error
    console.error(error.message);
  }
  
}

console.log("--------CONTINUE CODE BLOCK HERE EVEN AFTER ERROR--------")


// 2.
// tests
sayName("Alex");
sayName(1);
function sayName(name){
  try {
    //try to execute this piece of code, if it THROWS an error (anything causes an error), have my buddy `catch` over there, handle that error.
    if(typeof name === 'string'){
      console.log(name);
    }
    else{
      throw new TypeError("problem 2 myTypeError: Invalid name! Must be a string!") //since we are throwing the error, if we don't have a manual 'try' & 'catch' block, javascript will handle this in its default catch 
    }
    
  } catch (error) {
    console.error(error.message); //"problem 2 myTypeError: Invalid name! Must be a string!"
  }
 
}

console.log("--------CONTINUE CODE BLOCK HERE EVEN AFTER ERROR--------")

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given."); //instantiate the Error class w. the `new` keyword to create an Error instance. Then we THROW that error instance. Now something has to catch that error instance (instance === object)
  }

  console.log(greeting);
}

//find an input, that when greet(takesInput) it will throw us the error above.
//we need to invoke greet w/ a falsey value.
try {
  greet(false);
} catch (error) {
  //error.message = "There was no greeting given."
  console.error(`problem 3 Error: hello world! - ${error.message}`)
}

console.log("--------CONTINUE CODE BLOCK HERE EVEN AFTER ERROR--------")