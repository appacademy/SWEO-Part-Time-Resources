# Binary Logic

## Learning Boost (5m)

## Lecture (15m)

<img src="https://i.ibb.co/sPqcd8D/control-Flow-Input-CPURAMOutput.png" ref='flow' width="500" />

When we write code, it's first translated into simplified machine instructions (binary) then loaded into memory, then it's executed by the processor.

### Truth Tables

A Truth table is a table of possible inputs and their corresponding boolean outputs.

for example:

| a | b | a (AND) b |
|------:|:------:|:------:|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

This shows the 4 possible combos of A and B and the logical result of A && B.

True and False can also be expressed using the binary values 0 and 1. (0 = false, 1 = true)

| a | b | a (OR) b |
|------:|:------:|:------:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Pretty simple, right?

We also have the logical XOR (`^`) operator, which is the exclusive OR operator. This means either A or B, but not both.

| a | b | a (XOR) b |
|------:|:------:|:------:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

## Different Number bases

### Base-10 Decimal

This is how we all learn to count. The 'base' refers to how many digits there are in the counting system: 0-9 in this case. once you get to the last digit, you increment the number on the left by 1 and start over.

```js
00
01
02
03
04
05
06
07
08
09
10
11
12
```

### Base-2 Binary

Binary is another word for base-2. In this base, there are only 2 digits (0 and 1). In order to count in Binary we do the following:

```js
  B   D
0000 (0) = 1 bit
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8) = 1 byte
```

We use the same method of starting with the number on the far right and incrementing the number on the left once we get to 1 for the next number, then doing it over and over again. To prevent confusion we usually write Binary numbers prefixed with 0b, so 8 in binary would be written as 0b1000.

### Translating from binary to decimal

To translate a binary number to decimal you multiply each digit by the number base raised to the nth power, then add all of the results together. You have to start with the rightmost number, which will be at position 0 (n) and work your way to the left.

You can `console.log(0b11001010)` to see the binary number in decimal. Below is a function that will translate it as well. I feel like seeing it this way helped me understand the math.

```js
const binaryToDecimal = (ob) => {
  const revOb = ob.toString().split('').reverse();
  const products = revOb.map((num, i) => {
    return Math.pow(2, i) * num;
  });
  const sum = products.reduce((acc, num)=> acc += num)
  return sum;
}
console.log(binaryToDecimal(11001010)) // 202
```

### Hexadecimal

The third common number base in CS is base-16, or hexadecimal. The digits are 0-9 and A-F which represents 10-15. The numbers are prepended with an 0x to differentiate them as base-16.

- Often used as shorthand for binary, one hex digit can represent 4 bits.

```js
 D     B       H
 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
```

You can use the same formula to translate to decimal from hexadecimal, but you'll use 16 as your base instead of 2.

```js
const determineNum = (hexNum) => {
  const nums = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
  }
  return hexNum in nums ? nums[hexNum] : hexNum;
}
const hexToDecimal = (hex) => {
  const revHex = hex.split('').reverse();
  const products = revHex.map((num, i) => {
    return Math.pow(16, i) * determineNum(num);
  });
  
  const sum = products.reduce((acc, num)=> acc += num)
  
  return sum;
}
console.log(hexToDecimal('F23C')) // 62012
```

### Letters in Binary

<img src='https://i.ibb.co/PGySkMS/ASCIITable.png' ref ='letters in binary' width='600'>

## Project time (until EOD)

[JavaScript Arrays Big-O Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-9---big-o/javascript-arrays-big-o-project)

- If you finish the project, please do your Formative Quiz and get started on your homework.

## EOD (30m before class ends)

- Walkthru of the project
