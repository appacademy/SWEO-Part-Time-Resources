// const myFunc = (data) => true;

// console.log(myFunc());

function add(a, b, ...args) {
  let total = a + b;
  console.log("extra args", args, Array.isArray(args));
  for (let n of args) {
    total += n;
  }
  return total;
}

add(2, 3, 4, 5); // returns 14
