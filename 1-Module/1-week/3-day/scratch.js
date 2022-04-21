

// ---------------strings------------
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

//------------function declaration (blueprint)+ invocation (houses)--------------
// Function declaration / definition
function house_blue_print(name_parameter) {
    return name_parameter + "'s" + " house";
}

// Function invocation, re-using the function declaration 3x

//john's house; 'john' is the argument being passed inside (), when invoked
let johns_house = house_blue_print('john')
console.log(johns_house) // => john's house

//wes's house
let wess_house = house_blue_print('wes')
console.log(wess_house) // => wes's house

//johnny's house
let johnnys_house = house_blue_print('johnny')
console.log(johnnys_house) //=> johnny's house


//------------function return statment & undefined------------
// Return undefined and return vs. console.log
function sayHello(name) {
    console.log("Hello " + name);
    // never returned anything, js will implicitly provide a return of undefined
    // return undefined
}

console.log(sayHello("Brian"));


//   ---------------adding code after return statement--------------
function isCool(string) {
    let string_being_passed = string;
    let coolSentence = string_being_passed + " is cool!"

    // return coolSentence
    return undefined
    //anything after the return statement will not be executed when invoking the function, because return will break early and provide the result for the function
    console.log(coolSentence)
    console.log("Hey Ray");
}

// Call the above function passing in the below arguments:
console.log(isCool("Wes"));


// -------------------POLYA's PLAN------------
//plan is better than the code
function averageOfTwo(num1, num2) {
    //understand the problem --> see inputs and outputs if question doesn't make sense
        //see that 3 + 7 is 10 and then 10 / 2 will tield is 5.
    //write a plan - in english as closely as you can, resemble to code 
        //first add the numbers together and store it in a variable called total
          //total = first num + second num
        //we know the average is always static, will be always 2, variable average = 2
            //avg = 2
        //we want to take the total divide it by the averge and the store it a variable called result.
            //result = total / 2
        //return result
            //return result
            
    //execution - write the code from the plan
    // let total = num1 + num2;
    // let average = 2;
    // let result = total / 2;
    // return result;
    
    //refactor, see if we can improve, etc.
    return (num1 + num2) / 2;
  }
  
  console.log(averageOfTwo(3, 7)); // => 5
  console.log(averageOfTwo(16, 5)); // => 10.5
  console.log(averageOfTwo(2, 7.5)); // => 4.75