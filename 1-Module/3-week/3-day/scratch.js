//Implicit Returns

// let sum = (num1, num2) => {
//     return num1 + num2;
// }

// //If an arrow function only has one expression then we can use an implicit return

// let sum1 = (num1, num2) => num1 + num2;

// console.log(sum1(4, 5))

//TERNARY OPERATORS
//Shorthand for an if else statement & you CANNOT have any ELSE IF statements
// you can only have one IF and one ELSE

// let color = "blue";

// if (color === "blue") {
//     console.log("Yay blue")
// } else {
//     console.log(color + " is not blue")
// }



// //TERNARY VERSION
// color === "blue" ? console.log("TERNARY Yay blue") : console.log(color + " is not blue TERNARY")

let cat = {
    name: "King",
    age: 14
}

//When using bracket and dot notation, bracket notation can be given a variable to KEY
// in to an object, but dot notation cannot

function objExample(obj, keyName) {
    console.log(obj[keyName])
    //          cat["name"]

    console.log(obj.keyName)
    //          cat["keyName"]
}

objExample(cat, "name")