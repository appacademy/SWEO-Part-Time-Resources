function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0 ; i < str.length ; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
console.log(simpleHash('listen'));
console.log(simpleHash('brooooo'));
console.log(simpleHash('Its brittney'));



// const isUnique = (arr) => {
//   let set = new Set(arr);
//   return set.size === arr.length;
// };

// console.log(isUnique([1, 2, 3]));
// console.log(isUnique([1, 2, 3, 1]));


