const input = '0b11001010'

function binaryToDecimal(binary){
	// let res = []
	let sum = 0
	// binary.length - 1
	const reversedStr = binary.split('').reverse().join('')
						// time o(n)    // time o(n) // space o(1)
						// space o(n)
	for(let i = 0; i < reversedStr.length -2; i++){
		sum += Math.pow(2, i) * reversedStr[i]
	}

	return sum
}

// time o(n)
// space o(n)

console.log(binaryToDecimal(input))
