// // SPLIT AND JOIN!
// // split is part of a string, use it to break into an array with
// // a given delimeter -->> target?

// let myStr = "enc-utf8-begin-This-is-a-string-that-I-am-making-right-now-in-class-endenc"
// let encodingData = ["enc", "utf8", "begin", "endenc"]
// let myArr = myStr.split("-")
// let filteredWords = [];
// for (let i = 0; i < myArr.length; i++) {
//     let currWord = myArr[i]
//     // if(!encodingData.includes(currWord)) {
//     //     filteredWords.push(currWord)
//     //     //more code goes here
//     // }
//     if (!encodingData.includes(currWord)) filteredWords[filteredWords.length] = currWord
// }
// console.table(filteredWords)
// let filterString = filteredWords.join(" ")
// console.log(filterString)

let nums = [1,5,6,8,16,24]
let start = nums[0]
let end = nums[nums.length-1]
console.log(nums)
let currIndex = 0
while (currIndex + start <= end){
    if (nums[currIndex] !== (currIndex + start)){
        // console.log("currIndex", currIndex)
        // console.log("nums", nums[currIndex])
        // console.log(currIndex + 1)
        nums.splice(currIndex, 1, currIndex + start)
    }
    currIndex++
}
console.table(nums)
