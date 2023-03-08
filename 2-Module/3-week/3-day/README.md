# M2W3D3

## Binary Logic

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

You learned to count in a base 10 system. All numbers are based on a 0-9
counting pattern.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9....

- when you get to the last digit, you simply increase the number to the left and
 start over from 0

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

2 Key points:
  - binary is all 0s and 1s
  - binary digits are called bits
    - a group of 8 bits is a byte

```js
  B   D
0000 (0)
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8)
```

- The pattern is: 0 and 1 are the same a base 10, but then you run out of digits.
  - The right most digit returns to 0 and the digit to the left increments by 1
- '0b' prefix identifies string/num as binary:  0b0100 -> 4
- Avoids confusion, 8 -> 0b1000 to differentiate from base 10 number 1000

### Translating from binary to decimal

Formula: Multiply each digit by the number base raised to the nth power, where n
is its position _starting from the right_. Then, add all of the results together.

To convert 0b11001010 to decimal, remember the base is 2:

```
2^0 * 0 = 0
2^1 * 1 = 2
2^2 * 0 = 0
2^3 * 1 = 8
2^4 * 0 = 0
2^5 * 0 = 0
2^6 * 1 = 64
2^7 * 1 = 128
```

Add all of those sums together to get 2 + 8 + 64 + 128 = 202

### Hexadecimal

Counting follows this pattern:
The digits are 0-9 with A, B, C, D, E and F representing 10, 11, 12, 13, 14 and
15, respectively. Hexadecimal numbers (sometimes called 'hex' for short) are
prepended with an '0x' to differentiate them as base-16.

- Hexadecimal is often used as shorthand for representing binary values:
  - one hex digit can represent four bits.

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

To convert 0xA1:
```
16^0 *1      =   1 *  1  = 1
16^1 *A (10) =   16 * 10 = 160
```

160 + 1 = 161

To convert the hex number 0xF23C:
```
16^0 *C =    1 * 12 = 12
16^1 *3 =   16 *  3 = 48
16^2 *2 =  256 *  2 = 512
16^3 *F = 4096 * 15 = 61440
```

Add the sums together to get 61440 + 512 + 48 + 12 = 62012

---

### Bytes, kilobytes, megabytes, gigabytes, terabytes

1 byte = 8 bits

#### Recall from grade school

```
kilo  - thousand
mega  - million
giga  - billion
tera  - trillion
peta  - quadrillion
exa   - quintillion
zetta - sextillion
yotta - septillion
```

---

### JS Conversions

- `parseInt('numStr', radix)`
- `stringInstance.charCodeAt()`
- `String.fromCharCode(asciiVal)`
- `numberInstance.toString(radix)`

---

### Letters in Binary

<img src='https://i.ibb.co/PGySkMS/ASCIITable.png' ref ='letters in binary' width='600'>

## Project time (until EOD)

[JavaScript Arrays Big-O Project](https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-9---big-o/javascript-arrays-big-o-project)

- If you finish the project, please do your Formative Quiz and get started on your homework.
