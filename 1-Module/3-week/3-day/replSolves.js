console.log("****************************************")
console.log("**        POJO BASICS PRACTICE        **")
console.log("****************************************")
/*
Declare Keys/Values
Given the following declaration of an object, obj below, declare values so
that the print statements output what is expected. Try using both dot and 
bracket notation.
*/
console.log(
    "----------------- Declare Keys/Values -----------------"
);

const obj = { firstKey: "firstValue" };

// Write your code here.
obj["numeric"] = 2;
obj.boolean = false;
obj.object = {};


console.log(obj['firstKey']);       // firstValue
console.log(obj['numeric']);        // 2
console.log(obj['boolean']);        // false
console.log(obj['object']);         // {}

/*
Delete Keys/Values
Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.
*/
console.log(
    "----------------- Delete Keys/Values -----------------"
);
const obj2 = {
    first: "1"
}

// Write your solution here.
// Do deletion here
delete obj2.first;
console.log(obj2);               // {}

/*
Using Variables as keys
Write a function that accepts an object, obj, and a string, str and prints
the value from the object at the key str.
*/
console.log(
    "----------------- Using Variables as Keys -----------------"
);
const obj3 = {
    first: "1",
    second: 2,
    third: "three"
}

const str = "first";

const variableAsKey = (obj, str) => {
    // Write your code here.
    console.log(obj[str]);
}

variableAsKey(obj3, str);                // "1" (looks like 1 in terminal)
variableAsKey(obj3, "second");

/*
Dot vs Bracket Notation
Given the object below, print out the values corresponding to each key
individually. Try using both dot and bracket notation where they're appropriate.
*/
console.log(
    "----------------- Dot vs Bracket Notation -----------------"
);

const obj4 = {
    "first key": "1",
    second: 2,
    "third_key": "three"
}

// Write your solution here.

let one = "first key"
console.log(obj4[one])
console.log(obj4.second)
console.log(obj4["third_key"])

/*
Cat Builder
Write a function catBuilder(name, color, toys) that returns a cat object 
object with the corresponding properties.
*/
console.log(
    "----------------- Cat Builder -----------------"
);

function catBuilder(name, color, toys) {
    // your code here...
    return { name, color, toys }
}

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
  // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

/*
Array of Objects
In this practice, you will practice navigating objects that are nested within
an array. Given the below array, write a function printNames that prints the
name of every object in the array.
*/

console.log(
    "----------------- Array of Objects -----------------"
);

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

const printNames = users => {
    // Write your solution here.
  let names = [];
  for (let i = 0; i < users.length; i++){
  	// console.log(users[i].name)
    let currentUser = users[i];
    // console.log(currentUser.name);
    names.push(currentUser.name);
  }
  console.log(names.join(" "));
}

printNames(users)                   // Gerald Winnie Peter

console.log("****************************************")
console.log("**      POJO ITERATION PRACTICE       **")
console.log("****************************************")

/*
Iterate Through Obj
Write a function printObject(obj) that prints out all key-value pairs of an 
object. The format should be key - value. 

HINT: use a for loop
*/

console.log(
    "----------------- Iterate Through Obj -----------------"
);

function printObject(obj) {
    // your code here...
    for (const key in obj){
        const value = obj[key];
        console.log(key, "-", value)
    }
  }
  
  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };
  
  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120

  /*
Using Object.keys I
Given the object below, use Object.keys() to iterate through the object and
print all its values.
  */

console.log(
    "----------------- Using Object.keys I -----------------"
);

const obj5 = {
    first: "1",
    second: 2,
    third: "three"
}

// Write your solution here.

let keys = Object.keys(obj5)
for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    console.log(obj5[key])
}

/*
Using Object.keys II
Given the object below, use Object.keys() to iterate through the object and
print the value if there are 3 or more "e"s shared between the key and value.
*/

console.log(
    "----------------- Using Object.keys II -----------------"
);

const obj6 = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

let myKeys = Object.keys(obj6);

for (let i = 0; i < myKeys.length; i++){
    let key = myKeys[i];
    let val = obj6[key]
    let eCount = 0;
    for (let char of key){
        if (char === "e") eCount++;
    }
    for (let char of val){
        if (char === "e") eCount++;
    }
    if (eCount >= 3) console.log(val)
}

/*
Using Object.values
Write a function that accepts and object, obj, and uses Object.values to print
all values in the object.
*/

console.log(
    "----------------- Using Object.values -----------------"
);

const obj7 = {
    first: "1",
    second: 2,
    third: "three"
}


const printValues = obj => {
    // Write your solution here.
    let vals = Object.values(obj)
    for (let i = 0; i < vals.length; i++){
        // console.log(vals[i]);
        let value = vals[i];
        console.log(value);
    }
}

printValues(obj7);       // "1", 2, "three" (not apparent in terminal, but the 1would be a string)

/*
Using Object.entries
Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of 
the owners whose names are strictly longer than 5 characters and who own a 
"Honda".

Note: Use Object.entries to make your life easier!
*/

console.log(
    "----------------- Using Object.entries -----------------"
);
const obj8 = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {
    // Write your solution here.
    let entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++){
        let entry = entries[i];
        console.log("entry:",entry)
        let name = entry[0];
        let car = entry[1];
        if (car === "Honda" && name.length > 5) console.log(name)
    }
}

printOwners(obj8);               // Bradley
/*
Writing Object Methods
Given an object, obj, declare a method, printValues on obj that prints all 
unique values within the object.
 */

console.log(
    "----------------- Writing Object Methods -----------------"
);


const obj9 = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

// Write your solution here.
obj.printUniqueValues = () => {
    let values = Object.values(obj9);
    let unique = [];
    for (let value of values){
        if (!unique.includes(value)) unique.push(value)
    }
    for (let ele of unique) console.log(ele)
}
obj9.printUniqueValues();   

