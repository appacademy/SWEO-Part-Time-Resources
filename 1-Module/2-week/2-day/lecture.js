// Strings!
// string.split() >> ??
let string1 = "encoded-utf-8-this-is-my-string-it-has-dashes-end-transmission"
let wordsArr1 = string1.split('-')
console.log(wordsArr1)
let encodingWords = ["encoded", "utf", "8", "end","transmission"]
let goodWords = []
// (control variable; condition to loop while true; how do we make it not true?)
// for (let i = 0      ; i < wordsArr1.length        ; i++ ){
//     // console.log("current i:", i)
//     let currentWord = wordsArr1[i]
//     //   dataset       includes   target? -> true/false
//     // adding !
//     if (!encodingWords.includes(currentWord)){
//         console.log(currentWord, "is not used to encode the string! adding to result...")
//         goodWords.push(currentWord)
//     } else {
//         console.log(currentWord, "is known to be used to encode strings! skipping...")
//     }
// }
// console.log("output:")
// console.table(goodWords)
// let goodString = goodWords.join(" ")
// console.log("string:")
// console.log(goodString)
// // let quote = "\"this is a quote!\""
// // console.log(quote)

// array.splice!
let nums = [1,5,8,10,16,24]
// let start = nums[0]
let end = nums[nums.length - 1]
let currIndex = 0;
// nums.splice(0,0,2)
console.log(nums)
while(currIndex + 1 < end){
    if (nums[currIndex] !== currIndex+1){
        console.log(nums.splice(currIndex, 0, currIndex + 1))
    }
    currIndex = currIndex + 1
}
console.log(nums)