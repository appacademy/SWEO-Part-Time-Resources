//SCOPE
//Who has access to a variables

//Three types of scope
//Global, local, block

//GLOBAL SCOPE
//Accessable by everything
//let apple = "apple";


//LOCAL SCOPE
//Variable(s) that are only accessible inside a given function

//Variables that functions have access to are:
// 1. The arguments of a function
// 2. Any (local) variables that are declared INSIDE of the function
// 3. Any variables that were already declared BEFORE the function definition

/*
let myName = "global";

function funcy1() {
    let myName = "funcy1";
    console.log("I belong to " + myName);
}

function funcy2() {
    let myName = "funcy2";
    console.log("I belong to " + myName);
}

funcy1();
funcy2();
console.log("I am " + myName);
*/

//BLOCK SCOPE - {};
//Examples of blocks include if, if else, else conditionals, for and while loops

/*
let dog = "woof";

if (true) {
    let dog = "bowowoww";
    console.log(dog);
}

console.log(dog);
*/

//SCOPE CHAINING
//KEY RULE: Inner scopes have access to variables in outer scopes. NOT THE OTHER WAY AROUND
//Scope chaining is when JS first checks the local scope, and then it checks every subsequent outer scope
//to find a variable
//Once it finds the variable its not going to keep looking

/*
let name = "King";

function sayName() {
    let name = "Cedric";

    function greet() {
        console.log("Hi " + name);
    }

    greet()
}

sayName();
*/

//LEXICAL SCOPING
//WHen we run a piece of code it is PARSED BEFORE IT IS RUN
//The parsing time is what we can LEXING TIME

//VARIABLES IN JAVASCRIPT
//let and const are block
//var is function scoped and sometimes its globally scoped

//HOISTING
//A mechanism in which variables and function declarations are moved to the top of their scope
//Var is hoisted differently than let and const

//VAR - var is initialied with undefined

/*
function test() {
    //hoistedVar
    console.log(hoistedVar);

    var hoistedVar = 10;
}

test()
*/

//LET AND CONST

/*
function test() {
    //hoistedVar wont be seen till line 105
    console.log(hoistedVar);

    let hoistedVar = 10;
}

test()
*/

//REDECLARATION
//Var allows for redeclaration

//AVOID AT ALL COST
/*
var apple = "apple";
var apple = "pear";

//You cannot redeclare let or const
let pear = "pear";
let pear = "apple";
*/

//You can redeclare let and const ONLY IF you are doing it in a different scope

/*
let dog = "haru";

function sayDog() {
    let dog = "idk";
    console.log(dog)
}
*/

//TEMPORAL DEAD ZONE
//The time before let and const is initialized but not used is the temporal dead zone
/*
let deadVar = 10;

function test() {
    //deadVar
    console.log(deadVar); //I'm in the temporal dead zone

    let deadVar = "not in the zone";
}
//It's the space between the hoisted variable and the variable initialization

test()
*/

//CLOSURES
//A closure is an inner function that either USES or CHANGES a variable(s) from an outer function

//Closure Rules
// 1. Closures have acces to their own local variables, any variables in the outer scope that were defined
//before the function declaration, and they have access to parameters
// 2. A closure will remember all of the variables from when it was defined, even if the outer function returns

/*
function climbTree(treeType) {
    let treeString = "I climbed a ";

    function sayClimbTree() {
        return treeString + treeType;
    }
    return sayClimbTree();
}

console.log(climbTree("aspen"));
*/

//PRIVATE STATE
//In software engineering it is sometimes important to hide things
//We can't declare a private variable or function, so instead we use closures

/*
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

let counter = createCounter();
let counter2 = createCounter();

*/

//Passing arguments IMPLICITLY

/*
function climbTree(treeType) {
    let treeString = "I climbed a ";

    function sayClimbTree() {
        return treeString + treeType;
    }
    return sayClimbTree();
}

console.log(climbTree("aspen"));
*/

function isPalindrome(string) {
    function reverse() {
        return string.split("").reverse().join("");
    }

    return string === reverse();
}