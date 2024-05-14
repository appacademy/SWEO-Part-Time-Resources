[ 0, 2, 4, 6, 8, 10 ] // "memory addresses"

["0x30"] // 0 index memory address
"2 x 2" // index times the "pattern" === 4
["0x34"] // index 2
// pattern to increment memory is + 2

// this calculation is called a memory offset


// linked list "memory" example

[0, 22, 34, 12, 10, 6, 2] // "memory addresses" of a linked list



// insert node at beginning
//first node is head node
[0, 22, 34, 12, 10, 6, 2, null] // "memory addresses" of a linked list

// insert node at the end
[20, 0, 22, 34, 12, 10, 6, 2, 50, null] // "memory addresses" of a linked list

[20, 0, 22, 34, 12, 10, 6, 2, 50, 100, null] // "memory addresses" of a linked list

[{head: true, next: 22}, {next: 34, value: 10},{next: 12, value: false}] //node instances
// current = current.next --> 0 ---> 22
// current = current.next --> 22 ---> 34

// current = current.next --> 2 ---> 50
// current = current.next --> 50 ---> null
// current.next === null
