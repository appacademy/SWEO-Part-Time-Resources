const test = () => {
  return new Promise((res) => res("I'm first"));
};
const test2 = () => {
  return setTimeout(() => console.log("I'm third"), 0);
};

test2();
console.log(test());
console.log("I'm second");