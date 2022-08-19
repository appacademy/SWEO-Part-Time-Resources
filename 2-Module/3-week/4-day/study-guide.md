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
  - Traditional Arrays (i.e. typed arrays in C++)
    - An `array` is a `sequence of elements` of the `SAME TYPE` `stored in a contiguous block of memory`.
    - traditional arrays can only hold like or similar datatypes (c++ strict type for arrays)
    - `.push` method
  - [Dynamic Arrays (Javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)
    - Dynamic arrays like in JavaScript array are resizable and can contain a mix of different data types (sorta, see next point). 
    - JS Array contains `pointers` (memory address) at each index that will point to different data. there `pointers` are all the same datatype but it points to different datatypes at runtime.
    - Dynamic Arrays `.push` time complexity is `O(n)` when resizing.
      - because of automatic resizing when more elements get added, it will create a new array and copy the old elements over to the bigger array. (This becomes `O(n)` time)
      - Once in a while, it will have a bad time complexity.

- Define bits, bytes, kilobytes, megabytes, gigabytes and their conversion
  - 1 byte = 8 bits
  - 1 kilobyte = 1000 bytes
  - 1 megabyte = 1000 kilobytes (1million bytes)

- Understand that `pointers` represent an address or indexed location in memory.  

- Truth table conversion
