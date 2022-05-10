console.log("----------first class objects---------")
// First Class Function | https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

// 1) functions can be stored in a variable (function expression syntax)
// 2) functions can be passed as arugments to another function (today)
// 3) returned from a function (talk more about this week)

console.log("--------1) functions can be stored in a variable (function expression syntax)--------")

let func1 = function(){
    return "Hello I am a return value from the function expression"
}

console.log("uninvoked func1:", func1);
console.log("invoked funct1:", func1()); //once we invoke it, it's NOT a function anymore (unless we returned a function), but instead it is the return value from that function. (in this case it's a string datatype)

console.log("---------2) functions can be passed as arugments to another function (today)----------");

//higher order function is a function that is hosting or taking in another function (callback) in it's parameter or returning another function (callback);
let higherOrderFunction = function(callback){
    let dataFromCallback = callback(); //higher order func invokes this callback()
    return dataFromCallback; //in the example below: dataFromCallback --> "I am a callback being passed to the higher order function"
}

let callback1 = function(){
    return "I am a callback being passed to the higher order function"
}

console.log("higherOrder cb1:", higherOrderFunction(callback1));

console.log("----------------2.1 array methods taking in callbacks-------------")
let array = [1,2,3];
let arrayFromMap = array.map(function(element){
    return element * 100; //multiply 1, 2, 3 by 100 then adds it to a new array
})

console.log("original array:", array);
console.log("arrayFromMap:", arrayFromMap);


//same as array.map above
let newArr = [];
for(let i=0; i<array.length; i++){
    let element = array[i];
    newArr.push(element * 100);
}
console.log("newArrForLoop:", newArr);