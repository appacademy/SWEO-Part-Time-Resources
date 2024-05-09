// Big O examples for space

// O(1)
function addNums(arr){ // return the sum of all numbers in array
    let total = 0;
    let spaceCounter = 1;
    for(let i = 1; i <= arr.length; i++){
        total += arr[i]
    }
    console.log(`addNums(): Input size: ${arr.length}, spaceCounter: ${spaceCounter}`)
    return total
}

// O(n)
function addFive(arr){
    let spaceCounter = 0
    const result = arr.map((el) => {
        spaceCounter++
        return el + 5
    })
    console.log(`addFive(): Input size: ${arr.length}, spaceCounter: ${spaceCounter}`)
    return result
}

// O(n^2)
function nestedPush(arr){
    let resultArr = [] // O(1)
    let spaceCounter = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            spaceCounter++
            resultArr.push(j)
        }
    }
    console.log(`nestedPush(): Input size: ${arr.length}, spaceCounter: ${spaceCounter}`)
}

//create increments to test space complexity
let increment = 100
for(let i = increment; i < 10 * increment ; i += increment){
    let arr = []
    for(let j = 0; j < i; j++){
        arr.push(j)
    }
    addNums(arr)
    console.log('---------------------------')
    addFive(arr)
    console.log('---------------------------')
    nestedPush(arr)
    console.log('---------------------------')
}
