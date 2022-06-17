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

ans: 202
*/

//YOUR CODE HERE

const binaryToDecimal = (binStr) => {

};

const binNum = '0b11001010';
const decimalRes = binaryToDecimal(binNum);
console.log(decimalRes); //should be: 202
console.log(String.fromCharCode(decimalRes)) //Ê



