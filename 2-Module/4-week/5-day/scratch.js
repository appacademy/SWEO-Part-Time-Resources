const isUnique = (arr) => {
  let set = new Set(arr);
  return set.size === arr.length;
};

console.log(isUnique([1, 2, 3]));
console.log(isUnique([1, 2, 3, 1]));


let newSet = new Set([1,2,3,1])

console.log(newSet)