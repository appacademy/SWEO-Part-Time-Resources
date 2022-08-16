let firstName = "Doctor";
let lastName = "Strange";

let greeting = `hello, ${firstName} ${lastName}`
// const oldWay = 'hello, ' + firstName + ' ' + lastName

const greetingFunc = str => str

const newGreeting = `${greeting} my name is ${greetingFunc('james')}`

console.log(newGreeting)