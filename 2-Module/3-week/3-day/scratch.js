//Logic and Truth Tables

//Syllogistic Logic :
//What truths can we surmise from two or more statements?

// 1. Cats are cute

// 2. King is a cat

//We can assume that King is cute

//Binary - Another word for base 2
//Uses 0's and 1's

//Terms
//Bit - Binary Digit

//Byte - A group of 8 bits
//Kilobyte - thousand bytes
//Megabyte - million bytes

/*
0000 - 0
0001
1001
*/

//Sometimes we denote binary with 0b
//So instead of seeing 1000 we see 0b1000

//ASCII - American Standard Code for Information Interchange
//They decided how we denote characters in binary

//Hexadecimal - Hex - Base-16
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

//Denoted with 0x
// 0x0   0x1  ....   0xA    0xB

//JS Methods to convert to Hex, Binary, and Base 10 and back

//parseInt(numberAS_A_STRING, base);

// console.log(parseInt('1001', 2))
// console.log(parseInt('a1', 16))

//toString(base) can turn a base 10 number into either hex or binary

// let num1 = 23
// let num2 = 161

// console.log(num1.toString(2))
// console.log(num2.toString(16))