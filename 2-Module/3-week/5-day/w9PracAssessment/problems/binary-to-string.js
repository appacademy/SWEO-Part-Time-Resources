// // Harder version
// function binaryToString(binaryBlob) {
//   let finalStr = '';

//   for (let i = 0; i < binaryBlob.length; i += 8) {
//     const currBlock = binaryBlob.slice(i, i + 8);
//     const usingParseInt = parseInt(currBlock, 2); // Either this
//     // const usingNumber = Number(`0b${currBlock}`); // Or this

//     const ascii = String.fromCharCode(usingParseInt);
//     finalStr += ascii;
//   }

//   return finalStr;
// }

// Best easiest version
function binaryToString(binaryBlob) {
  const binArr = [];

  for (let i = 0; i < binaryBlob.length; i += 8) {
    const currBlock = binaryBlob.slice(i, i + 8);
    binArr.push(`0b${currBlock}`);
  }

  console.log(binArr);

  return String.fromCharCode(...binArr);
}

// // Lest best but still basically best easiest version
// function binaryToString(binaryBlob) {
//   const binArr = [];

//   for (let i = 0; i < binaryBlob.length; i += 8) {
//     const currBlock = binaryBlob.slice(i, i + 8);
//     binArr.push(Number(`0b${currBlock}`));
//   }

// 	console.log(binArr)

// 	return String.fromCharCode(...binArr)
// }

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'

module.exports = binaryToString;

//! parseInt(any string, any radix)
//# Binary // parseInt("#####", 2) => Decimal
//? Hex // parseInt("0x#####", 16) => Decimal
//? Hex // parseInt("#####", 16) => Decimal

//! Number(any string)
//# Binary // Number("0b####") => Decimal
//? Hex // Number("0x####") => Decimal
