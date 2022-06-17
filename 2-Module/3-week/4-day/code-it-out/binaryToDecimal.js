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

const binaryToDecimal1 = (binStr) => {
    //reverse the binStr
    const revBinStr = binStr.split("").reverse().join("");
    let total = 0;
    //go from right to left and then get the decimal value at each position, then add it to the total.
    for(let i=0; i<revBinStr.length - 2; i++){
        const numChar = revBinStr[i]; //'0'
        //need to convert numChar into a number not a string
        const binDigit = parseInt(numChar) //takes a string, and no 2nd argument provided, will default to type casting the string into a number. string of '0' and --> 0

        const positionValue = (2 ** i) * binDigit;
        total += positionValue;
    }
    return total;
};

//binary to a decimal using parseInt. ParseInt takes a string, and a number that tells parseInt what base that the string is using (i.e. binary, or decimal, or hexadecimal.)
const binaryToDecimal = (binStr) => parseInt(binStr.slice(2), 2 ) //2 in the second arg --> tells the string that we are passing to that the first arg, is a binary string



const binNum = '0b11001010';
const decimalRes = binaryToDecimal(binNum);
console.log(decimalRes); //should be: 202
console.log(String.fromCharCode(decimalRes)) //Ê



