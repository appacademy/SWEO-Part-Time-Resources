// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
	// return Number(str).toString(10);

	if (str.startsWith('0b')) {
		str = str.substr(2, str.length - 1);
		return parseInt(str, 2);
	  }

	if (str.startsWith('0x')) {
		return parseInt(str, 16);
	}

	// let base = getBase(str.slice(0, 2));
	// let digits = base === 10 ? str : str.slice(2);
	// let result = 0;
	// for (let i = 0; i < digits.length; i++) {
	//   result += parseInt(digits[i], base) * Math.pow(base, digits.length - 1 - i);
	// }
	// return result;
};

// const convertToBase10 = (str) =>
// str.startsWith("0x") ? parseInt(str) : parseInt(str.substring(2), 2);


const getBase = (str) => {
	switch (str) {
	  case "0b":
		return 2;
	  case "0o":
		return 8;
	  case "0x":
		return 16;
	  default:
		return 10;
	}
};


/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
