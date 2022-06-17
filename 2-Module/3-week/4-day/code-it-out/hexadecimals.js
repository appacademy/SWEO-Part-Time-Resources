console.log("------------Hexadecimal Refresher----------")
/*
Hexadecimal: Base 16

- dec is 10, hex is 6,
    dec: 0 - 9
    hex: A (10), B(11), C(12), D(13), E(14), F(15)

- prepended w/ 0x (like 0b for binary) to differentiate them as base 16
    0xF00D
    0xFF77

- same as base 10 or base 2, but going up to 16, once we hit 16, we just carry over to the left and reset everything to its right back to 0

Take the hex number 0xF23C. What is the decimal value?

16^0 * C =    1 * 12 = 12
16^1 * 3 =   16 *  3 = 48
16^2 * 2 =  256 *  2 = 512
16^3 * F = 4096 * 15 = 61440

61440 + 512 + 48 + 12 = 62,012

*/

console.log("------------Covert Hexadecimal to Decimal Value----------")
//manually do it by hand first! 
const myHex = '0x1F4AF';
// 16^0 = 1; 1 * 15(f) = 15;
// 16^1 = 16; 16 * 10(A) = 160; 
// 16^2 = 256; 256 * 4 =  1024;
// 16^3 = 4096; 4096 * 15(f) = 61440; 
// 16^4 = 65536; 65536 * 1 = 65536;

//128175

//try putting the decimal value into the search bar here: https://unicode-table.com/en/



console.log("------------Hex to Binary----------")
/*
Hexadecimal is often used as shorthand for representing binary values:
    - As one hex digit represents 4 bits!
    - two hex digit makes 8 bits!
        - 2 hexadecimal: 16^2 === 256 possibilities
        - 8 bits: 2^8 === 256 possibilities
    - three hex digit makes 12 bits!
    - four hex digits makes 16 bits

dec- binary - hex
 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF

- We can break binary down to 4 bits each and easily convert it to hexadecimal using the table above!


1010 1010 – > from binary to hex – > A A – > hex to decimal – > (16^1 * 10) + (16^0 * 10)
*/
console.log("-------------convert binary to hexadecimal then to decimal-------------")
// YOUR TASK: 
// Using table above, convert thisbinary to hex, then convert it to decimal (calculators are allowed)

// Binary : 1111 0000 0000 1101
// Hex    : f    0    0    d
// decimal: 61453