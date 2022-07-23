// Function Declaration Syntax

// function printer (str) {
//   console.log(str);
// }

// Function Expression Syntax

// let printer = function (str) {
//   console.log(str);
// }

// printer('hello');

// mutable
// Array and Objects
// let myArr = ['james', 23, 'thompson']
// console.log(myArr)
// myArr[1] = 'Ray'
// console.log(myArr)
// console.log(myArr)
// console.log(myArr)
// console.log(myArr)
// console.log(myArr)
// myArr[2] = 'something else'
// console.log(myArr)



// // immutable
// // Strings, nums, bools, NaN, null
// let myStr = 'JRT'
// console.log(myStr)
// myStr[1] = 'N'
// console.log(myStr)


//PUSH
// let myArr = ['james', 'Ray']
// console.log(myArr.push('Thompson'))
// myArr.push(['innerArr'])
// myArr.push(28)
// myArr.push(NaN)
// console.log(myArr)
// let pushFunction = function(arr, str){
//   arr.push(str)
//   return arr
// }

// console.log(pushFunction(myArr, 'Thompson'))

// POP
// let myArr = ['some string', 12, 132, 'first pop']
// let poppedElement = myArr.pop()
// console.log(myArr[myArr.length -1])
// console.log(myArr) // ['some string', 12, 132]
// console.log(poppedElement) // 
// myArr.pop()
// console.log(myArr)
// // console.log(myArr)
// console.log(poppedElement)

// unshift

// let myArr = ['unshift', 12, 132, 'string2']
// myArr.unshift('element added to front ') // 
// myArr.unshift('element added to front 2') // 
// myArr.unshift('element added to front 3') // 
// console.log(myArr)


// shift
// let myArr = ['shift', 12, 132, 'string2']
// let firstEle = myArr.shift()
// console.log(myArr)
// // console.log(firstEle)
// myArr.unshift(firstEle)
// console.log(myArr)


// nested loop

// let myArr = ['a', 'b', 'c', 'd']

// for(let i = 0; i < myArr.length; i++){
//   console.log(myArr[i], )
//   for(let j = 0; j < myArr.length; j++){
//     console.log(myArr[j], '---inner---') 
//   }
//   console.log('-----outer loop ---- ')
// }

// ------------- PRACTICE ASSESSMENT --------------

/* 
understanding the problem
function that takes in a word and operation 

if  operation is capitalize 
	capitalize the first letter in the word
    
if the operation is uppercase
	we need to capitalize every letter in the word

if the operation is double 
	make the word appear twice
    
if the operation is reverse 
	we need to reverse the order of the word
    
make a plan
check if the operation is capitalize
	save the first letter in a variable
    save the rest of the word in a variable
	
	return the word with the first letter capitalized added onto the rest of the word

check if the operation is uppercase
	return the word with all letters uppercased
    
check if the operation is double
	return the word added to the word twice??
    
check if the operation is reverse
	loop over the word
    do something to reverse the word????
    return the word reversed
otherwise return word

*/

// function stringChanger(word, operation) {
//   if(operation === "capitalize"){
//   	let firstLetter = word.slice(0, 1)
//     let ending = word.slice(1)
//     firstLetter = firstLetter.toUpperCase()
//     return firstLetter + ending
//   }else if(operation === 'uppercase'){
//   	return word.toUpperCase()
//   }  else if(operation === "double"){
//   	return word + word
//   }else if(operation === 'reverse'){
//   	// let arr = []
//     let reversed = ''
//     for(let i = word.length - 1; i >= 0; i--){
//     	let ele = word[i]
//         // arr.unshift(ele)
//       	reversed += ele
//     }
//     // let reversed = arr.join('')
//    	return reversed
//   } else {
//   	return word
//   }
    
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");