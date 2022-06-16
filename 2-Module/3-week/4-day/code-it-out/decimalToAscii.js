

console.log("-----------------------Write YOUR own binaryToAscii function--------------------")
// Write a javascript function that converts an array of Binary numbers to ASCII

// hint: take a look at String.fromCharCode() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// String.fromCharCode will take in a hexa or decimal value and retrieve its ascii value.

const decimalToAscii = arrayDecimal => {
    let strRes = "";
    for(let i=0; i<arrayDecimal.length; i++){
        const decimal = arrayDecimal[i];

        //convert binNumber to the corresponding ascii value w/ String.fromCharCode()
        const asciiValue = String.fromCharCode(decimal)
        console.log("myval:",asciiValue);
        strRes += asciiValue;
    }
    return strRes;

}

const arrDeci = [`65`, `47`, `97`, `33`, ]
const result = decimalToAscii(arrDeci)
console.log(result) // --> "A/a!"

