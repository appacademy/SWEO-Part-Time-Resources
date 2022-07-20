const iter_sum = (n) => {
  let sum = 0;
  
  for (let i = n; i > 0; i--) {
    sum += i;
  }

  return sum;
}

console.log(iter_sum(3));

const rec_sum = (n) => {
  // base case: when n = 0
  // recursive case: when n > 0 
  // recursive step: n - 1

  if (n === 0) return 0;

  return n + rec_sum(n - 1)
}

// console.log(iter_sum(3));
console.log(rec_sum(3))

// 4 rec_sum(0) = undefined
// 3 rec_sum(1) = 0
// 2 rec_sum(2) = 2 + rec_sum(1)
// 1 rec_sum(3) = 3 + rec_sum(2)
