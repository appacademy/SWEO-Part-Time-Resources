# M2W3D5

## Space Complexity

- Space Complexity is similar to Time Complexity in that it is a way for us\
to analyze our code. It just deals with memory instead of time.

```js
const sum = (nums) => {
  const sums = [0];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sums.push(sums[sums.length - 1] + num);
  }
  return sums[sums.length - 1];
};

const sum = (nums) => {
  return nums.reduce((sum, num) => sum + num);
};

const sum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums[nums.length - 1];
};

console.log(sum([1, 2, 3, 4, 5]));
```
