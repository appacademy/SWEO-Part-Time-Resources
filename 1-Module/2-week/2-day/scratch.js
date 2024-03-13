// -------------------------------------- SPLICE --------------------------------------

// let myArray = ['apple', 'orange', 'watermelon', 'grape', 'banana', "fruitX", "fruitY"]


// let myFunction = function() {
//     return "hello"
// }

// let cutFruits = myArray.splice(0, myArray.length - 1, myFunction, "fruitZ")

// console.log(myArray)
// console.log(cutFruits)



// ---------------------------------- SPLIT and JOIN ----------------------------------

// // SPLIT
// let string = "hello_world_it's_good_to_see_you_"
// let splitArray = string.split("asdfasdfasdf") // this will split the string using the "_" as the splitter

// console.log(splitArray)


// let string = "I dream of electric sheep"
// let splitArray = string.split("") // this will split the string using ""

// console.log(splitArray) // Prints: ???


// // JOIN
// let array = ["hello", "world", "it's", "good", "to", "see", "you"]
// let joinedString = array.join(",") // this will join the array using " "

// console.log(joinedString) // Prints: "hello world it's good to see you"



// let array = ["hello", "world", "it's", "good", "to", "see", "you"]

// let joinedString = array.join(" ") // this will join the array using ","

// // console.log(joinedString)

// let splitAgain = joinedString.split(" ") // this will split the joinedArray for each " "

// console.log(splitAgain) // Prins: ???


// let string = "ZhZeZzzzlZloZZzzzZZZ".toLowerCase()
// console.log(string.split("z".toLowerCase()))

// let splitArray = string.split("Z").join("")
// // let joinAgain = splitArray.join("")

// console.log(splitArray)

// let splitArray = string.split("")
// splitArray[3] = "l"
// let joinAgain = splitArray.join("")

// console.log(joinAgain)


let string = 'Zhelloz'

let splitArray = string.split("Z").join("")
let splitArrayAgain = splitArray.split('z').join("")

console.log(splitArrayAgain)


console.log(string)
