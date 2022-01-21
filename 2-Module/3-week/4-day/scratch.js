// 15

/*
base**positions * value
10**0 * 5  === 1 * 5  === 5
10**1 * 1  === 10 * 1 === 10

total = 5 + 10 === 15

*/


/*
1111 - 15

2**0 * 1 >> 1 * 1 >> 1
2**1 * 1 >> 2 * 1 >> 2
2**2 * 1 >> 4 * 1 >> 4
2**3 * 1 >> 8 * 1 >> 8

total === 1 + 2 + 4 + 8 === 15
*/

// console.log(parseInt('ee', 16))

// let num = 30;
// console.log(num.toString(16));


/*
30 -- 1e

16**0 * 14 -- 1 * 14 -- 14
16**1 * 1 -- 16 -- 16
total 16 + 14 === 30
*/


/*
ee
16^0 * 14 >> 1 * 14  >> 14
16^1 * 14 >> 16 * 14 >> 224
*/


let letter = 'A';

let asciiVal = letter.charCodeAt();
// console.log(asciiVal.toString(2));

console.log(asciiVal);
console.log(String.fromCharCode(asciiVal));


parseInt('string', radix)
stringInstance.charCodeAt()
numberInstance.toString(radix)
String.fromCharCode(asciiCode)
