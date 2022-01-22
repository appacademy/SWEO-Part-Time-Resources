/*

317

10^0 * 7 -- 1 * 7 -- 7
10^1 * 1 -- 10 * 1 -- 10
10^2 * 3 -- 100 * 3 -- 300

total === 7 + 10 === 317

*/

/*
0 -- 0
1 -- 1
10 -- 2
11 -- 3
100 -- 4
101 -- 5
110 -- 6
111 -- 7


1110 === 14

2^0 * 0 -- 1 * 0 -- 0
2^1 * 1 -- 2 * 1 -- 2
2^2 * 1 -- 4 * 1 -- 4
2^3 * 1 -- 8 * 1 -- 8

total === 8 + 4 + 2 === 14
*/
// let binary = '0b1111'
// console.log(parseInt(binary.slice(2), 2));

// let num = 14;

// console.log(num.toString(2))


/*
16 total values
0-9, a-f
a-10
b-11
c-12
d-13
e-14
f-15

31  --  1f

16^0 * f(15) -- 1 * 15 -- 15
16^1 * 1 -- 16 * 1 -- 16


total 15 + 16 === 31
*/

// let num = 31;

// console.log(num.toString(16))

let letter = 'a';

let ascii = letter.charCodeAt();
console.log(String.fromCharCode(ascii))
// console.log(ascii);

// console.log(ascii.toString(2));


numberInstance.toString(radix) // converts into a numeric string
parseInt(numericString, radix) //converts numreic string into number
charInstance.charCodeAt() // gives ascii value for given character
String.fromCharCode() // gives a character from the ascii code
