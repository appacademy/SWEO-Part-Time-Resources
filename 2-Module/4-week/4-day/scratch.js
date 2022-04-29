const rand = (size) => [...Array(size)].map(() => Math.floor(Math.random() * size));

const small = rand(100);
const medium = rand(5_000);
const large = rand(100_000);
const huge = rand(2_000_000)

const solution1 = arr => {
  console.time('Array.includes');
  for (let int = 1;;int++) { // time complexity o(n^2)
    if (!arr.includes(int)) { // time complexity o(n)
      console.timeEnd('Array.includes');
      return int;
    }
  }
}

// time o(n)
const solution2 = set => {
  console.time('Set.has');
  for (let i = 1;;i++) { // time compleixty o(n)
    if (!set.has(i)) { // time compelxity o(1)
      console.timeEnd('Set.has');
      return i
    }
  }
}

// console.log('Testing small');
// solution1(small);
// solution2(new Set(small));
// console.log('----')

// console.log('Testing medium');
// solution1(medium);
// solution2(new Set(medium));
// console.log('----')

// console.log('Testing large');
// solution1(large);
// solution2(new Set(large))
// console.log('----')

// console.log('testing huge')
// solution1(huge);
// solution2(new Set(huge));


//Caching example, creating a memo cache, memoization

let count = 0
let cache = {1: 0, 2: 1};

function fib(n) {
  count++
  console.log(`Running fib(${n})`);
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fib(n-1) + fib(n-2);
}

// console.log(fib(5))

function fibMemo(n) {
  count++
  console.log(`Running fibMemo(${n})`);

  if (cache[n] === undefined) {
    cache[n] = fibMemo(n-1) + fibMemo(n-2);
  }

  console.log(cache);
  return cache[n];
}

// console.log(fibMemo(10), 'caching')

// console.log(fibMemo(9), 'done caching')
// console.log(fibMemo(10), 'done caching')
// console.log(fibMemo(1), 'done caching')
// console.log(fibMemo(2), 'done caching')

// console.log(fibMemo(12), 'done caching')

// console.log(fib(10));
// // console.log(fibMemo(10));
// console.log("count of calls fib: ", count)

// function fibTab(n) {
//   for (let i = 3 ; i <= n ; i++) {
//     cache[i] = cache[i-1] + cache[i-2];
//   }
//   console.log(cache);
//   return cache[n];
// }

// console.log(fibTab(12));


const hashIt = (word) => {
	return word
		.split('')
		.reduce((res, char) =>{
		console.log("res: ", res)
		return Number(char.charCodeAt().toString(2)) + res
		}, 0);
};

console.log(hashIt('Alex'))
