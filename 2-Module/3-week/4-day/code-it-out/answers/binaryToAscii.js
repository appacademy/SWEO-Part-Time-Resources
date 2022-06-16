
// Write a javascript function that converts an array of Binary numbers to ASCII

// hint: take a look at String.fromCharCode() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// String.fromCharCode will take in a hexa or decimal value and retrieve its ascii value.

const binaryToAscii = arrayBinary => {
    let strRes = "";
    for(let i=0; i<arrayBinary.length; i++){
        const binNumber = arrayBinary[i];

        //convert binNumber to the corresponding ascii value w/ String.fromCharCode()
        const asciiValue = String.fromCharCode(binNumber)
        console.log("myval:",asciiValue);
        strRes += asciiValue;
    }
    return strRes;

}

const arrBinary = [`0b01100110`, `0b01101111`, `0b01101111`, `0b01100100`]
const result = binaryToAscii(arrBinary)
console.log(result) // --> "food"3


//remember that  String.fromCharCode()