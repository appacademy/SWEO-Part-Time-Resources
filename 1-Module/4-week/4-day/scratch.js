//Hoisting, lexical scope/lexing time, temporal dead zone

//Lexing time
// Is the time in which JS does a first run through of the code and parses it
// JS determines the scope of variables and functions during this time

//Hoisting - During lexing time JS takes all variables and functions and hoists them
//           to the top of their respective scopes before execution

//Let, var and const declared variable ALL GET HOISTED

//When JS hoists VAR declared variables, it brings the declaration up to the top of its scope
// gives it a value of undefined

//LET AND CONST are also hoisted, however they are not given a value of undefined
// Instead when you try to access them you get an error

//Functions are also hoisted, however, JS hoists the entire thing to the top of its scope


// The lines of  code (the area) in between the hoisted variable and its actually definition
// is referred to as the temporal dead zone

test()

function test() {
    //var fruit = undefined;
    console.log(fruit)


    var fruit = 'apple'
}

function test2() {
    console.log(apple)


    let apple = 'apple';
}


fruit2()


let fruit2 = function() {
    console.log("hi")
}
