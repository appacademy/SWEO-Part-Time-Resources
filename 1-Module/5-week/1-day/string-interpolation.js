// Here we have some variables that will hold a first and last name:
let firstName = "Wes";
let lastName = "Trinh";

console.log("-----Let's see how we might do it with string concatentation first:-----"); 
const greeting = "Hello " + firstName + " " + lastName + "!"
console.log(greeting);

console.log("-----Now, let's do the same thing with string interpolation:-----"); 
const newGreeting = `Hello ${firstName} ${lastName}!`
console.log(newGreeting);
//1) evaluates the javascript expressions inside ${}
//2) convert the value after to the string

console.log("-----Let's see it with a more complicated example:-----"); 
let firstArr = [`Wes`, "Jesse", "Kristen"];
let lastArr = ["Trinh", "Brooks", "Chauncey"];

for(let i=0; i<firstArr.length; i++){
    const sentence = `${firstArr[i]} ${lastArr[i]} is cool!`
    console.log(sentence);
}



console.log("-----What will this output?-----"); 
const num1 = 300;
const num2 = 30;
console.log(`${num1} divided by ${num2} is: ${300 / 30}`);



