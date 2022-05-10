console.log("----------first class objects---------")
// First Class Function | https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

//1) can be assigned to a variable (function expression syntax)
//2) can be passed in to a function as an argument
//3) can be returned from a function (we'll learn later this week)

console.log("----------1) can be assigned to a variable---------")
let func1 = function(){
    return "hello world, this is from the function expression syntax";
}
console.log("uninvoked func1:", func1) //reference to the function if i do not invoke it
console.log("invoke func1:", func1()) //it's NOT a function after we invoke (), because now we get the value from the return of the function


console.log("----------2) can be passed in to a function as an argument---------")
//the function that is hosting or taking in the callback function is called the 'higher order' function
let higherOrderFunction = function(callback){
    let dataFromCallback = callback();
    return dataFromCallback; //get whatever return value was in callback() after invoked
}

let callback1 = function(){
    return "I'm a callback being passed from another function";
}
let callback2 = function(){
    return "I'm a ANOTHER callback2 being passed from another function";
}

console.log("higherOrder callback1:", higherOrderFunction(callback1))

// console.log("INCORRECT since it's invoked:", higherOrderFunction(callback1())) //this will cause an error because when we invoke callback1 with () we don't get a function anymore, it's just the return value of that function.

console.log("higherOrder callback2:", higherOrderFunction(callback2))


console.log("----------2.1) can be passed in to a function as an argument pt.2---------")
let multiple100Cb = function(element){
    return element * 100;
}

let array = [1,2,3];

let newResArr = array.map(multiple100Cb) //array.map returns a new array with the updated elements and we store it in newResArr variable.

console.log("our result array:", newResArr)