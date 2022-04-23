Binary

parseInt()
toString()
fromCharCode()
charCodeAt()

Base 10 - Decimal

Base 2 - Binary
0b

Base 16 - HexaDecimal
0x

ASCII

logic and truth table


A B A || B A && B
0 0    0      0
1 0    1      0
0 1    1      0
1 1    1      1

NAND

A B  !(A && B)
0 0     1
1 0     1
0 1     1
1 1     0

NOR

A B !(A || B)
0 0     1
1 0     0
0 1     0
1 1     0

XOR

A B   A ^ B
0 0     0
1 0     1
0 1     1
1 1     0


Memory

RAM - Random Access Memory

Memory Address is also referred as
Memory pointers or Memory Reference

1 byte = 8 bits
8 bit processor

let str1 = 'DEF'

104      105      106      107 - Memory Address
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000

let str2 = 'ABC'

str2.charChodeAt()

A
'0b10000001'

B
'0b10000010'

C
'0b10000011'

index
0 	104      105      106      107 - Memory Address
	00000000 00000000 00000000 00000000

1	108      109      110      111
	10000001 10000010 0b10000011 00000000

2	112      113      114      115
	00000000 00000000 00000000 00000000

3	116      117      118      119
	00000000 00000000 00000000 00000000



valueAddress = startAddress + index * length(dataType)

104 + (1 * 4) = 108


Array

Is a sequence of elements of the same type stored in contiguous block of memory.



Dynamic Array

example:

[<empty>, <empty>, <empty>, <empty>]

[]

overallocates extra memory to the array that is abstracted from the user

[1,2,3,4, empty, empty, empty, empty]

[1,2,3,4]

[1,2,3,4, 5, 6, 7, 8, empty,empty,empty,empty, empty, empty, empty, empty]
[1,2,3,4,5,6,7,8]

time complexity
big o = o(1)
average case = o(1) space = o(1)

worst case = o(n) space = o(n)
arr.push()

average case = o(1)
worst case = o(n)
arr.pop()
