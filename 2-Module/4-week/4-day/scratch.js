const hashIt = (word) => {
  return word
    .split('')
    .reduce((res, char) => Number(char.charCodeAt().toString(2)) + res, 0);
};

console.log(hashIt('listen'));
console.log(hashIt('brooooo'));
console.log(hashIt('silent'));
