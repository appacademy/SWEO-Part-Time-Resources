// Sets - Abstract Data Types which are used to store a collection of unique, unordered values
let arr = [1,2,3,4,4];

let setFromArr = new Set(arr);
console.log(setFromArr.entries())
let set = new Set();
console.log(set.entries())
set.add(1)
set.add('tristan')
set.add(6)
console.log(set.entries())
console.log(set.has(5))
console.log(set.has(9))
console.log(set)

// Caching
function multiply(a,b) {
  let product = 0;

  for(let i = 0; i < b; i++) {
    product += a
  }

  console.log(product);
  return product;
}

// multiply(3,5) //15
// multiply(2,1000) //2000
// multiply(3, 1000000000) //3000000000

const cache = {}

function multiplyCache(a,b) {
  const key = `${a}x${b}` //3x5 2x1000 3x1000000000 1000000000x3

  if (!cache[key]) {
    cache[key] = multiply(a,b);
  }

  console.log(cache[key])
  return cache[key];
}
multiplyCache(3,5) //15
multiplyCache(2,1000) //2000
multiplyCache(3, 1000000000) //3000000000
console.log(cache)
multiplyCache(3, 1000000000) //3000000000
multiplyCache(3, 1000000000) //3000000000

let memoCache = {}

function fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 1;
  
  if (!memoCache[n]) {
    memoCache[n] = fib(n - 1) + fib(n - 2);
  }

  return memoCache[n];
}

fib(5);
console.log(memoCache);
fib(45);
console.log(memoCache);
