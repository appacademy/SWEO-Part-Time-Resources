//HOISTING FUNCTIONS

//Function DECLARATION hoisting
//Function declarations are hoisted with their names AND their values!
//So we can call the function before it's declared (As long as we're doing it in the same scope)

// hello();

// function hello() {
//     console.log("Howdy Doodle");
// }

//Function EXPRESSION hoisting

hello();

var hello = function() {
    console.log("bing bong")
}

//IF YOU WANT TO KNOW MORE GO TO : a/A Open, Week 5, Saturday : Function hoisting lecture