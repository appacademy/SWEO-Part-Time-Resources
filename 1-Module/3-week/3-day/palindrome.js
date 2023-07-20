const sequence =      "pop";
const sequence1 =    "kayak";
const sequence2 = "yobananaboy";
const sequence3 = "this is the truth";
const sequence4 =     "abab";

/*
Im allowed to rearrange the letters
Because the last console log tells me I can
	Then I only need to make sure that there are 2 copies of each letter, 
    and maybe 1 odd letter that I could put right in the middle
    
Count all the letters, no whitespace
If I have an even amount of all letters, maybe all but 1
	Then I Could rearrange it into a palindrome
    return true
else 
	false
*/

const isPalindrome = seq => {
    seq = seq.split(" ").join('')
  	let obj = {}
  	for (let i = 0; i < seq.length; i++) {
      	let currLetter = seq[i]
    	if (obj[currLetter]) obj[currLetter] ++
      	else obj[currLetter] = 1
    }
  	let oddLetters = 0
  	for (let key in obj) {
    	let val = obj[key]
        if (val % 2 !== 0) oddLetters++
    }
  	if (oddLetters < 2) return true
  	else return false
}

console.log(isPalindrome(sequence));             // true;
console.log(isPalindrome(sequence1));            // true
console.log(isPalindrome(sequence2));            // true
console.log(isPalindrome(sequence3));            // false
console.log(isPalindrome(sequence4));            // true
// because "abab" can be rearranged into a palindrome, "abba"
