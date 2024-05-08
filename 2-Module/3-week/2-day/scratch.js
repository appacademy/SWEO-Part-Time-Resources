// Big O Examples

// O(1)
// returns element of an input array given the index
function getElement(arr, index){
    return arr[index]
}

// O(1)
// adds input element to end of input array
function addElement(arr, element){
    arr.push(element)
}

// O(n)
// adds 5 to every element in the array
function addFiveToArray(arr, callback){
    arr.forEach((index) => {
        arr[index] = callback(arr[index])
    })
}

// O(n)
// prints every value of array
function printElement(arr){
    arr.forEach((el) => {
        console.log(el)
    })
}
