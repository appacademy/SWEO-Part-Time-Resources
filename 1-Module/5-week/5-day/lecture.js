function sayHey(str){
	return "Hey"
}



function makeAddLib(verb,adj,noun){
	let noun2 = "hey"
	let noun3 = "you"
	return `i shall ${verb} to the ${adj} ${sayHey(noun2) }`
}


// let arr = ["Hello", "Crazy", "Cool", "World"] // []

/* Iterative Solution */
// function printArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }
// printArr(arr)

/* Recursive Solution */
// function someFunc(arr){
//     if(arr.length == 0){
//         return undefined
//     }
//     console.log(arr[0])
//     someFunc(arr.slice(1))
//     // return undefined : Implicit Return
// }
// someFunc(arr)

// end program


// String Interpolation Vs. Concatenation (Just some syntactic sugar)
let name = 72
console.log(`Hello ${undefined} More text`)
console.log("Hello " + undefined + " More text")
