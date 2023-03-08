// const binary = '0b11001011'
// const binary2 = '0b0010'

// function convertBinary(binary){
// 	let strLength = binary.length - 2

// 	let sum = 0
// 	for(let i = 0; i < strLength; i++){
// 		sum += Math.pow(2, strLength) * parseInt(binary[i+2])
// 		strLength--
// 	}
// 	return sum
// }

// const binary = '0b11001010'

// const binaryToDecimal = (binaryStr) => {
//   // Remove the "Ob" prepended to the str
//   const rawBinary = binaryStr.substring(2)
//   // Reverse the string for the next step
//   const reversedBinary = rawBinary.split('').reverse().join('')

//   let sum = 0

//   for (let i = 0; i < reversedBinary.length; i++) {
//     // Convert string to integer
//     const currentInt = parseInt(reversedBinary[i])
//     const num = Math.pow(2, i) * currentInt
//     sum += num
//   }

//   return sum
// }

// console.log(binaryToDecimal(binary))

const binary = '11001011'

function convertBinary(binaryStr) {
    let num = 0;
    let power = 0;

    for (let i = binaryStr.length - 1; i >= 0; i--) {
        let bit = parseInt(binaryStr[i]);
        num += bit * Math.pow(2, power);
        power++;
    }

    return num;
}


// console.log(convertBinary(binary))

function decimalToBinary(decimal) {
    let binary = "";

    while (decimal > 0) {
        let badVar = decimal % 2;
        binary = badVar + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}

console.log(decimalToBinary(4))
