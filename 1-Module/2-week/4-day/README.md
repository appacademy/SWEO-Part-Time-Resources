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
>`console.log(uncompress('b1o2t10')); // 'bootttttttttt'`
>
>Hint: you can use the built-in Number function
>should convert a numeric string into the number type.
>For example. Number("4") // => 4

1. lets start off by writing down a function
2. that function takes in one argument and that argument is a string
3. it will be a character followed by a number
4. odds are characters and evens are numbers
5. return a string as an answer
6. loop through the string and look at each character.
7. if we find a character save that character and then if we find a number repeat the saved character
   that many times
8. if we are in an odd index we know its going to be a character //
9. str.split('') // ['x', '3', 'y', '4', 'z', '2']
10. str.split('') // ['b', '1', 'o', '2', 't', '1', '0'] //
11. a character will always be from a-z
12. we can create a variable that would a string that can hold a number it
13. we can initialize a numbers string and use numbers.includes('char') to see if its a number


// we would check every 2 index values
// and see if one of them is a number and one of them isnt
// we would use a .repeat(n) function. that would repeat n number of times
// either wise we would use a helper function for repeat
// check if one is a number or isnt we would push to result
// if its a number greater than 9 we would repeat x10
// push that into the word
// would increment i one additonal time so we would skip it

```js
let uncompress = function(str){
	let result = []

	for(let i = 1; i < str.length; i+=2){ // because we would check index of 1 cause 0 is a
		let word;						  // char
		if(Number(str[i - 1]) && Number(str[i])){ // we are comparing if in the example we
												  // passing 'x' then number would
												  // result to NaN which would be false
												  // if case both are numbers are true
												  // then we know its 10
			word = str[i + 1].repeat(10)
			i++ // we do this to offset the index by 1
		} else {
			word = str[i - 1].repeat(str[i]) // because i would be where that single digit
		}
		result.push(word)
	}
	result.join(' ')
}

```


We will come back and walk through this when the 10 minutes are up!

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
