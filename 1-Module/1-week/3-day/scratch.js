/* EAST */
<<<<<<< HEAD


/* WEST */

// console.log('james thompson')
// console.log("this is also a string")
// console.log('that\'s my boat')
// console.log("that's my boat")

// Length - property (a part of a data type that isnt a function)
// let someString = 'Some string with a length that i dont know'
// console.log(someString.length) // prints exactly how long a string is


//Indexing
// let string = 'string'
// // s - 0 t - 1 r - 2 i - 3 n - 4 g - 5 g is also string[string.length - 1]

// console.log(someString[someString.length - 1]) // prints last character
// console.log(someString[5]) // prints s character at index 5 
// console.log('somestring\'s \b') // escape character \ will escape whatever is right after it


// indexOf - method (a part of a data type that is a function)
  // console.log(someString.indexOf('a')) // returns first index where given character is found 
  // console.log(someString[17])
  // console.log(someString.indexOf('a', 18))
  // console.log(someString.substring(5, 11))

  // console.log(someString.indexOf('a', someString.indexOf('a', 1)+1)) // find the next occurence of a string 



// Concat - join

// let str1 = 'this is my first string'
// let str2 = 'and this is my second string'

// // str1 = str1 + str2 
// // str1 += str2 
// str1 = str1.concat(' ',  str2)

// console.log(str1) // 

// Functions 

function aName(optionalParameters){
  // do something inside the function
  // usually we will give a a return value 
} // NOTE a function will always evaluate to its return value 

// function two(){
//   console.log(2)
// } // return value of a function is undefined by default if we do not specify the return value 

// function two(){
//   console.log(2)
//   return 'this is the return value of two'
//   console.log('this is after the return') // this will never be hit because we return before it
// }

=======
// console.log("this is a string")
// console.log('this is also a string single quotes')

// console.log('that\'s my boat')


// Length - property (a part of a data type that isn't a function)
// let myString = 'this is a super long string with gibberish at the end ajksdfhgaksdjghaoljashdfkljahsdfklasjdhf'

// console.log(myString[myString.length - 1]) // this is to get last character of a string 
// console.log(myString[-1]) // no negative indexing in JS this undefined

// Indexing
let newString = 'james thompson'
// console.log(newString.substring(0, 5))
// strings are zero index meaning start at 0 instead of 1 
// j - 0 a - 1 m - 2 e - 3 s - 4 etc....
// console.log(newString.indexOf('t')) // use indexOf to find the index and then log the actual character
// console.log(newString[6])
// console.log(newString[newString.length - 1]) // this is to get last character of a string 


// indexOf - method (a part of a data type that is a function)
// let game = "Dota 2 is cool, dude";
// console.log(game.indexOf(','))

// Concat - join
// let color = 'red'
// let fruit = ' cherry'
// // color += fruit 
// color.concat(fruit)
// console.log(color) 



// Functions!
function aName(optionalParameter) {
  // we do something and make something happen
  // after we do something we usually have a return value not always, but usually 
} // A FUNCTION EVALUATES TO ITS RETURN VALUE 

// // declare a function called two that console.logs the number two
// function two(){
//   console.log(2)
//   return 'this is the return value'
// }

// //Invoking functions
// two()
// console.log(two())
// declare a function called divide that intakes two numbers and returns the first
// number divided by the second number
// function divide(num1, num2){
//   console.log(num1 * num2 + 100)
//   let result =  num1 / num2
//   return result
// }

// function divide (num1, num2, num3) {
//   console.log(num1 * num2 + 100)
//   let result =  num1 / num2
//   return result / num3
// }

// console.log(divide(81, 9))
// console.log(divide(1777, 64))
// console.log(divide(819, 11, 1))

/*
write a function called average takes in 3 parameters which are numbers and returns the average of the 3 numbers

understand the problem 
  function name average
  takes 3 params
  return the average of 3 nums

come up with a plan 
  write function
  add all 3 numbers up and save in a variable
  save another variable that divides the addition by 3 
  return average variable

carry out that plan 

refactor 



*/

// function average(num1, num2, num3){
//   // let sum = num1 + num2 + num3
//   return (num1 + num2 + num3) / 3
// }

// console.log(average(3, 5, 70))
// console.log(average(100, 200, 300))
// console.log(average(14, 999, 100000999988))

/* WEST */
>>>>>>> 2022-Jul-E


// let result = two() // same thing as saying result = 'this is the return value of two'
// console.log(two())
// console.log(two())
// console.log(two())
// console.log(two())
// console.log(two())
// console.log(two())
// console.log(two())
// result()
// console.log(two()) // if you do not console log your function it will not print the return value 

// console.log(two('some string')) // doesnt matter that we give it an argument 


// function adder(num1, num2, num3){
//   console.log(num1)
//   return num1 + num2 + num3 
// }

// console.log(adder(10,12,10))



// function something(){
//   let someVar = 'some string ';
// }

// write a function average that takes in 3 numbers as a parameters and returns the average of those 3 numbers

// Understand the problem
  // write function average
  // takes 3 params
  // returns average of 3 nums

// Make a plan
  // declare function average
  // give 3 parameters
  // find the sum of those 3 nums and save to variable
  // divide that sum by 3 and save to variable
  // return the division variable 


// Carry out the plan


// Look back and improve your solution

function average(num1, num2, num3){
  return (num1 + num2 + num3) / 3
}


console.log(average(10, 20, 30999))