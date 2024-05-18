const set = new Set([1,1,2,3,4,5])

// console.log(set)

set.add(6)
set.add(7)

// console.log(set)

// set.delete(10)

console.log(set.size)
console.log(set[3])

console.log(set.has(10))

set.clear()
console.log(set)
