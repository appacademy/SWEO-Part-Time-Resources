/*
Binary, number base practice

In this exercise, translate the following values into the
appropriate number base. Expect to use the following methods
and consult their documentation on how to utilize them:
    parseInt()
    Number.toString()
    String.fromCharCode()
    string.charCodeAt()
*/

/*
Base 10 to binary
*/
// function deciToBinary(num) {
// 	return `0b${num.toString(2)}`
// }

function deciToBinary(n) {
    let binary = `0b`;
    let remainders = []
    let bit = 0;
    for (let i = 0; n >= 2; i++) {
        bit = Math.floor(n % 2)
        remainders.unshift(bit)
        n /= 2
    }
    remainders.unshift(Math.floor(n % 2))
    binary = binary.concat(remainders.join(""))
    return binary
}

// function deciToBinary(n, res = []) {
// 	if (n === 0) return `0b${res.join("")}`;

// 	let digit = n % 2;
// 	if (digit === 0) {
// 	  res.unshift(digit);
// 	  return deciToBinary(n / 2, res);
// 	} else {
// 	  res.unshift(digit);
// 	  return deciToBinary((n - 1) / 2, res);
// 	}
// }

console.log('Base 10 to binary:');
console.log(deciToBinary(8)); // '0b1000'
console.log(deciToBinary(24)); // '0b11000'
console.log(deciToBinary(255)); // '0b11111111'
console.log('');

/*
Base 10 to hexadecimal
*/
function deciToHexa(num) {
    return `0x${num.toString(16)}`
}

console.log('Base 10 to hexadecimal:');
console.log(deciToHexa(8)); // '0x8'
console.log(deciToHexa(24)); // '0x18'
console.log(deciToHexa(255)); // '0xff'
console.log('');

/*
Binary to base 10
*/
function binaryToDeci(num) {
	let newNum = num.substr(2);
	return parseInt(newNum, 2);
  }


console.log('Binary to base 10:');
console.log(binaryToDeci('0b1010')); // 10
console.log(binaryToDeci('0b0011')); // 3
console.log('');

/*
Hexadecimal to base 10
*/
function hexaToDeci(num) {
	return parseInt(num, 16);
// 	return parseInt(num)
}

console.log('Hexadecimal to base 10:');
console.log(hexaToDeci('0xa1')); // 161
console.log(hexaToDeci('0xff')); // 255
console.log('');

/*
Binary to hexadecimal
*/
// function binaryToHexa(bit) {
//     let n = binaryToDeci(bit)
//     return hexaToDeci(n)
// }

const binaryToHexa = (number) => {
   return  `0x${parseInt(number.substr(2), 2).toString(16)}`
}

// function binaryToHexa(number) {
// 	let newNum = number.substr(2);
// 	return `0x${parseInt(newNum, 2).toString(16)}`;
//   }


console.log('Binary to hexadecimal:');
console.log(binaryToHexa('0b1010')); // '0xa'
console.log(binaryToHexa('0b0011')); // '0x3'
console.log('');

/*
Hexadecimal to binary
*/
function hexaToBin(num) {
	return '0b' + parseInt(num, 16).toString(2);
}

// function hexaToBin(bit) {
//     let n = hexaToDeci(bit)
//     return deciToBinary(n)
// }


console.log('Hexadecimal to binary:');
console.log(hexaToBin('0xa1')); // '0b10100001'
console.log(hexaToBin('0xff')); // '0b11111111'
console.log('');


// // bonus

/*
Base 10 to ASCII
*/
function deciToAscii(num) {
	return String.fromCharCode(num);
}

console.log('Base 10 to ASCII:');
console.log(deciToAscii(65)); // 'A'
console.log(deciToAscii(66)); // 'B'
console.log(deciToAscii(97)); // 'a'
console.log(deciToAscii(98)); // 'b'
console.log('');

/*
Hexadecimal to ASCII
*/
function hexaToAscii(str) {
	return String.fromCharCode(str);
	// return String.fromCharCode(parseInt(str));
}


console.log('Hexadecimal to ASCII:');
console.log(hexaToAscii(`0x41`)); // 'A'
console.log(hexaToAscii(`0x42`)); // 'B'
console.log(hexaToAscii('0x61')); // 'a'
console.log(hexaToAscii('0x62')); // 'b'
console.log('');

/*
Binary to ASCII
*/
function binToAscii(bin) {
	let str = bin.toString();
  //   console.log(str);
	return String.fromCharCode(str);
}


console.log('Binary to ASCII:');
console.log(binToAscii(0b01000001)); // 'A'
console.log(binToAscii(0b01000010)); // 'B'
console.log(binToAscii(0b01100001)); // 'a'
console.log(binToAscii(0b01100010)); // 'b'
console.log('');

/*
ASCII to decimal
*/
function asciiToDeci(char) {
	return char.charCodeAt();
}


console.log('ASCII to decimal:');
console.log(asciiToDeci('A')); // 65
console.log(asciiToDeci('B')); // 66
console.log(asciiToDeci('a')); // 97
console.log(asciiToDeci('b')); // 98
console.log(' ')

// function asciiStrToDeci(str) {
// 	for (let i = 0; i < str.length; i++) {
// 	  console.log(str.charCodeAt(i));
// 	}
// }

function asciiStrToDeci(string) {
	if (!string.length) return "";
	console.log(string.charCodeAt(string[0]));
	return asciiStrToDeci(string.substr(1));
}



asciiStrToDeci('abc'); // 97 98 99
