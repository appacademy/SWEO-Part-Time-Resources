// console.log(Number("0xC9"))
// console.log(Number("0b11101001"))

// const newArr = [1, 2, 3, 4]

// // Under the hood
// [1, 2, 3, 4, 5, 6, 7, 8, 9, _, _,] // double the space once at max capacity

// A   B     A && (!A || !B)
// ------------------------
// 0   0      0
// 0   1      0
// 1   0      1
// 1   1      0

const A = true
const B = false

console.log(A && (!A || !B))