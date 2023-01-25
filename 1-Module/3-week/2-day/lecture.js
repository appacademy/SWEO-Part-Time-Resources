// Arrow functions!

// function declaration
// function greeter(name){
//     return "Hi there, " + name + "!";
// }
// function expression syntax
// let greeter = function(name){
//     return "Hi there, " + name + "!";
// }
// arrow syntax
// let greeter = (name, location) => "Hi there, ".concat(name, " from ", location, "!");


// console.log(greeter("Bill", "Pittsburgh"));

// greeter = [];

// console.log(greeter)

let nums = [1,2,3];
// let doubled = [];
// nums.forEach((ele)=>{
//     // console.log(ele,"----",i,"----",array)
//     doubled.push(ele * 2)
// })
// let doubled = nums.map(ele => ele *2)
let doubler = (ele, i, arr, _this) => {
    // console logs >> dev process
    return ele *2
}
let doubled = nums.map(doubler)
console.log(doubled)

// console.log(ele => ele *2)