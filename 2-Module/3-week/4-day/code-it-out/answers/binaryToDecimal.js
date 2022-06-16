console.log("----Bits, Bytes, Kilobytes, megabytes... too many to byte----")
/*
we've been working with bits, and a byte is 8 bits... but there's more
- Conversion
    - 1 byte ~ 8 bits 
    - 1 kilobyte ~ 1000 bytes 
    - 1 megabyte ~ 1000 kilobytes
    - 1 gigabyte ~ 1000 megabytes
    - ...reference your homework for more!
*/

// QUESTION: How many bits are in 10 megabytes?




console.log("--------------------Binary To Decimal--------------------")
// Write a javascript function that converts Binary to Decimal

/*
remember the formula?: Multiply each digit by the number base raised to the nth power, where n is its position starting from the right. Then, add all of the results together.

0b11001010 to decimal:
2^0 *0 = 0
2^1* 1 = 2
2^2 *0 = 0
2^3* 1 = 8
2^4 *0 = 0
2^5* 0 = 0
2^6 *1 = 64
2^7* 1 = 128
*/

//YOUR CODE HERE

const binaryToDecimal = (binStr) => {
    //reverse it
    const reverseBinStr = binStr.split("").reverse().join("");
    //iterate until the last 2 characters (0b just denotes that it's binary)
    //each iteration represents at i represents the power or the position
    //totalDecimal = 0;
    let totalDecimal = 0;
    for (let i = 0; i < reverseBinStr.length - 2; i++) {
        //binaryBit = convert the character to a number (0 / 1)
        const charNum = reverseBinStr[i];
        const binaryBit = Number(charNum)

        //positionValue = take the base of 2 to the power of the position (i) and then multiply it by the binaryBit
        const positionValue = (2 ** i) * binaryBit;

        //add the positive value to the totalDecimal
        totalDecimal += positionValue;

    }
    //return total decimal
    return totalDecimal

};

// const binaryToDecimal = (binStr) => {
//     const decimalAnswer = parseInt(binStr.slice(2), 2)
//     return decimalAnswer;
// };

const binNum = '0b11001010';
const decimalRes = binaryToDecimal(binNum);
console.log(decimalRes); //should be: 202
console.log(String.fromCharCode(decimalRes)) //Ê
