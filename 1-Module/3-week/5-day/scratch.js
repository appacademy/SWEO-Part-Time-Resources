// let array = [1,2,3,4,5,6,7]

// let myForEach = function(arr){
//     let sum = 0
//     let newArr = []
//     arr.forEach(function(ele){
//         if(ele % 2 === 0) newArr.push(ele)
//     })
//     return newArr
// }
// console.log(myForEach(array))

// let myMap = function(arr){
//     let mapped = arr.map(function(el){
//         return el  * 3
//     })
//     return mapped
// }

// console.log(myMap(array))

// let strArr = ['hi', 'my', 'name', 'is', 'james']

let uppered = function(arr){
    let mapped = arr.map(function(ele){
        return ele.toUpperCase()
    })
    return mapped
}

// console.log(uppered(strArr))

// let words = ['bike', 'skateboard','scooter', 'moped']

// let longFilter = function(arr){
//     let filteredArr = arr.filter(function(el){
//         // if(el.length > 5){
//         //     return true
//         // } else {
//         //     return false
//         // }
//         return el.length > 5
//     }) 

//     return filteredArr
// }

// console.log(longFilter(words))

// let array = [1,2,3,4]
// let arr2 = [] // 0

// let sumReduce = function(arr){
//     let sum = arr.reduce(function(acc, ele, i){
//         let doubled = ele * 2
//         return acc += doubled
//     }, 0)
//     return sum
// }

// console.log(sumReduce(array))