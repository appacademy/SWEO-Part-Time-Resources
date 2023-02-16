const original = { a: 1, b: { c: 2 } };

// const badCopy = original



// badCopy.a = 2

// console.log(original)


// Shallow copy with Object.assign()
const copy = Object.assign({}, original);

// Shallow copy with spread operator
// const copy2 = { ...original };

copy.b.c = 3;
copy.b = {...copy.b}

copy.b.c = 4
copy.a = 44

console.log(original); // 
console.log(copy); // 2?