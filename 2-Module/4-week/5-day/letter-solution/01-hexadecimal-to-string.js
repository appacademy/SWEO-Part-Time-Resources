/******************************************************
Convert a Hexadecimal array of numbers into decimal values. The decimal values
should be treated as ASCII character codes and converted into characters. Return
a string of those characters.
See the MDN docs for `String.fromCharCode()` method for how to convert character
codes into ASCII characters.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Examples:
hexadecimalToString(['0x004a']) => 74 => "J"
hexadecimalToString(['0x0041', '0x0042', '0x0043']) => 61, 62, 63 => "ABC"
hexadecimalToString(['0x0048', '0x0065', '0x0078', '0x0061']) => 72, 101, 120, 97 => "Hexa"
*******************************************************/

function hexadecimalToString(hexadecimalChars) {

    let returnLetters = [];

    for (let i = 0 ; i < hexadecimalChars.length ; i++) {
        const charCode = parseInt(hexadecimalChars[i].slice(2), 16);
        const asciiValue = String.fromCharCode(charCode);
        returnLetters.push(asciiValue);
    }

    return returnLetters.join('');

}

hexadecimalToString(['0x0041', '0x0042', '0x0043']);  // 'ABC'

module.exports = hexadecimalToString;
