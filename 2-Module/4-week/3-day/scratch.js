//Sets - Abstract Data Type which is used to store a collection of unique, unordered values;
let arr = [1,2,4,3];
let setFromArray = new Set(arr);

// console.log(setFromArray.entries());
setFromArray.add(5);
// setFromArray.add(5);
// console.log(setFromArray.entries());
let set = new Set();
set.add('hello');
set.add('world');
// console.log(set.entries())
// console.log(set.has('hello'));
// console.log(set.has('tristan'));
// set.forEach(el => console.log(el))

// Caching

function multiply(a, b) {
  let product = 0;

  for (let i = 0; i < b; i++) {
    product += a;
  }

  return product;
}

// console.log(multiply(5,3))
// console.log(multiply(2, 1000))
// console.log(multiply(3, 1000000000))
// console.log(multiply(3, 1000000000))
// console.log(multiply(3, 1000000000))
// console.log(multiply(3, 1000000000))

let cache = {};

function multiplyCache(a,b) {
  const key = `${a}x${b}` //5x3

  if( cache[key] === undefined ) {
    cache[key] = multiply(a,b);
  }

  return cache[key];
}

// console.log(multiplyCache(5,3))
// console.log(multiplyCache(2, 1000))
// console.log(multiplyCache(1000000000, 3)) //1000000000x3
// console.log(multiplyCache(3, 1000000000)) //3x1000000000
// console.log(multiplyCache(4, 1000000000))
// console.log(multiplyCache(3, 1000000000))
// console.log(multiplyCache(3, 1000000000))

let memoCache = {}

function fib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  console.log(memoCache[n]);
  if (memoCache[n] === undefined) {
    console.log('Gott Recurse')
    memoCache[n] = fib(n-1) + fib(n-2);
  }

  return memoCache[n];
}

console.log(fib(10));
console.log(fib(10))

