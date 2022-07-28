// let removeEWords = function(str){
// 	let strArr = str.split(' ')
//     let resultArr = []
//     for(let i = 0; i < strArr.length; i++){
//     	let word = strArr[i]
//         let lower = word.toLowerCase()
//         if(lower.indexOf('e') === -1){
//         	resultArr.push(word)
//         }
//     }
//   return resultArr.join(' ')
// }

let hasE = function(word){
    if(word.toLowerCase().includes('e')){
        return true
    }
    return false 
}

let looper = function(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let ele = arr[i]
        if(!hasE(ele)){
            newArr.push(ele)
        }
    }
    return newArr
}

let removeEWords = function(str){
    let words = str.split(' ')
    let finalArr = looper(words)

    return finalArr.join(' ')
}


// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('EntEr the building')); // 'building'

let yell = function(word){
    return word.toUpperCase()
}

let whisper = function(word){
    return word.toLowerCase()
}


let echo = function (string) {
    return yell(string) + ' ... ' + string + ' ... ' + whisper(string)
} 

 console.log(echo('Hello')); // 'HELLO ... Hello ... hello
 console.log(echo('PiNeAppLE')); // 'PINEAPPLE ... PiNeAppLE ... pineapple