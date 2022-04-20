// Example:
console.log('hello ' + 'world');  // 'hello world'

// Write 3 more expressions below:
//+ concatenation
let firstName = "Wes";
let lastName = "Trinh";
let fullName = firstName + " " + lastName; // "Wes Trinh"
let introduction = "My full name is: " + fullName
console.log(introduction);

// [] accessing
let firstNameFirstLetter = firstName[0];
console.log("the first letter of my name is:", firstNameFirstLetter);

//.length
let length_of_fullname = fullName.length;
console.log("The length of my full name is:", length_of_fullname);

//.indexof
let index_of_first_name = fullName.indexOf(firstName);
console.log("index of first name:", index_of_first_name)

let index_of_last_name = fullName.indexOf(lastName); //lastName = "Trinh"
console.log("index of last name:", index_of_last_name)

//- 1 since we can't find jesse in wes's name.
let jesseFirst = "Jesse";
console.log(fullName.indexOf(jesseFirst)); //fullName = "Wes Trinh"

// Return undefined and return vs. console.log
function sayHello(name) {
    console.log("Hello " + name);
    // never returned anything, js will implicitly provide a return of undefined
    // return undefined
  }
  
  console.log(sayHello("Brian"));
  