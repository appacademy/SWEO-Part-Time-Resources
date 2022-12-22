//Iterating through objects

//For in loop
//We use for in loops to loop through an object and grab the keys, then we can use those keys to grab the value

//SYNTAX

//for (let key in objectName) {}
//For in loops ALWAYS grab the KEY in each iteration

/*
let cat = {
    name: "King",
    age: 12,
    color: "black"
};

for (let currentKey in cat) {
    let value = currentKey;
    console.log("Current value is: " + value);
}
*/

//METHODS VS FUNCTIONS
//A method is a function that ONLY exists inside of an object

/*
let cat = {
    name: "King",
    age: 12,
    color: "black",
    meow: function() {
        console.log("meowwww");
    }
};

//In order to invoke, or call, the method we need to specify which object the method belongs to

cat.meow()
*/

//Object methods - (remember array methods? i.e push)

//Object.keys()
//It takes an object as an argument and returns an array of keys within that object
//Very useful for when we need to iterate

/*
let cat = {
    name: "King",
    age: 12,
    color: "black",
    meow: function() {
        console.log("meowwww");
    }
};

let arrOfKeys = Object.keys(cat);

for (let i = 0; i < arrOfKeys.length; i++) {
    console.log(arrOfKeys[i]);
}
*/

//Object.values()
//Accepts an object as an argument and return an array filled with values

/*
let cat = {
    name: "King",
    age: 12,
    color: "black",
    meow: function() {
        console.log("meowwww");
    }
};

console.log(Object.values(cat));
*/

//Object.entries()
//Takes an object as an argument and returns a NESTED array of key: value pairs
/*

let cat = {
    name: "King",
    age: 12,
    color: "black",
    meow: function() {
        console.log("meowwww");
    }
};

console.log(Object.entries(cat));
*/

//CATBUILDER
/*
function catBuilder(name, color, toys) {
    let catObj = { 
        "name": name, 
        "color": color, 
        "toys": toys 
    }
    return catObj
}

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
*/


//ArrayOfObjects

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

function printNames(array) {
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
        console.log(obj.name)
    }
}

printNames(users);
*/

//Rest & Spread Operator - ...
//Javascript will take more or less arguments than specified without complaining.
//We can take advantage of this by using rest and spread operators

//REST
//ALWAYS USED IN PARAMETERS