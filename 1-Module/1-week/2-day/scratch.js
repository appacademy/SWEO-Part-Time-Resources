/* EAST */
/* 
Numbers 
Javascript ignores types of numbers a  number is just a number
+ addition operator
* multiplication operator
- subtraction operator
/ division operator
** power operator



% modulo operator
    -- divide 2 numbers and give the remainder


NaN = not a number
*/

// console.log(7 % 2); // 1
// console.log(22 % 2); // 0
// console.log(2 % 22); // 2
// console.log(-7 * 2); // -14
// console.log((2 + 5) * 2) // 14
// console.log('james' / 14)


// Not operator or ! 
// console.log(true)
// console.log(!true)

// And operator && 

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && false) // false

// Or operator ||

// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || false) // false


// console.log(!(true || true)) // (!true && !true) false
// console.log(!(true && true)) //  (!true || !true)
// console.log(!(true && false)) //  (!true || !false)

// Single = sign is an assignment operator 
// Double == is loose comparison operaton 
// Triple == is Strict comparison or checks if it deeply equals
// Not Strictly equals !== compares that something is not equal to
// Not Loosely equals != compares that something is not loosely equal

// console.log(james = 'james') // prints string of james
// console.log(true == 1) // true
// console.log(false === false) // true 

// console.log('42' == 42) // true // do't use double == 99.99% of the time
// console.log('42' === 42) // false
// console.log(false == false) // true


// console.log(42 > 12) // true
// console.log(11 < 88) // true
// console.log(10 <= 10) // true
// console.log(1 < -100) // false
// console.log(Infinity > -Infinity) // true

// console.log("100" != 100) // false
// console.log("100" !== 100) // true

// Variable declaration

// let x = 7
// x++  // this is the same thing as saying x += 1
// x - 2
// x *= 3 
// console.log(x)


// NOTE variable++ reassigns the variable to one more than variable
// NOTE variable-- reassigns the variable to one less than variable

// ** does not reassign variable **= does reassign variable 

// let num = 12

// num++ // 13
// num ** 2 // 26
// // num /= 3 // 8.66


// console.log(num)

let num = 12

num++ // 13
// num /= 3 // 8.66
num = num % 12


console.log(num)

// let num1 = 10 // num1 = 10
// num1++ // num1 = 11
// let num2 = ++num1 + ++num1 // num 1 = 12 + num1 = 13

// console.log(num2)




/* WEST */
 

/* 
Numbers 
    JavaScript doesnt care about types of numbers 
    a number is just a number





*/

// console.log(12)
// console.log(-12)
// console.log('-12')

//Arithmetic operators
// Addition operator -- + 
// Subtraction operator -- -
// Multiplication operator -- *
// division opperator /
// power of operator -- ** 

// console.log(6 + 7) // 13
// console.log(6 - 7) // -1
// console.log(6 * 7) // 42
// console.log(49 / 7) // 7
// console.log(7 ** 2) // 49
// console.log((32 - 14) * 10) // 180

// console.log(49 % 7) // 0
// console.log(2 % 12) // 2
// console.log(7 % 3) // 1


// console.log('james' / 2) // NaN


// Not Operator !
// console.log(!true) // false
// console.log(!!true) // true

// And Operator && 

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false

// De Morgans Law
// console.log(!(true && true)) // false !true || ! true 
// console.log(!(true && false)) // true !true || !false

// Or Operator || 

// console.log(true || false) // true 
// console.log(false || false) // false 

// console.log(!(true || true)) // false !true && !true
// console.log(!(true || false)) // false !true && !false


// comparison operators with greater and less than -- <, >, <=, >=
// console.log(2 > 6) // false
// console.log(4 < 18) // true
// console.log(10 <= 10) // true
// console.log(10 <= -Infinity) // false 
// console.log(Infinity < -Infinity) // false

// Single = -- assignment opperator assigns a value 
// Double == -- loosely equals 99.99% of the time you will NEVER use this
// Triple === -- Strictly equals 

// console.log('42' == 42) // true
// console.log('42' === 42) // false
// console.log(42 !== '42') // true
// console.log(42 != '42') // false // DONT DO THIS 



//Vaariable Declaration 
// let strawberry
// console.log(strawberry) 
// strawberry = 'tasty fruit'
// console.log(strawberry) 

// Variable Init
// let strawberry = 'tasty fruit'
// console.log(strawberry) 

// let num = 100
// console.log(num)
// // num = num + 1
// // num += 1
// // num *= 10
// // num /= 10
// num /= 25
// console.log(num) // 4

let num1 = 10
let num2 = num1 + 1
num2 = ++num1  // reassigns num2 at the same time as reassigning num1 where if you did num2 = num1++ only num1 gets reassigned to the extra ++ 
console.log(num1, num2)





