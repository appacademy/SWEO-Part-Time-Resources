const iter_sum = (arr) => {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    sum += num;
  }

  return sum;
}

const rec_sum = (arr) => {
  if (arr.length === 0) return 0;
  
  return arr[0] + rec_sum(arr.slice(1));
};

console.log(iter_sum([0, 1, 2, 3]));
console.log(rec_sum([0, 1, 2, 3]));

