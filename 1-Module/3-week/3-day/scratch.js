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