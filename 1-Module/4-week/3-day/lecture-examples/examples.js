console.log("-------------What is scope?-------------")

let getAverage = function (...argsArr) {
    let total = 0;
    for (let i = 0; i < argsArr.length; i++) {
        let arg = argsArr[i];
        total += arg;
    }
    //what variables or functions are available for this line of code? (can be called)
    console.log("total:", total); //yes
    // console.log("i:", i); //no we cannot access this from here
    console.log("getAverage:", getAverage)

    return total / argsArr.length;
}
// console.log(getAverage(10,20,30)); // 60 / 3 --> 20
// console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20


console.log("-------------3 different Scopes-------------")
//start here






let globalScope = 'I am globally scoped'
//from line 22 to 30 is included in the global scope

let myFunction = function (functionScope) {
    //whatever is in this function is now in the function scope
    let alsoFunctionScope = "I am also function scoped"

    //this block if(true) is in the above function's scope, but it also HAS ITS OWN SCOPE.
    if (true) {
        let blockScope = 'I am block scoped'
        // console.log(alsoFunctionScope);
    };
};

myFunction("I am function scoped");

//1) to locate where the variable is (which line)
//2) which scope does this line belong to (what is it under)

let car = "vroom"; //car belongs to the global scope
function makeSounds(dogSound) {
    let cow = "moo";
    //what scope does cow belong to? cow belongs to the makeSounds function scope.

    if (true) {
        let turkey = "gobble";

        for (let i = 0; i < 2; i++) {
            let helloWorld = "helloWorld" //block scope
            console.log(car, dogSound, cow, turkey, i);
        }
        //if block scope cannot access for (let...) scope.
        // console.log(helloWorld); //will not work!
    }
    // console.log(car, dogSound, cow, turkey, i);//won't work!
}
makeSounds("woof");


console.log("-------------Hoisting Function Example-------------")
console.log(regFuncDeclaration());

//this function declaration belongs to the global scope (b/c we declared in the global scope) 
//so before execution, regFuncDeclaration will be hoisted to the "top" of the scope that it belongs to. 
function regFuncDeclaration(){
    return "regular function declaration";
}

// however this does not work with function express syntax or other variables declared with let, const, or var. 
// console.log(exprFuncSyntax()); //this will not work, need to define the function inside the let expr.. first before we can call it.

let exprFuncSyntax = function(){
    return "function expression syntax";
}
console.log(exprFuncSyntax()) //this will be fine


console.log("-------------Let vs. Const vs. Var-------------")
let helloWorld = function(){
    if(true){
        console.log("inside block scope:", blockStr);
        // let blockStr = "apple"; //what will happen? --> result in an error!
        
        var blockStr = "not apple"; //hoisted to its function scope, however will be initially set to undefined.
        
    }
    console.log("inside function scope:", blockStr); //this will print  "not apple" because when execute the code, var is hoisted and then assigned "not apple". 
    //this is bad practice because it exposes our 'protected' variable in the block scope and makes it not secure.
}

helloWorld();


// const vs. let
// let counter = 0;
let counter = 0;
//const counter = 0;
counter = counter + 1; //we are reassigning counter with the original counter + 1
console.log("counter: " + counter) // will counter get updated to be 1 with 'const' declaration?
//const will STOP you from reassignment and give you an error.
//const protects your variable from being REASSIGNED

//when do we use const?
//-we will use const all the time now
//-we only change const to let when we need to reassign the variable
//-we will never use var.

//functions can be stored in variables and funcExpression is a const variable declaration.
const funcExpression = function(){
    return "this is a const declaration for the function expression syntax"
    
}
console.log(funcExpression())
funcExpression = function(){
    return "newer function";
}
console.log(funcExpression())