//*Logic and Truth
  //&&
  //||
  //!
  //^ -> XOR -> Exclusively Or

  // A B A^B
  // 0 1  1
  // 0 0  0
  // 1 1  0
  // 1 0  1
  // if ((!A && B) || (A && !B)) {}
//*Bases
  // Decimal - Base 10, 0-9
  // Binary  - Base  2, 0-1 -> 0b
  // Hexadecimal - Base 16, 0-16 -> 0-9,A-F -> 0x

  // Other Bases into Decimal
  // 0b01001011
  // 2^0 * 1 = 1
  // 2^1 * 1 = 2
  // 0
  // 2^3 * 1 =  8
  // 0
  // 0
  // 2^6 * 1 = 64
  // 0 
  // 1+2+8+64 = 75

  //Decimal to Other Bases
  // decimal/base = number + remainder
  // number/base  = ''
  // 14 => 0xE
  // 14/16 = 0 r14
  // 326 => 0x146
  // 326/16 = 20 r6 <RightMost Val
  //  20/16 =  1 r4
  //   1/16 =  0 r1 <LeftMost Val

  // ASCII - Tables have computer-speak for a character
//Built-in Conversions
  let character = String.fromCharCode(65);
  console.log(character);
  console.log( character.charCodeAt(0) );
  // rgb(0,0,255) => #0000ff
  console.log(parseInt('a1', 16))
  console.log(parseInt('01001010', 2))

  let color = 156
  console.log(color.toString(16));
//*Arrays
  // A sequence of elements of the same type stored in a contiguous block of memory.
  let arr = [255,256,43690,1431655765];
  // arr has 4 32bit integers
  // Makes a request to the OS for 16bytes of space
    //if the request can be satisfied, the OS returns a memory address and read/write privelages
  //the values of the array are converted into binary and stored at those addresses
//* Stacks - last in, first out / first in, last out
class Stack{
  constructor() {
    this.data = [];
  }
  push()
  pop();
  size();
}

let stack = [];
stack.push()
stack.pop()
stack.length;

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