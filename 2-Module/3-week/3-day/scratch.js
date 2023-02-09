//Syllogistic Logic
//What truths can be surmised by two or more premises

//Cats are cute

//King is a cat

//We can infer that King is cute from these two statements

//Terms
//Bit - binary digit
//Byte - group of 8 bits
//Kilobyte - thousand bits
//Megabyte - milli bits

//Counting in binary
//Binary is base 2 (2 didgits) as opposed to base 10 (10 digits aka 0-9)
/*
0000 - 0
0001 - 1
0010 - 2
0011 - 3
0100 - 4
0101 - 5
0110 - 6
0111 - 7
1000 - 8
1001 - 9
1010 - 10
1011 - 11
1100 - 12
1101 - 13

10111 - 23

When we go to increment in binary we always start on the right side
If the number is 0 then we increment by 1, but if it is 1 we set it to 0 and try to increment the next one to its left

To avoid confusion we sometimes denote binary numbers using 0b in front of them
Example:  13  -   0b1101

*/

//Hexadecimal - base-16
//The digits for hex are 0-9 and then the following digits are A, B, C, D, E, & F

//We denote hex with 0x
//Example  - 5   -   0x5     or 10  -  0xA

//Binary characters
//We decided the binary representation of letters using ASCII
//ASCII - American Standard Code for Information Interchange

//Javsacript conversion methods
//There are several we can use to convert binary, each one has a specific use case

//Convert binary and hex into base 10 and back we can use parseInt()

// console.log(parseInt('1101', 2))
// console.log(parseInt('a1', 16))

//The toString() method can be used to convert base 10 into binary and hex

let num = 161;

console.log(num.toString(16))