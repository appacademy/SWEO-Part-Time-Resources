funtion broken () { // Uncaught SyntaxError: Unexpected identifier
  console.log("I'm broke");
}

function callPuppy() {
  const puppy = "puppy";
  console.log(pupy);
}

callPuppy(); // ReferenceError: pupy is not defined

let dog; // Remember unassigned variables are undefined!

dog(); // TypeError: dog is not a function
