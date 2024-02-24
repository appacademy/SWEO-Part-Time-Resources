//IIFE's - Immediately Invoked Function Expression
//  Defines an anonymous function and immediately calls that function

/* 

(function () {
    statement;
})();

*/

let funcBoi = (function(name) {
    console.log("IMMEDIATELY INVOKED", name)
    return "Howdy"
})("Johnny");

console.log(funcBoi);
console.log(funcBoi);