# W2D3

Make sure to call us into your breakout room during practice time if you are at
all confused with what you are working on. We don't know how and when to help if
you don't ask!

## Helper Functions 30m

- Remove E Words: 'hello world' -> 'world'
- Echo: 'Hello' -> 'HELLO ... Hello ... hello'
- FizzBuzz: num in range (inclusive) divisible by 3 || 5 && !both


```js

// fizzBuzz
let fizzBuzz = function(max) {
    let nums = [];

    for (let i = 1; i < max; i++) {
        if (isDivByButNotBoth(i,3,5)) {
            nums.push(i);
        }
    }

    return nums;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

let isDivByButNotBoth = function(number, divider1, divider2){
	return (number % divider1 === 0 || number % divider2 === 0) && !(number % divider1 === 0 && number % divider2 === 0 )
}

// let isDivByButNotBoth = function(number){
// 	return (number % 3 === 0 || number % 5 === 0) && !(number % (3 * 5) === 0)
// }

// removeEwords
let removeEWords = function(sentence) {
    let words = sentence.split(' ');

    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!wordContainsE(word)) {
            filtered.push(word);
        }
    }

    return filtered.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

let wordContainsE = function(word){
	return word.toLowerCase().includes('e')
}

// echo
let echo = function(string) {
	console.log(stringUpper(string) + " ... " + string + " ... " + stringToLower(string))
};

let stringToUpper = function(string){
	return string.toUpperCase()
}

let stringToLower = function(string){
	return string.toLowerCase()
}

```

---

## Practice 1 (30m)

- [Two Sum Recall]
- [Reverse Sentence]
- [Initials]

## Discussion 1

- Questions?
- Two Sum Walkthrough

---

## Practice 2 (30m)

- [Two Dimensional Product]
- [Popper]
- [Choose Primes]

## Discussion 2

- Questions?
- Two Dimensional Product

---

## Practice 3 (30m)

- [Longest Word]
- [Abbreviate]
- [Product Array]

## Discussion 3

- Questions?
- Longest Word Walkthrough

---

## EOD

- Tom will be in the main room to handle group questions
- Sign up for 1:1's on the google sheet!

[two sum recall]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/two-sum-recall
[reverse sentence]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/reverse-sentence
[initials]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/initials
[two dimensional product]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/two-dimensional-product
[popper]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/popper
[choose primes]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/choose-primes
[longest word]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/longest-word
[abbreviate]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/abbreviate
[product array]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-2---intermediate-functions/product-array
