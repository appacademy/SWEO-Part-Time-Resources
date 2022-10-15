//IIFE
// (Immediately Invoked Function Expression)

// (function () {
//     let a = 10
//   console.log("I run immediately");
// })();
//  console.log(a)


// (function (name) {
//   console.log(`Hello, ${name}!`);
// })('Will');

// let test = (function() {
//   const test = "Hello world!";
// 	return test
// })();
// console.log(test)

//-------------------------------------------------------


 let myFunc = function (name){
        let greeting = "Namaste"
        console.log(greeting + ' ' + name);
    }

    myFunc("Will")
    console.log(greeting)

    let greeting = 'Hello';


(function (name) {
   let greeting = 'Namaste';
   console.log(greeting + ' ' + name);
})('Will');

console.log(greeting)
