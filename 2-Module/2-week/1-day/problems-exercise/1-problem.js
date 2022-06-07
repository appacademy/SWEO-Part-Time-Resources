// -------Problem 1:

//1) What is the context / the value of `this`
//global object is the context.

//2) what will be the output in the terminal? 
//global object


function firstFunc() {
    console.log(this); //we are essentially doing  console.log(global)
  
}

firstFunc(); // we called this function in the global space so the context becomes the global object (therefore, `this` inside of the firstFunc function, represents the global object)



