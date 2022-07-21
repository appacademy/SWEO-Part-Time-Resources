// blank on purpose

const binaryToDecimal = (ob) => {
  const revOb = ob.toString().split('').reverse();

  const products = revOb.map((num, i) => {
    return Math.pow(2, i) * num;
  });

  const sum = products.reduce((acc, num)=> acc += num)

  return sum;
}

const determineNum = (hexNum) => {
  const nums = {
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15,
  }

  return hexNum.toLowerCase() in nums ? nums[hexNum] : hexNum;
}

const hexToDecimal = (hex) => {
  const revHex = hex.split('').reverse();

  const products = revHex.map((num, i) => {
    return Math.pow(16, i) * determineNum(num);
  });
  
  const sum = products.reduce((acc, num)=> acc += num)
  
  return sum;
}

// console.log(binaryToDecimal(1011));
// console.log(0b1011)
// console.log(hexToDecimal('A1'));

const decimal = parseInt('a1', 16); // 161
const hexadecimal = decimal.toString(16); // 'a1'
const binary = decimal.toString(2) // '10100001'
console.log(decimal)
console.log(hexadecimal)
console.log(binary);