// Write a javascript function that converts an array of Binary numbers to ASCII

// hint: take a look at String.fromCharCode() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

const binaryToAscii = arrayBinary => {
    let strVal = "";
    for(let i=0; i<arrayBinary.length; i++){
        const binStr = arrayBinary[i];
        //convert the binStr to an ascii value using thee fromCharCode method
        const asciiValue = String.fromCharCode(binStr)
        strVal += asciiValue;
    }
    return strVal;
}


// Jacks solution
// const binaryToAsciis = (arrayBinary) => {
//     let answer = [];
//     for (let i = 0; i < arrBinary.length; i++) {
//       let currBin = arrBinary[i];
//       let almost = binaryToDecimal(currBin);
//       answer.push(String.fromCharCode(almost));
//     }
//     return answer.join("");
//   };
//   const binaryToDecimal = (binStr) => {
//     let dec = 0;
//     for (let i = 0; i < binStr.length; i++) {
//       if (binStr[binStr.length - (i + 1)] === "1") {
//         dec += 2 ** i;
//       }
//     }
//     return dec;
//   };


// one line: 
// const binaryToAscii = (arrayBinary) => String.fromCharCode(...arrayBinary);

  

const arrBinary = [`0b01100110`, `0b01101111`, `0b01101111`, `0b01100100`] //make sure to have 0b in front
const result = binaryToAscii(arrBinary)
console.log(result) // --> "food"