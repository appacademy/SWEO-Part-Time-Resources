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
    //create a variable to hold the decimal value
    //reverse binStr in order to start at the right
    let decimalVal = 0;
    const revBinStr = binStr.split("").reverse().join("");

    //iterate all the way up before the last 2 letters
    //my index will represent the position for each value
    for (let i = 0; i < revBinStr.length - 2; i++) {
        const numChar = revBinStr[i];
        //apply the formula
        const binNum = parseInt(numChar)
        const positionValue = (2 ** i) * binNum

        //add positionValue to decimalVal
        decimalVal += positionValue;
    }

    return decimalVal
};


const binaryToDecimalShort = (binStr) => {
    const decimalAns = parseInt(binStr.slice(2), 2);
    return decimalAns;
}


const binaryToDecimalJack = (binStr) => {
    let dec = 0;
    for (let i = 0; i < binNum.length; i++) {
        if (binStr[binStr.length - (i + 1)] === "1") {
            dec += 2 ** i;
        }
    }
    return dec;
};

// My solution :
const binaryToDecimalRobert = (binStr) => {
    const prefix = "0b";
    let sign = "";

    if (binStr[0] === '-') {
        sign += binStr[0];
        binStr = binStr.slice(1);
    }

    if (binStr.length < 3) {
        throw new Error("not a valid binary string");
    } else if (prefix !== binStr.slice(0, 2)) {
        throw new Error("not a valid binary string");
    }

    let decimalValue = 0;

    for (let n = 0; n < (binStr.length - prefix.length); n++) {
        // work from end of string to beginning, excluding prefix
        const index = ((binStr.length - 1) - n);
        // turn binary string digit into decimal number type
        const binDig = Number(binStr[index]);

        // calculate decimal value of given digit and add to total
        decimalValue += (2 ** n * binDig);
    }

    if (sign === '-') {
        decimalValue *= -1;
    }

    return decimalValue;
};



const binNum = '0b11001010';
const decimalRes = binaryToDecimal(binNum);
console.log(decimalRes); //should be: 202
console.log(String.fromCharCode(decimalRes)) //Ê



