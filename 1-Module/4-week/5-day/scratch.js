//REVIEW

//Destructuring

//Array

// INSTEAD OF THIS: let variable = arr[0];

/*
let arr = [10, 20];

let [firstEl, secondEl] = arr;

console.log(firstEl);
*/

//Objects

/*
let cat = { name: "King", age: 12 };

//REGULAR : let { name, age } = cat;

let { name: catName, age: catAge } = cat;

console.log(catName);
*/

//ADVANCED ARRAY METHODS

//ForEach
//Loops through an array and calls a function on each element

/*
let cats = ["King", "Addie", "Denise", "Binx", "Haru", "Val", "Thor"];

function upperCase(str) {
    return console.log(str.toUpperCase());
}

cats.forEach(upperCase);
*/

//Map
//Loops through an array and calls a function on each element, then returns each element
//Then puts them into a new array

/*
let cats = ["King", "Addie", "Denise", "Binx", "Haru", "Val", "Thor"];


let mappedCats = cats.map((el) => {
    return el.toUpperCase();
});



console.log(mappedCats)
*/

//Callbacks


function sum(num1, num2, cb) {
    let sum = num1 + num2;
    return cb(sum);
}

function triple(num) {
    return num * 3;
}

console.log(sum(5, 4, triple));


//Closures
//Is an INNER function that USES or CHANGES variables from an outer function


function climbTree(treeType) {
    let treeString = "I climbed a ";

    function sayString() {


        return treeString + treeType;
    }

    return sayString();
}

console.log(climbTree("aspen"))


//HOISTING - Temporal dead zone

let apple = "apple";

function sayApple() {
    //apple is hoisted here

    let apple = "pear";
}