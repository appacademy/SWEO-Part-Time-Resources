
// Write a javascript function that converts an array of Binary numbers to ASCII

// hint: take a look at String.fromCharCode() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// String.fromCharCode will take in a hexa or decimal value and retrieve its ascii value.

const binaryToAscii = arrayBinary => {
    let word = "";

    //loop through the array of binary combinations and then apply the fromCharCode to each one to get its ascii value
    for(let i=0; i<arrayBinary.length; i++){
        const binaryStr = arrayBinary[i];
        const asciiValue = String.fromCharCode(binaryStr);
        word += asciiValue;
    }
    return word;
}

const arrBinary = [`0b01100110`, `0b01101111`, `0b01101111`, `0b01100100`]
const result = binaryToAscii(arrBinary)
console.log(result) // --> "food"

