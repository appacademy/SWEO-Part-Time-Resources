// string interpolation
// template literals

let str = `Hello world!`
let str1 = 'Hello world'
let str2 = "Hello world"

// substitutions syntax ${}
// any jsx expression

let example = `${str}, I love javascript, ${"hi there"}`

let func = function(){
	return "Hi im a function inside this substition"
}

let functionLiteral = `${function(){return "Hi im a function inside this substition"}}`
// console.log(example)
let functionLiteral2 = `${func()}`

// console.log(functionLiteral2)

let name = 'Alex'
let lastName = 'Betita'

// concatenation
let example1 = name + ' ' + lastName

// string literal
let example2 = `${name} ${lastName}`

// console.log(example1)
// console.log(example2)

let callbackFunction = function(str){
	return str[0].toUpperCase() + str.slice(1)
}

let test = `Hello World, my favorite programming language is ${callbackFunction("javascript")}`

console.log(test)
