// --------------- Problem 1 ---------------------------
console.log('one');
console.log('two');
console.log('three');

// --------------- Problem 2 ---------------------------
const foo = () => {
    console.log('two');
};

console.log('one');
foo();
console.log('three');

// --------------- Problem 3 ---------------------------
console.log('one');

setTimeout(() => {
    console.log('two');
}, 1500);

console.log('three');
