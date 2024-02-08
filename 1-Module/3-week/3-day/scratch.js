//Implicit returns

//Arrow function 

// let sum = (num1, num2) => {
//     return num1 + num2;
// }

// //If there is only one statement inside of the function, we can do an implicit return

// let implicitReturnSum = (num1, num2) => num1 + num2;

// let booleanFunction = (num1, num2) => num1 > num2;

// console.log(implicitReturnSum(5, 8))

//Ternary Operator
// a shorthand for if else conditionals
//Only if you are using one statement and there are no else ifs


// let color = "pink";

// if (color === "blue") {
//     console.log("Yay, blue")
// } else {
//     console.log(color + " is not blue")
// }

// color === "blue" ? console.log("Yay, blue") : console.log(color + " is not blue")

// function dogFunc(dog) {
//     return dog === "cute" ? "awesome its a cute dog" : "not cute dog"
// }

// console.log(dogFunc("banana"))


//Using variables to access values within objects

let cat = {
    name: "King",
    age: 14
}

function objectExample(obj, keyName) {

    console.log(obj[keyName])
    
}

objectExample(cat, "age")