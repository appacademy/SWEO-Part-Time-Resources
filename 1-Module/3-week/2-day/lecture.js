// Arrow functions!

// function declaration:

// function greeting(name){
//     return "Hi there, ".concat(name, "!")
// }

// let greeting = function(name){
//     return "Hi there, ".concat(name, "!")
// }

// let greeting = (name) => {
//     return "Hi there, ".concat(name, "!")
// }

// let greeting = (name, location) => "Hi there, ".concat(name, " from ", location, "!")


// console.log(greeting)
// console.log(greeting("Bill", "Pittsburgh"))

let nums = [1,2,3];
const doubled = [];

// const doubler = (num)=> doubled.push(num * 2)

// nums.forEach(doubler)
nums.forEach(function(num){ 
    doubled.push(num * 2)
})

console.log(doubled)



// greeting = [];
// console.log(greeting)
