# M1W5D3

## Default Parameters

```js
const range = (start, end) => {
  if (start === end) return [];
  return [start, ...range(start + 1, end)];
};

const range = (start, end, arr = []) => {
  if (start === end) return arr;
  arr.push(start);
  return range(start + 1, end, arr);
};

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

console.log(range(4, 12));
```
