

console.log("-----------------------Write YOUR own decimalToAscii function--------------------")
// Write a javascript function that converts an array of Binary numbers to ASCII

// hint: take a look at String.fromCharCode() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// String.fromCharCode will take in a hexa or decimal value and retrieve its ascii value.

const decimalToAscii = arrayDecimal => {
    let word = "";
    for(let i=0; i<arrayDecimal.length; i++){
        const decimalStr = arrayDecimal[i];
        const asciiValue = String.fromCharCode(decimalStr);
        word += asciiValue;
    }
    return word;
}

const arrDeci = [`65`, `47`, `97`, `33`, ]
const result = decimalToAscii(arrDeci)
console.log(result) // --> "A/a!"

