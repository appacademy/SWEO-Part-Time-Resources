// Use a recursive approach to solve this problem

// Code your function here
const recursiveReverseString = str => {
    if (!str.length) return str;
  
    let res =  reverse(str.slice(1)) + str[0]
    return res
  }
  
  
//   console.log(recursiveReverseString("")); // ''
//   console.log(recursiveReverseString("a")); // 'a'
//   console.log(recursiveReverseString("everyone")); // 'enoyreve'
//   console.log(recursiveReverseString("abba")); // 'abba'
//   console.log(recursiveReverseString("thoroughly")); // 'ylhguoroht'

// function recursiveIsSorted(arr) {
//     if (arr.length < 2) return true;
//     if (arr[0] > arr[1]) return false;
//     return isSorted(arr.slice(1));
// }

// console.log(recursiveIsSorted([1, 2, 3, 4, 5])); // true
// console.log(recursiveIsSorted([5, 4, 3, 2, 1])); // false
// console.log(recursiveIsSorted([9, 7, 6, 3, 4])); // false
// console.log(recursiveIsSorted([9, 9, 9, 9, 9])); // true
// console.log(recursiveIsSorted([7])); // true
// console.log(recursiveIsSorted([])); // true


function updateOrderTotal(total,arr){
    if(!arr.length){
     return total;
   }
 let obj = arr.shift();
 if(obj.status === "add"){
   total += obj.price;
 }else if(obj.status === "remove"){
   total-=obj.price;
 }
 return updateOrderTotal(total,arr);
}


// Iterative solution - DO NOT MODIFY
function iterativeSolution(data) {
    const byCompletion = {
        complete: [], 
        incomplete: []
    };

    for (const person of data) {
        if (person.isComplete) {
            byCompletion.complete.push(person.name);
        } else {
            byCompletion.incomplete.push(person.name);
        }
    }
    
    return byCompletion;
}

// Recursive Solution
// Code your recursive function here
const recursiveSolution = (data, byCompletion = { complete: [], incomplete: []}) => {
  
	if(!data.length) return byCompletion
  
  	let person = data.shift()
      if (person.isComplete) {
          byCompletion.complete.push(person.name);
      } else {
          byCompletion.incomplete.push(person.name);
      }
  return recursiveSolution(data, byCompletion)
}





// const data1 = [
//     { name: "Johann", score: 0, isComplete: true},
//     { name: "Vanessa", score: 50, isComplete: false},
//     { name: "Ryder", score: 90, isComplete: true},
//     { name: "Dwayne", score: 100, isComplete: true},
//     { name: "Bekah", score: 0, isComplete: true}
// ];

// console.log(iterativeSolution(data1));
// // {
// //   complete: [ 'Johann', 'Ryder', 'Dwayne', 'Bekah' ],
// //   incomplete: [ 'Vanessa' ]
// // }

// console.log(recursiveSolution(data1));
// {
//   complete: [ 'Johann', 'Ryder', 'Dwayne', 'Bekah' ],
//   incomplete: [ 'Vanessa' ]
// }

// Debug the function below

function isPalindrome(string) {
    // console.log(string)
      if (string.length <= 1) return true;
      
      const cleanedString = string.replace(/ |,/g, "").toLowerCase().split('');
  
      if (cleanedString.pop() === cleanedString.shift()) {
          return isPalindrome(cleanedString.join(''));
      } 
      return false;
  }
  
  
//   console.log(isPalindrome("abba")); // true
//   console.log(isPalindrome("abc")); // false
//   console.log(isPalindrome("racecar")); // true
//   console.log(isPalindrome("A man, a plan, a canal, Panama")); // true