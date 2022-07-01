// // Plan
// - func declaration (params = str)
// - create vowels variable = "aeiouAEIOU"
// - create vowelCounter = {}
// - for loop
//   - start: i = 0
//   - end: str.length
//   - step: + 1
// - grab char (str[i])
// - conditional (is this char a vowel)
//   - if true, 
//   - conditional (is my char already tracked in vowelCounter)
//     - if true, vowelCounter[char]++
//     - if false, vowelCounter[char] = 1
// return vowelCounter

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let vowelCounter = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (vowels.includes(char)) {
            if (char in vowelCounter) {
                vowelCounter[char]++
            } else {
                vowelCounter[char] = 1
            }
        }
    }

    return vowelCounter;
}

console.log(countVowels("hello world"))
