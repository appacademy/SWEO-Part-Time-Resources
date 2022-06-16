console.log("---------------------Base 10: Decimal---------------------")
/*
- We learned to count in a base 10 system. All numbers are based on a 0-9
counting pattern.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9....

- when we get to the last digit, we simply increase the number to the left and
 start over from 0

 */

 console.log("---------------------Base 2: Binary---------------------")
/* 
 - In order to represent characters, each byte value is matched up with a character according to a standard encoding. The most common English standard is ASCII
    

 - Ob11111111: what does this even mean???
    - Ob stands for binary system. Helps us differentiate what the number represents
    - 11111111 are 8 bits grouped together (8 bits = 1 byte)
    - 11111111 also represents the number 255 in decimal value (max for an 8-bit)
    - the decimal number 255 in ASCII represents character 'ÿ' symbol 
        - [scroll to the bottom and find 255](https://www.ascii-code.com/)

 - TLDR: Binary --> Decimal --> ASCII --> our character! is the translation flow from binary to a character

*/

console.log('-----binary to decimal problem 0----')
/*
refresher on strategy to convert binary to decimal:

Formula: Multiply each digit by the number base raised to the nth power, where n
is its position _starting from the right_. Then, add all of the results together.

To convert 0b11001010 to decimal, remember the base is 2:

``` starting from the right
2^0 *0 = 0
2^1* 1 = 2
2^2 *0 = 0
2^3* 1 = 8
2^4 *0 = 0
2^5* 0 = 0
2^6 *1 = 64
2^7* 1 = 128
``` to the left

Add all of those sums together to get 2 + 8 + 64 + 128 = 202

******YOUR TASK: Convert this binary to decimal value! (remember 0b means this represent binary)******

convert this to decimal: 0b11001000
YOUR ANSWER:



*/


console.log('-----binary to decimal to ASCII problem 1----')
/*
-  0b00000000: what does this even mean in ASCII value???
    -//BREAK down your answer here


-  0b01101000 0b01101001: what does this even mean in ASCII value???
    -//BREAK down your answer here

   

*/

