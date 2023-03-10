/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {
	let binary = blob.toString(2)
	return `0b${binary}`
	// return `0b${blob.toString(2)}`
	// return '0b' + blob.toString(2)
}

// let str = ''
// str = 'I love javascript'
// space o(1)

/* for(let i = 0; i < arr.length; i++){
	str += arr[i]
} */
// space o(1)

// space o(1)
// time o(1)

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {
	return "0x" + blob.toString(16);
}

// space o(1)
// time o(1)

/* Base 2 to base 10 */
// function binaryToDecimal(blob) {
// 	// return Number.parseInt(blob.slice(2), 2);

// 	// return Number.prototype.parseInt.call(blob.slice(2), 2)
// 	return parseInt(blob.slice(2), 2);
// }

// time o(1)
// space o(1)

function binaryToDecimal(blob) {
	const toDec = blob.replace('0b', "") // time o(n)
	const result = parseInt(toDec, 2)

	return result
}

// time o(n)
// space o(1)


/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {
	let removed0x = blob.slice(2)
  	let base10 = parseInt(removed0x, 16)
  	return base10
}

// time o(1)
// space o(1)

// console.log('Decimal to binary:')
// console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')

// console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

// console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

// console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351


module.exports = {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
}
