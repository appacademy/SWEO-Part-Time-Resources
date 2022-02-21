const myOldWy = (name) => {
    return 'Hello ' + name
}
const zaviar = () => {
    return 'I am ZAVIAR'
}


// const myNewWay = (name) => {
//     return `Hello ${name} I am still just a normal ${zaviar()} ${
//         () => {
//             return 'I am the end of the string'
//         }
//     } ${eval('2 + 2')}`
// }
const myNewWay = (name) => {
    return `Hello ${name} `
}

console.log(myOldWy('Baylen'))
console.log(myNewWay('Baylen'))