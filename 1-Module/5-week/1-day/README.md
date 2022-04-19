# W5D1

## String Interpolation

```js
let firstName = "Foul";
let lastName = "Tarnished";

let greeting = `Hello, ${firstName} ${lastName}!`;

console.log(greeting);
```

```js
	// Call Stack 5: arr = [1]
		// return 1
	// Call Stack 4: arr = [1, 2]
		// return 2 + Enter Call Stack Again
	// Call Stack 3: arr = [1, 2, 3]
		// return 3 + Enter Call Stack Again
	// Call Stack 2: arr = [1, 2, 3, 4]
		// return 4 + Enter Call Stack Again
	// Call Stack 1: arr = [1, 2, 3, 4, 5]
		// return 5 + Enter Call Stack Again
```