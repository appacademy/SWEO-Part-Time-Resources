// ----------string example-----------
// Example:
console.log('hello ' + 'world');  // 'hello world'

// Write 3 more expressions below:

// +
let firstName = "wes";
let lastName = "trinh";
let fullName = firstName + " " + lastName; //"wes trinh"
console.log("My full name is: " + fullName);

// []
let firstLetter = firstName[0];
console.log("first letter: ", firstLetter);

let lastLetter = fullName[fullName.length - 1] //fullname.length = 9.
console.log("length - 1:", fullName.length - 1);
console.log("last letter of my name:", lastLetter);

// .length extra
console.log("--------extra-------");
// console.log(firstName.length);
//fullName.length === 9;
//firstName.length === 3;
console.log((fullName + firstName).length); // 9 + 3 = 12;


console.log("--------indexOf example-------");
let my_nba_team = "nets";
console.log(my_nba_team.indexOf("warriors")); //-1
console.log(my_nba_team.indexOf("ets")); // 1


// -------------examples of functions----------------
function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
}

console.log(sayHello("world"));


function nets_in_6() {
    return "nets will win in 6";
}
console.log(nets_in_6());

function big_item(item) {
    let msg = "wow! thats a really big " + item + "!";
    return msg;
}
console.log(big_item("party hats"));

function favoriteAnimal(type) {
    let animal = "My favorite animal is: " + type;
    return animal;
}

console.log(favoriteAnimal("cat"));


function myName(firstName, lastName) {

    return 'My name is: ' + firstName + ' ' + lastName;

}

console.log(myName('Mateo', 'Malacara'));

// ------------------------polya's plan-------------------------
function averageOfTwo(num1, num2) {
    //polya's plan
    //understanding the problem
    //input num1 is 3 and input num2 is 7, => average of the total /2 => 5


    //create a plan that resembles the code but in ENGLISH as closely as possible
    //add the two numbers (num1 and num2) together and store it in a variable called total
    //create a variable toDivideBy and store the average which is 2
    //create a variable called result which holds the total divided by the variable toDivideBy
    //return the result after

    //implement the code based on the plan
    // let total = num1 + num2;
    // let toDivideBy = 2;
    // let result = total / toDivideBy;
    // return result;


    //then refactor if needed.
    return (num1 + num2) / 2;
}

console.log(averageOfTwo(3, 7)); // => 5
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75

// ---------------------hello function-------------------
function hello(str) {
    let result = "Hello " + str
    console.log(result);
    //if we don't explicity state a return, by default return will be undefined.
}

console.log(hello("cat")); // prints "Hello, cat"
// hello("Helen"); // prints "Hello, Helen"
// hello("Sting"); // prints "Hello, Sting"

//   --------------------house example-------------------
//is this a function invocation or functon declaration?
function house_blue_print(name_parameter) {
    return name_parameter + "'s" + " house";
}

let minh = house_blue_print("Minh");
console.log(minh);

let amanpreet = house_blue_print("Amanpreet");
console.log(amanpreet);