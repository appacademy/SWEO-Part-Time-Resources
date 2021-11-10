const binary = '0b11001010'

const binaryToDecimal = (binaryStr) => {
  // Remove the "Ob" prepended to the str
  const rawBinary = binaryStr.substring(2)
  // Reverse the string for the next step
  const reversedBinary = rawBinary.split('').reverse().join('')

  let sum = 0

  for (let i = 0; i < reversedBinary.length; i++) {
    // Convert string to integer
    const currentInt = parseInt(reversedBinary[i])
    const num = Math.pow(2, i) * currentInt
    sum += num
  }

  return sum
}

console.log(binaryToDecimal(binary))

const hexChars = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
}

const hex1 = '0xF23C'

const hexToDecimal = (hexStr) => {
  // get fi
  const rawHex = hexStr.substring(2)
  const reverseHex = rawHex.split('').reverse().join('')

  let sum = 0

  for (let i = 0; i < reverseHex.length; i++) {
    if (hexChars[reverseHex[i]]) {
      let num = Math.pow(16, i) * hexChars[hexStr[i]]
      sum += num
    } else {
      let num = Math.pow(16, i) * parseInt(hexStr[i])
      sum += num
    }
  }

  return sum
}

console.log(hexToDecimal(hex1))
