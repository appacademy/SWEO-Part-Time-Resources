// const range = (start, end) => {
//   // Base Case start === end
//   if (start === end) return [];
//   // Recursive Case start !== end
//   // Recursive Step start + 1
//   return [start, ...range(start + 1, end)];
// };

// const range = (start, end, arr = []) => {
//   if (start === end) return arr;
//   arr.push(start);
//   return range(start + 1, end, arr);
// };

const range = (start, end) => {
  let arr = [];
  function inner() {
    if (start === end) return arr;
    arr.push(start);
    start += 1;
    return inner();
  }
  return inner();
};

console.log(range(4, 6)); // [4, 5]


// function sum(num1 = 3, num2 = 4) { 
//   return num1 + num2;
// }

// console.log(sum(2));