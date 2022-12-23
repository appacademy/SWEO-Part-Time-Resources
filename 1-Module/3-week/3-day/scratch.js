//CAT BUILDER
/*
function catBuilder(name, color, toys) {
    return {
        name,
        color,
        toys
    }
}

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
*/

//ARRAY OF OBJECTS
/*
const users = [
    {
        name: "Gerald",
        age: 23,
        height: 68
    },
    {
        name: "Winnie",
        age: 35,
        height: 62
    },
    {
        name: "Peter",
        age: 61,
        height: 72
    }
]

function printNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        console.log(obj.name);
    }
}

printNames(users);

const printNames2 = arr => {
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        console.log(obj.name);
    }
}
*/

//Iterating through an object
//FOR IN LOOP
//We use for in loops to loop through objects and grab the keys
//    -When we loop through arrays we use the INDEX to access the value of an individual element
//      -When we loop through objects we use the KEY to access the value

//SYNTAX
//for (let key in objectName) {}

/*
let cat = { 
    name: "King", 
    age: 12,
    fluffy: false
}

for (let currentKey in cat) {
    console.log(cat[currentKey]);
}
*/

//METHODS VS FUNCTIONS
//A function that only exists (or is a property) in an object.
//In order to to invoke (call) a method we need to specify which object it lives in

/*
let cat = { 
    name: "King", 
    age: 12,
    fluffy: false,
    meow: () => {
        console.log("meowwww");
    }
}

cat.meow();
*/

//Object methods

//Object.keys()
//Takes an object as an argument and returns an array filled with keys

/*
let cat = { 
    name: "King", 
    age: 12,
    fluffy: false,
    meow: () => {
        console.log("meowwww");
    }
}

let catKeysArr = Object.keys(cat);

for (let i = 0; i < catKeysArr.length; i++) {
    console.log(catKeysArr[i])
}
*/

//Object.values()
//accepts an object as an argument and returns an array of values

/*
let cat = { 
    name: "King", 
    age: 12,
    fluffy: false,
    meow: () => {
        console.log("meowwww");
    }
}

console.log(Object.values(cat));
*/

//Object.entries();
//accepts an object as an argument and return an NESTED Array filled with key: value pairs

/*
let cat = { 
    name: "King", 
    age: 12,
    fluffy: false,
    meow: () => {
        console.log("meowwww");
    }
}

console.log(Object.entries(cat));
*/