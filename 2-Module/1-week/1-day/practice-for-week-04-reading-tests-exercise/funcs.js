const isFive = num => num === 5

const isOdd = num => {
    if(isNaN(num)){
        throw new Error
    }
    return num % 2 !== 0
}

 const myRange = (min, max, step = 1) => {
    let newArr = []
    for(let i = min; i <= max; i += step){
        newArr.push(i)
    }
    return newArr
 }



module.exports = {
    isFive,
    isOdd,
    myRange
}