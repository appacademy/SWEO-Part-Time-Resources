// -------Problem 1:

//1) What is the context / the value of `this`
//it's the global object

//2) what will be the output in the terminal? 
//the global object

function firstFunc() {
    console.log(this);
}

firstFunc(); //where is this function being executed? Executed under the global object. The global object then becomes the context for `this`


