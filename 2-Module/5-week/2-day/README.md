# M2W5D2

## Logarithms

The logarithm base-n of a number is how many times it must be divided
by n to reach 1.

- What is in the parenthesis is the input to be divided
- The result of the function call is the worst case scenario for amount of
  comparisons in a Binary Search Tree

```js
Math.log2(1);    // 0
Math.log2(2);    // 1
Math.log2(4);    // 2
Math.log2(8);    // 3
Math.log2(16);   // 4
Math.log2(32);   // 5
Math.log2(64);   // 6
Math.log2(128);  // 7
Math.log2(256);  // 8
Math.log2(512);  // 9
Math.log2(1024); // 10

2 ** 0   // 1
2 ** 1   // 2
2 ** 2   // 4
2 ** 3   // 8
2 ** 4   // 16
2 ** 5   // 32
2 ** 6   // 64
2 ** 7   // 128
2 ** 8   // 256
2 ** 9   // 512
2 ** 10  // 1024
```

Properties of a Binary Search Tree:

- The tree starts at the root
- nodes whose values are less than the current node go to the left
- nodes whose values are more than the current node go to the right
- Each node has three properties: value, left and right
