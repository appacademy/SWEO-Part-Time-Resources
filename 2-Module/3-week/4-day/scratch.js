//*Logic and Truth
// && || !
//A && B
//A || B
//!A

//XOR - Exclusively Or
//A^B Only triggers True if only one is true

// A  B  A^B
// 0  1  1
// 1  1  0
// 0  0  0
// 1  0  1

// if ((A && !B) || (!A && B))
//*Bases
// Decimal - Base-10 - 202
// Binary  - Base-2  - 0b10100101
// Hexademical - Base-16 0xC32FA6 -> 0123456789ABCDEF

// Convert into Decimal
// 0b11001010 => 202
// currentBase^position * value = decimal
// 2^0*0 => 0
// 2^1*1 => 2
//0
// 2^3 * 1 = 8
// 0+8+0+0+64+128 => 202
//0xC32FA6
//16^0*6 = 6
//16^1*10 = 160
// Convert into Other Base
// 202 => 0b11001010
// 202/2 = 101 r0 <- RightMost Value
// 101/2 =  50 r1
// 50/2  =  25 r0
//...
// 3/2   =   1 r1 <- LeftMost Value

//Built-in Conversions
let asciiChar = String.fromCharCode(65)
console.log(asciiChar);
let uniCode = asciiChar.charCodeAt(0);
console.log(uniCode);

// parseInt(stringOfNon-Decimal, Base) => convert to decimal number
let newNum = parseInt('c32fa6', 16);
console.log(newNum);
// decimalNumber.toString(Base) => convert to a Base ? String
let binary = newNum.toString(2)
// console.log(binary)
//*Arrays
// An array is a sequence of elements of the same type stored in a contiguous block of memory.
let arr = [255, 256, 43690, 1431655765];
arr.forEach(el => console.log(el.toString(2)))
// request enough memory to store our array
// if approved, a memory address and read/write permission is returned
//* Stacks - last in, first out / first in, last out
class Stack {
  constructor() {
    this.data = [];
  }
  push()
  pop()
  size()
}

let stack = [];

function clickLink(newURL) {
  // Store the current URL, then load the new URL
  browserHistory.push(currentURL);
  currentURL = newURL;
  load(currentURL);
}

function clickBack() {
  // Retrieve the most recently visited page and load it
  currentURL = browserHistory.pop();
  load(currentURL);
}

