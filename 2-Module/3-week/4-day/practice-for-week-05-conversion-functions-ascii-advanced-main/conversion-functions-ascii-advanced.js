/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
	const str = blob.toString().slice(2); //
  	const converted = parseInt(str, 2);
  	return `0x${converted.toString(16)}`;
}

// time o(1)
// space o(1)

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
	const str = blob.toString().slice(2); //
	const converted = parseInt(str, 16);
	return `0b${converted.toString(2)}`;
}

/* Base 10 to ASCII */
function decimalToAscii(blob) {
	const str = blob.toString();
	const converted = parseInt(str, 10);
	return String.fromCharCode(converted);
}

// time and space o(1)

/* Base 2 to ASCII */
function binaryToAscii(blob) {
	return String.fromCharCode(blob)

	// return String.fromCharCode(parseInt(blob.toString().slice(2), 2))
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
  // Your code here
  return String.fromCharCode(blob)
}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  // Your code here
//   return blob.split('').map(char => char.charCodeAt());
  // time o(n + n) --> o(n)
  // space o(n + n) --> o(n)

  	return Array.prototype.map.call(blob, (i) => i.charCodeAt(0))
	// return Array.map(blob, (i) => i.charCodeAt(0))
  // time o(n)
  // space o(n)
}

// function asciiToDecimal(blob) {
// 	let newArr = [];
// 	for (let i = 0; i < blob.length; i++) {
// 	  newArr.push(blob.charCodeAt(i));
// 	}
// 	return newArr;
// }

// time o(n)
// space o(n)


// console.log('Binary to hexadecimal:')
// console.log(binaryToHexadecimal('0b1010')) // '0xa'
// console.log(binaryToHexadecimal('0b0011')) // '0x3'
// console.log('')

// console.log('Hexadecimal to binary:')
// console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
// console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
// console.log('')

// console.log('Decimal to ASCII:')
// console.log(decimalToAscii(65))  // 'A'
// console.log(decimalToAscii(97))  // 'a'
// console.log('')

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

// console.log('Hexadecimal to ASCII:')
// console.log(hexadecimalToAscii('0x43'))  // 'C'
// console.log(hexadecimalToAscii('0x63'))  // 'c'
// console.log('')

// console.log('ASCII to decimal:')
// console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
// console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
