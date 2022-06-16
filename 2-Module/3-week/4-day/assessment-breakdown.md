## Week 9 Assessment Breakdown
- 9 MC; 6 Specs; 
  - Passing score: 12/15

- Understanding difference between worst, average, best case

- Given a function, determine the Big O: time complexity for it (big O of...)
	- know the different time complexity for Big O.

- Understand different base counting systems 
	- base 2 (binary)
	- base 10 (decimal)
	- base 16 (hexademical)

- Be able to convert the different base systems
	- binary to decimal
	- hexadecimal to decimal
  - decimal to ascii
	- binary to ascii
	- hexadecimal to ascii

- Basic understanding of the stack

- Understanding Arrays
  - Typed Arrays (C++)
    - An array is a sequence of elements of the same type stored in a contiguous block of memory.
    - in other languages traditional arrays can only hold like or similar datatypes (c++ strict type for arrays)
  - [Loose/Dynamic Arrays (Javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)
    - JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
    - JS Array contains `pointers` (memory address) at each index that will point to different data. there `pointers` are all the same datatype but it points to different datatypes at runtime.

- Know that array.push is also O(n) in the worst case scenario in rare situations where resizing happens.
  - Once in a while, it will have a bad time complexity.
  - Situation: when pushing to an array that has met its maximum capacity (fixed/static size like c++ static arrays).
    - if we want to increase its capacity, we create a new array. Then copy over all the elements from the old array. This becomes O(n) time.

- Define bits, bytes, kilobytes, megabytes, gigabytes and their conversion
  - 1 byte = 8 bits
  - 1 kilobyte = 1000 bytes
  - 1 megabyte = 1000 kilobytes (1million bytes)

- Understand that `pointers` represent an address or indexed location in memory.  

- Truth table conversion