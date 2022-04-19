# W5D1

## String Interpolation

```js
let firstName = "Foul";
let lastName = "Tarnished";

let greeting = `Hello, ${firstName} ${lastName}!`;

console.log(greeting);
```

```js
// 5th Call Stack Item: [1]
	// return 1
// 4th Call Stack Item: [1, 2]
	// return 2 + Add to the call stack again
// 3rd Call Stack Item: [1, 2, 3]
	// return 3 + Add to the call stack again
// 2nd Call Stack Item: [1, 2, 3, 4]
	// return 4 + Add to the call stack again
// 1st Call Stack Item: [1, 2, 3, 4, 5]
	// return 5 + Add to the call stack again
```