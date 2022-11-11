/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {
    //!!START
    return `0b${blob.toString(2)}`;
    //!!END
  }
  // console.log('Decimal to binary:')
// console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')


  /* Base 10 to base 16 */
  function decimalToHexadecimal(blob) {
    //!!START
    return `0x${blob.toString(16)}`;
    //!!END
  }
  // console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

  /* Base 2 to base 10 */
  function binaryToDecimal(blob) {
    //!!START
    return parseInt(blob.substring(2), 2);
    //!!END
  }
  // console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

  /* Base 16 to base 10 */
  function hexadecimalToDecimal(blob) {
    //!!START
    return parseInt(blob, 16);
    //!!END
  }
  // console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351

// SECOND PRACTICE ----------------------------------------------------------------------------------------------

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
    //!!START
    const decimal = parseInt(blob.substring(2), 2);
    return `0x${decimal.toString(16)}`;
    //!!END
  }

  /* Base 16 to base 2 */
  function hexadecimalToBinary(blob) {
    //!!START
    const decimal = parseInt(blob, 16);
    return `0b${decimal.toString(2)}`;
    //!!END
  }

  /* Base 10 to ASCII */
  function decimalToAscii(blob) {
    //!!START
    return String.fromCharCode(blob);
    //!!END
  }

  /* Base 2 to ASCII */
  function binaryToAscii(blob) {
    //!!START
    return String.fromCharCode(blob);
    //!!END
  }

  /* Base 16 to ASCII */
  function hexadecimalToAscii(blob) {
    //!!START
    return String.fromCharCode(blob);
    //!!END
  }

  /* ASCII to base 10 */
  function asciiToDecimal(blob) {
    //!!START
    const charCodes = [];

    for (let i = 0; i < blob.length; i++) {
        charCodes.push(blob.charCodeAt(i));
    }

    return charCodes;
    //!!END
  }
  console.log(asciiToDecimal("ABC"))
