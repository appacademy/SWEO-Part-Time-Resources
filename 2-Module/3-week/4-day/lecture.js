// RAM
// Random Access Memory
// What does it hold?
// It holds bits like 0's and 1's in the form of electircal charges

// Is it slow or is it fast?
// Fast, to read and write

// Persistent or volatile?
// They are volatile type of memory
// Whilst are HDD's and SSD's are long term persistent storages
// RAM requires constant electric power source to retain information

// an expensive type of memory

// How do we access this type of memory?
// References, pointers and memory addresses

// Objects and arrays are reference data types

// Only two kinds of things that are truly stored in memory
// instructions
// raw data

// Pointers, references, memory address
// What are 16/32/64 bit even mean?
// 0000000000000000
// 1111111111111111

// how much space is needed to store an
// address/reference or pointer? in these types of systems?

// what is a variable?
const arr = []
let str = 'apple'

// pointer --> look
// references --> look and edit

// what is an array?
// a continguous block of memory addresses
// const newArr = [1, [1,2], 'hello']
// newArr[0]

// What is a stack?
// like an array therefore its a block of memory addresses
// things can only be added to or removed from the top

const stack = [1,2,3,4]
// FILO --> first in last out

// 16 bits of memory --> 8 bits per memory block
// 		  1 	   2
// 00000000 00000000


// 		  1 	   2
// 00000001 00000010

const arr2 = [1,2]
arr2[0] // --> 1 00000001
arr2[0] = 'a'// --> 1 1100001

// 		  1 	   2
//  1100001 00000010
arr2[0] // 'a' --> reference to the memory address

let data = arr2[0]
// data --> pointer


// Dynamic Arrays
// In javascript
// Allows us to store any type of data in those arrays
// and the amount of memory allocated is dynamic

const initArr = [1,2]

// an array with the length of 1000 is 1kb
// 1mb --> 1,000,000
// 1gb --> 1,000,000,000
// 1tb --> 1,000,000,000,000

//        1        2
// 00000001 00000010
//        3        4
// 00000000 00000000

initArr.push(3)
initArr.push(4)

// [1,2,3,4]

//        1        2
// 00000001 00000010
//        3        4
// 00000011 00000100

initArr.push(5)

//       11       12
// 00000001 00000010
//       13       14
// 00000011 00000100
//       15       16
// 00000101 00000000
//       17       18
// 00000000 00000000
//       19
// 00000000


// c --> length of 10
// [null, null, null, null, null, null, null, null, null, null]
