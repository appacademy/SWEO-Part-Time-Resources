/* EAST */


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