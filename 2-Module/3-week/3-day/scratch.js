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
  // Remove the Ox
  const rawHex = hexStr.substring(2)
  // Reverse remaining hex
  const reverseHex = rawHex.split('').reverse().join('')

  let sum = 0

  for (let i = 0; i < reverseHex.length; i++) {
    const currentChar = reverseHex[i]
    if (hexChars[currentChar]) {
      // If it is a char use the value from the hexChars object
      let num = Math.pow(16, i) * hexChars[currentChar]
      sum += num
    } else {
      // If it is a number we will convert the currentChar to a string
      let num = Math.pow(16, i) * parseInt(currentChar)
      sum += num
    }
  }

  return sum
}

console.log(hexToDecimal(hex1))
