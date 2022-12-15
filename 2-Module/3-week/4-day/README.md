# M2-W3-D4

- Memory
- Arrays

---

## Memory

Memory when talking about what a program is using while it is running is usually
talking about RAM(random access memory).

Ram is much faster then persistent storage devices like a hard drive or an
ssd(solid state drive).

You can think of memory as a series of cells that can contain an electric
charge(1) or no electric charge(0)

Inside of those cells are a series of 'words', the size of which are determined
by the system architecture

8 bit architecture example

```js
/*
'ABC'

000        001       002       003         <- if it holds a charge it is interpreted as a reference
01100101   00000000  00000000  00000000    <- 000 holds a ref starting at cell 0b01100101

004        005       006       007
00000000   00000000  00000000  00000000

008        009       010       011
00000000   00000000  00000000  00000000

012        013       014       015
00000000   00000000  00000000  00000000

...        ...       ...       ...

100        101       102       103
00000000   01000001  01000010  01000011   <- Contains the value referenced in '000'
*/

```

---

## Arrays

An array is a **sequence** of elements of the **same type** stored in a **contiguous block**
of memory.

JavaScript (and other dynamically typed languages) gets around this by storing
data as generic objects that are interpreted at runtime and given a type.

Example

```js
let arr = [255, 256, 43_690, 1_431_655_765] //we will represent these as 32bit ints

//step 1 - the program requests 16 bytes of memory (32bits * 4elements)

/*
104      105      106      107
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000

*/

//step 2 - convert the data into 32bit binary integers

/*
          255 ---> 00000000 00000000 00000000 11111111
          256 ---> 00000000 00000000 00000001 00000000
       43_690 ---> 00000000 00000000 10101010 10101010
1_431_655_765 ---> 01010101 01010101 01010101 01010101
*/

//step 3 - allocate those values into the prepared memory

/*
104      105      106      107
00000000 00000000 00000000 11111111     <- 255

108      109      110      111
00000000 00000000 00000001 00000000     <- 256

112      113      114      115
00000000 00000000 10101010 10101010     <- 43_690

116      117      118      119
01010101 01010101 01010101 01010101     <- 1_431_655_765
*/
```

Indexing - `valueAddress = startAddress + (index * sizeof(dataType))`

arr[2] === 256

valueAddress === 104 + (2 * 4)

valueAddress === 112

arr[valueAddress] === 00000000 00000000 10101010 10101010

arr[valueAddress] === 43_690

This method of access is why indexing into arrays is done in O(1) or constant
time. Making them super efficient ways of storing and accessing ordered data.

---

## Dynamic Arrays

In the previous section we saw how JS will allocate space for an array. What
happens if we need more space? In high level languages (JS, Python, Ruby,
ect...) the language will automatically grow the array to a new size to
accomadate the new information.

```js
let arr = [255, 256, 43_690, 1_431_655_765]

/* 16bytes
104      105      106      107
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000

*/

arr.push(0);

//arrays are by design sequential,
//so it needs to move everything into a bigger allocated section of memory
//it will request more space and copy the old info over into the bigger section

/* 20bytes
200      201      202      203
00000000 00000000 00000000 11111111

204      205      206      207
00000000 00000000 00000001 00000000

208      209      212      211
00000000 00000000 10101010 10101010

212      213      214      215
01010101 01010101 01010101 01010101

216      217      218      219
00000000 00000000 00000000 00000000
*/

```

How this is generally implemented to save time and increase general efficiency
is to overallocate space to the array to reduce the number of times it needs to
be copied and change locations in memory.

```js
let arr = [255, 256, 43_690, 1_431_655_765]

console.log(arr) // [255, 256, 43_690, 1_431_655_765] <- what you see
// [255, 256, 43_690, 1_431_655_765, undefined, undefined, undefined] <- what is actually there
```

`arr.push(el)`

normally O(1)

when it needs to resize O(n)

`arr.unshift(el)`

O(n) - it needs to move the entire array over, so it needs to do arr.length
number of operations

---

## Binary and Hexadecimal Practice (20m)

---

## Binary and Hexadecimal Walkthrough

---

## Advanced Conversion Functions Practice (20m)

---

## Advanced Conversion Functions Walkthrough

---

## Dynamic Arrays Practice (20m)

---

## Dynamic Arrays Walkthrough

---

## Array Practice (until EOD)

---
