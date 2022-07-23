// ! Binary Practice Walkthrough
let b10;
let binary;
let hex;

// ------------------------------------------------//
//Binary to base 10 (use parseInt and pass the base 2 as second arg for binary)
binary = '1010'

b10 = parseInt(binary, 2) // 10
// console.log(b10);

// ------------------------------------------------//
// Binary to hexadecimal (need to change to decimal first, then change dec to hex)
// first change binary to base 10
binary = '1010'

b10 = parseInt(binary, 2);

// then change base10 to hex (use toString to convert!)
hex = b10.toString(16); // a
// console.log(hex);

// ------------------------------------------------//
// Hexadecimal to base 10//  (use parseInt, don't have to pass the base if it's a hex)
hex = '0xa1' // 161

b10 = parseInt(hex);
// console.log(b10);

// ------------------------------------------------//
// Hexadecimal to binary
hex = 0xff

// first hex to base10
b10 = parseInt(hex);
// console.log(b10);

//then b10 to binary // '11111111' 
binary = b10.toString(2);
// console.log(binary)

// ------------------------------------------------//
// Base 10 to binary // 0b1000
b10 = 8
binary = b10.toString(2);
// console.log(binary);

// ------------------------------------------------//
// Base 10 to hexadecimal // 0x08
b10 = 8
hex = b10.toString(16);
// console.log(hex);


// ------------------------------------------------//
// Base 10 to ASCII // A and a
b10 = 65;
let ascii = String.fromCharCode(b10);
// console.log(ascii)
b10 = 97;
ascii = String.fromCharCode(b10);
// console.log(ascii)

// ------------------------------------------------//
// Hexadecimal to ASCII 
hex = '0x41'

b10 = parseInt(hex);
ascii = String.fromCharCode(b10);
// console.log(ascii)

// ------------------------------------------------//
// Binary to ASCII
// first binary to base 10
binary = '01000001';
b10 = parseInt(binary, 2);

//then base 10 to ASCII
let ASCII = String.fromCharCode(b10)
console.log(ASCII)


// If we want an ASCII return we use String.fromCharCode(decimalNum)
// if we want a decimal (base 10) return we use parseInt(num, base)
// if we want a binary (base 2) return we use toString(2);
// if we want a hex (base 16) return we use toString(16);
