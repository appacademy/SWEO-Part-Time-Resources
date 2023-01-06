//SCOPE
//Who has access to variables?

//Three kinds of scope in JavaScript

//Global, Local, Block

//GLOBAL
//The widest scope there is
//Visible to all other inner scopes

//let apple = "fruit";

//Apple is in the global scope as it is NOT inside of a block or a function

//LOCAL SCOPE
//The variables that are only available inside of the given function

//VARIABLES THAT FUNCTIONS HAVE ACCESS TO
// 1. The arguments of the function
// 2. Any local variables that were declared INSIDE of the function
// 3. Any variables that were already declared before the function definition

//this is sitting in the global scope
/*
let myName = "Global";

function func1() {
    let myName = "local to func1";
    console.log("I am " + myName);
}

function func2() {
    let myName = "local to func2";
    console.log("I am " + myName);
}

func1();
func2()
console.log("I am" + myName);
*/

//BLOCK
//Again a block of code is denoted by {}
//Includes IF, Else, if Else conditionals, for loops, and while loops

/*
let dog = "woof";

if(true) {
    let dog = "bowowowow";
    console.log(dog); // bowowowwo is printed
}

console.log(dog); // woof is printed
*/

//Scope Chaining
//INNER scopes have access to all outer scope variables, however outer scopes DO NOT have access to inner
//scope variables

/*
let name = "Alex";

function sayName() {
    let local = "hi";
    console.log("my name is " + name);
}
sayName();
*/

//Scope chaining is refering to when Javascript looks for variable first in the local scope
//and then in each subsequent outer scope. Javascript will STOP looking, once it finds a matching variable

/*
let person = "Jeff";

function sayHi() {
    let person = "Bob Bobert";

    function greet() {
        console.log("Hi " + person);
    }
    greet();
}
sayHi();
*/

//Lexical Scope
//When we run a piece of JS code, we first have to PARSE it. (basically just read it and see whats going on);
//The time in which we are parsing it (reading it) is refered to as LEXING TIME

//Main take away:
//The lexical scope is determined during lexical time. (Basically this just means
// that we can determine the values of variables without running the code);

//VARIABLES IN JAVASCRIPT and their scopes

//VAR - is terrible and we do not like him
//Var is function scoped

//Let and const
//block scoped

//Variables and hoisting
//let and const are not reassignable in the same scope
/*
let apple = "hi";
let apple = "bye";

const pear = "pear";
pear = "orange";
*/

//Var IS reassignable in the same scope: AVOID AT ALL COSTS
/*
var apple = "hi";
var apple = "bye";
*/

//HOISTING
//A mechanism used by JavaScript to move variables and function declaration to the top of their scope
//before execution

//Hoisting works differently depending on whether or not the variable is function or block scoped
//lets look at var first which is function scoped

/*
function test() {
    console.log(hoistedVar); // prints undefined

    var hoistedVar = 10;
}

test();
*/

//This behavior changes a bit for let and const
//let and  const are block scoped

/*
if (true) {
    console.log(str);

    let str = "howdy";
}
*/
//Javascript IS INDEED hoisting the variable to the top, however this time instead of giving it
//the value of undefined, its just going to throw an error and tell us that we can't access it yet

//REASSIGNMENT OF VARIABLES
// We CAN reassign let IF they are in DIFFERENT block scopes
/*
let name = "Alex";

if (true) {
    let name = "bill";
    console.log(name)
}

console.log(name)
*/

//TEMPORAL DEAD ZONE
//The time before let and const is declared but not used 

/*
let str = "apple";

if (true) {
    console.log(str); //Cannot access 'str' before initialization

    let str = "pear";
}
*/

//JavaScript KNOWS that it is going to be initialized and it also knows that you can't use it yet
//because of hoisting

//CLOSURE
//A closure is an inner that function USES or CHANGES a variable or variables from an outer function

/*
function climbTree(treeType) {
    let treeString = "You climbed a ";

    function sayClimbTree() {
        return treeString + treeType;
    }

    //let sayClimbTreeHasNoAccessToMe = "hi";

    return sayClimbTree();
}

console.log(climbTree("aspen"));
*/

//Closure Rules

//Closure have access to any variables inside of it's own scope as well as any variables in any outer functions scope
//when it (closure) is declared

//A closure WILL remember all variables that it has access to even if the outer function returns

//PRIVATE STATE
//It's very important to hide information in software engineering
//In JS there is no way to declare a private variable or function
//So instead we use closures to do so

//EXAMPLE

/*
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

let counter = createCounter();
console.log(counter());
*/

//Create counter is return a function, so if we call createCounter without setting to a variable
//we cannot access the inner function

//Passing Arguments Implicitly
//Using closures we can pass down arguments to helper functions without explicitly passing them
//into the function

/*
function isPalindrome(string) {
    function reverse() {
        return string.split("").reverse().join("");
    }
    return string === reverse()
}
*/