## Default Parameters

```js
const addAndMultiply = (num1, num2, num3 = 5) => {
  let sum = num1 + num2;
  let product = sum * num3;
  return product;
};

console.log(addAndMultiply(1, 2, 3)) // 9
console.log(addAndMultiply(1, 2)) // 15
```