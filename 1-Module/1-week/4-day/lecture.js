// // // your code here
// // // Conditionals!

// // // let number = 5;
// // function isFive(number){
// //   if (number > 5) {
// //       console.log("Number is greater than to 5!");
// //   } else if (number < 5) {
// //       console.log("Number is less than 5!");
// //   } else {
// //       console.log("Number is exactly 5!");
// //   }
// // }

// // isFive(5)

// // loops
// // -- While!

// // let i = 1;

// // while (i <= 5){
// // 	console.log(i)
// //     i++
// //   //i = i + 1;
// // }

// // for (let i = 1; i <= 5; i++){
// // 	console.log(i)
// // }

// let words = "Journey before destination"

// // for(let banana = 0; banana < words.length; banana = banana + 1){
// // 	console.log(words[banana])
// // }

// // let banana = 0;

// // while(banana < words.length){
// // 	console.log(words[banana])
// //     banana++
// // }

// // arrays!!
// // let arr = [1,2,3,4]
// // console.log(arr.length)

// // let arr2 = [
// // 	42,
// //     false,
// //     "Let's go Pens!",
// //     undefined,
// //     null,
// //     [[1], 2, [3]],
// // ]

// // console.log(arr2[5][0][0][0][0])

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// // let arr4 = arr1 + arr2 + arr3; // bad combine!
// // arr1[arr1.length] = 0
// // arr1[arr1.length] = -1
// // arr1.push(20)
// // arr1.pop()
// // arr1.pop()
// // arr1.pop()
// // arr1.pop()

// let arr4 = arr1.concat(arr2, arr3)

// console.log(arr4)
// // console.log(arr1)

// let arr5 = arr4.slice(0, 4)
// console.log("ARR 5!!", arr5)
// console.log("----------------------")
// console.log("AFTER SLICE!:", arr4)
// arr5[0] = "REASSIGNED!"
// console.log("ARR 5!!", arr5)

// PROMPT! sumArray
// write a function that returns the sum of all numbers in a provided array
// you can assume the array will only contain numbers

function sumArray(nums){
    console.log("VALUE OF NUMS:")
    console.table(nums)
    let sum = 0;
    // for(let index = 0; index < nums.length ; index++){
    // 	console.log("CURRENT INDEX :", index)
    //   let currNum = nums[index];
    //   sum = sum + currNum;
    //   console.log("CURRENT SUM   :", sum)
    // }
    while (nums.length > 0){  // while array of nums has elements in it,
        let currNum = nums.pop() // pop off last element of array, store in currNum,
      console.log("CURRENT NUMBER!", currNum)
      sum = sum + currNum; // reassign sum to be itself plus value of currNum
      console.log("CURRENT SUM   :", sum)
      console.log("-----------------------------")
      console.log("nums at end of lop:", nums)
      console.log("-----------------------------")
    }
    
    return sum;
  }
  
  console.log(sumArray([1,2,3,4]))
  
  
  
  
  
  
  