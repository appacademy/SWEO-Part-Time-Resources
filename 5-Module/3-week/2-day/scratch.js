const original = { a: 1, b: { c: 2 } };

// Shallow copy with Object.assign()
// const copy = Object.assign({}, original);

// Shallow copy with spread operator
const copy2 = { ...original };

// copy.b.c = 3;

copy2.b.c = 4

copy2.b.d = 6

copy2.a = 3

console.log(original.b.c); // Output: 3

console.log(copy2)
console.log(original)


