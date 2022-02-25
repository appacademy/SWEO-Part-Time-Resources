# W2D4

## Warm Up

Take 15 minutes and work on the problem described in this prompt.

>Write a function uncompress(str) that takes in a "compressed" string
>as an arg. A compressed string consists of a character immediately
>followed by the number of times it appears in the "uncompressed" form.
>The function should return the uncompressed version of the string.
>See the examples.
>
>`console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'`
>`console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'`
>`console.log(uncompress('b1o2t1')); // 'boot'`
>
>Hint: you can use the built-in Number function
>should convert a numeric string into the number type.
>For example. Number("4") // => 4

We will come back and walk through this when the 10 minutes are up!

created two functions
one will take in a string and the other as well
declared four variables

create a loop that would iterate through newArrays length
created a checker an if else statement
if the array sees a number it will an operation to remove number and push characters
to the array depending on number

return new array with pushed characters

```js

let uncompress = function(str){
	let numbers = '123456789'
	let strSplit = str.split('')
	let num = 0;
	let filtered = [];

	for(let i = 0; i < strSplit.length; i++){
		let char = strSplit[i]
		if(numbers.includes(char)){
			num = numChecker(char);
			let letter = strSplit[i - 1]
			for(let j = 0; j < num; j++){
				filtered.push(letter)
			}
		}

	}
	return filtered.join('')
}

let numChecker = function(str){
	return Number(str)
}


```

---

## Practice 1 (30m)

- [Rotate]
- [Addition Mutator]
- [Alternating Words]

## Discussion 1

- Questions?
- Rotate Walkthrough

---

## Practice 2 (1hr)

These are a pretty large step up in difficulty. Make sure to request help when you are working through these problems!

- [Repeating Translate]
- [Max In Matrix]
- [Max In Column]

## Discussion 2

- Questions?
- Max In Matrix Walkthrough
- Max In Column Walkthrough

---

[Rotate]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/rotate
[Addition Mutator]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/addition-mutator
[Alternating Words]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/alternating-words
[Repeating Translate]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/repeating-translate
[Max In Matrix]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/max-in-matrix
[Max In Column]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/max-in-columns
