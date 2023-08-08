/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {
	const str = blob.toString(); // time o(1), space o(1)
	const converted = parseInt(str, 10); // time o(1), space o(1)
	return `0b${converted.toString(2)}`; // time o(1), space o(1)
	// return `0b${blob.toString(2)}`
}

// time and space o(1)

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {
 	return `0x${blob.toString(16)}`
}

/* Base 2 to base 10 */
function binaryToDecimal(blob) {

	return parseInt(blob.substring(2), 2).toString()
}

// time and space o(1)

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {
  return parseInt(blob.toString(16))
}

function hexadecimalToDecimal(blob) {
	const convertBlobToStringRemovingFirstTwoCharacters = blob.toString().slice(2);
	const convertedStringToBase16 = parseInt(convertBlobToStringRemovingFirstTwoCharacters, 16);
	return convertedStringToBase16;
}

// space and time o(1)

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
