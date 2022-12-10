//SEMICOLON CHEAT SHEET
//YOU MUST USE A SEMICOLON WHEN TWO OR MORE STATEMENTS ARE ON THE SAME LINE

//for (let i = 0; i < 10; i++)

//THE SEMICOLON CAN OMITTED IF THE STATEMENTS ARE SEPERATED BY A LINE
/*
let i = 0;
let dog = "haru";
*/

//IF THERE IS ONLY ONE STATEMENT INSIDE A {BLOCK} YOU CAN OMIT THE SEMICOLON (BUT DONT)

/*
function fight() {
    console.log("I will fight you");
}
*/

//DON'T PUT A SEMICOLON AFTER A } CLOSING BRACKET

//FUNCTIONS ARE CONSIDERED FIRST-CLASS OBJECTS IN JAVASCRIPT= YOU CAN ASSIGN IT TO A VARIABLE
//Let's store a function inside of a variable.

/*
let sumVariable = function(a, b) {
    return a + b;
}

console.log(sumVariable(5, 6));
*/

//FUNCTION DECLARATION SYNTAX
// function funcName() {};

//FUNCTION EXPRESSION SYNTAX
//let sum = function() {};

//ANONYMOUS FUNCTIONS have no name & are either assigned to a variable or are called immediately after declaration.

//MUTABILITY - You can change it.  IMMUTABLE- You can not change it.

//Arrays are an example of a mutable object.
//Strings are an example of immutable objects.

/*
let mutableArray = ["denise", "sally", "king", "binx", "addie"];

mutableArray.push("Eris");
let eris = mutableArray.pop();

console.log(eris);
console.log(mutableArray);
*/

//Methods that manipulate string data typically return a NEW string & they don't modify the OG.

/*
let string = "gasoline";

string.toUpperCase();
*/

//NESTED LOOPS

/*
let i = 0;

while (i < 6) {
    console.log(i);
    i++;
}
*/

/*
for (let i = 0; i < 6; i++) {
    console.log(i);
    for (let j = 0; j < 7; j++) {
        console.log("      Nested For Loop: " + j);
    }
}
*/
/*
let arr = [
    [1, 2, 3], 
    [true, false], 
    ["dog", "cat", "fish"]];

for (let i = 0; i < arr.length; i++) {
    console.log(i);
    let subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
        console.log("     Nested loop: " + subArr[j]);
    }
}
*/

/*
let cats = ["denise", "sally", "king", "binx", "addie"];

for (let i = 0; i < cats.length; i++) {
    let cat1 = cats[i];
    for (let j = i + 1; j < cats.length; j++) {
        let cat2 = cats[j];
        console.log(cat1, cat2);
    }
}
*/

/*
let users = ["bill", "caleb", "alex", "kristen", "greg"];

for (let i = 0; i < users.length; i++) {
    let user1 = users[i];
    for (let j = i + 1; j < users.length; j++) {
        let user2 = users[j];
        let newArr = [user1, user2];
        console.log(newArr);
    }
}
*/

/*
let str = "gasoline";

function reverseStr(string) {
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        let letter = string[i];
        reversed += letter;
    }
    return reversed;
}
console.log(reverseStr(str));
*/