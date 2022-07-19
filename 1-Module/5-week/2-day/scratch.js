const iter_sum = (n) => {
  let sum = 0;
  
  for (let i = n; i > 0; i--) {
    sum += n;
  }

  return sum;
}

console.log(iter_sum(3));
