console.log("---------------First Class Functions---------------")
// functions are considered first class citizens
// 1) functions declarations can be stored in a variable 
// 2) functions can be returned from another function (will learn soon)
// 3) functions ca be passed to another function (will learn soon)


console.log("---------------Function Expression Syntax---------------")
// here is the first example of functions being able to be stored in a variable

// the first way of defining a function that we learned is function declaration syntax
function helloDeclarationFunc(){
    return "Hello from declaration func";
}

console.log("declaration syntax:", helloDeclarationFunc());

//the second way of defining a function is by the function expression syntax
let helloExpressionFunc = function(){ 
    //we store the function inside of a variable called 'helloExpressionFunc'
    return "Hello from expression func";
}

console.log("expression syntax:", helloExpressionFunc()); // see here, we invoked the variable
console.log("without invoking the func expression variable:", helloExpressionFunc);