const isUnique = (arr) => {
  let set = new Set(arr);
  return set.size === arr.length;
};

console.log(isUnique([1, 2, 3]));
console.log(isUnique([1, 2, 3, 1]));
