console.log("-----------Original Function Expression------------");
let nameExpression = function(name){
    return "My name is " + name;
}

console.log(nameExpression("Lebron James")) // --> "My name is Lebron James"



console.log("-----------Arrow Multi Line------------");
// write a function `multiLineName` using the fat arrow syntax
// function should take in `name` as a parameter
// and then EXPLICITLY returns "My name is `name`"

//variable multiLineName that holds an anonymous arrow function!
const multiLineName = (name) => {
    return "My name is " + name;
}

console.log(multiLineName("Steph Curry")) // --> "My name is Steph Curry"


console.log("-----------Arrow Single Line------------");
// Create a `singleLineName` function that is the same as the above function
// but it IMPLICITLY returns "My name is `name`"

const singleLineName = name => "My name is " + name;


console.log(singleLineName("Kawhi Leonard")) // --> "My name is Kawhi Leonard"