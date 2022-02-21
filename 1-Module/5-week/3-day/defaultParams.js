// const myDefault = (string, array=[]) => {
//     console.log(array)
// }
// myDefault('Baylen')




// const range = (num, array=[]) => {
//     // let something = []
//     console.log(num)
//     if (num === 0){
//         return array
//     }
//     // updating array to equal the array with number inside
//     array.push(num)
//     // calling the function again with my new array passed in
// return range(num-1, array)
// }
// const range = (num, array=[], i = 0) => {
//     console.log(num)
//     if (num === 0){
//         return array
//     }
//     // updating array to equal the array with number inside
//     array.push(num)
//     // calling the function again with my new array passed in
//     return range(num-1, array, i + 1)
// }

// console.log(range(5))


// const myObj = {
//     name : 'Baylen',
//     name2 : 'Zaviar'
// }

// const myrecuseObj = (obj, array=Object.keys(obj)) => {
//     console.log(array)
//     if(array.length === 0) {
//         return 0
//     }
//     let key = array.shift()
//     console.log(obj[key])
//     myrecuseObj(obj, array)
// }
// myrecuseObj(myObj)
// const myDefault = (string, word=[]) => {
//     console.log(word)
// }


// myDefault('Hello')

// const recursiveMyRangeBackwards = (num) => {
//     if(num === 0){
//         return []
//     }

//     return [num].concat(recursiveMyRangeBackwards(num -1))
// }
const recursiveMyRangeBackwards = (num, anything=[]) => {
    if(num === 0){
        return anything
    }
    anything.push(num)

    return recursiveMyRangeBackwards(num -1, anything)
}

console.log(recursiveMyRangeBackwards(5))

// const myDefault = (string, array = myDefault(string, myDefault(string, []))) => {console.log(array)}

// const myDefault = (string, array = myDefault(string, [])) => {
//     console.log(string)
//     console.log(array);
//   }
  
// myDefault('hi')



// const me  = () => {
//     console.log('Baylen')
// }

// me.something = () => {
//     console.log('Zaviar')
// }

// me()
// me['something']()













