[1,2,3,4,5,6] // arrays time complexity
[0,2,4,6,8,10, 12, 14, 16, 18, 20] // memory addressess for an array
// index 0, want to get to index 2
// starting memory address + given index x incrementing pattern === memory offset

// access O(1)
// deleting O(n)  except for last index, this would be O(1)
// inserting(pushing) O(1)
// accessing O(n)

//head         tail
[0, 10, 5, 214, 2, null] // linked list memory addressess

[12, 0, 10, 5, 214, 2, null] // linked list memory addressess

// doubly linked list
//------------------------------->
[12, 0, 10, 5, 214, 2, 83, null] // linked list memory addressess
 //<----------------------------
//                      83 -> null

// addToHead double linked list
//------------------------------->
[93, 12, 0, 10, 5, 214, 2, 83, null] // linked list memory addressess
//<----------------------------
//                      83 -> null

// addToTail double linked list
//------------------------------->
[93, 12, 0, 10, 5, 214, 2, 83, 105, null] // linked list memory addressess
//<----------------------------
//                      83 -> null


// 0                        10                       5                          214                     2
[{value: [1,2,3], next: '0x7FFF5FBFFD98'}, {value: false, next: 5}, {value: 'hello world', next: 214}, {value: 3, next: 2},{value: {a: 1}, next: null}] // node instances
