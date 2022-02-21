// 01 create a function that takes an array of values,and an array of keys as params, 
//and returns an object where each key in the key array has a value of its same index in the value array


function keyValueArray(){
    //your code here
}

console.log(keyValueArray(['name','height'], ['baylen', '6ft'])) // {name : 'baylen', height : '6ft'}


// create a function that takes an array as a param
// return an object in wich the keys ore the index's of the array 
// and the value is the actual element of the array 

function indexObjectBuilder(array){
    // your code here
}

console.log(indexObjectBuilder(['baylen', 'zaviar', 'jameson'])) // {0:'baylen', 1: 'zaviar', 2: 'jameson'}

// Create a function that takes an object,
// that object will have a key of names and that key will have a value of an array of names
// loop through that array, and transform all of the names to ALL UPPERCASE

function nameCapitalizer(obj){
    // your code here
}

let namesAndSuch = {
    day : 'thursday',
    names : ['baylen', 'james', 'zaviar'],
    cohort : 'janPT2022',
}
console.log(namesAndSuch) /*
let namesAndSuch = {
    day : 'thursday',
    names : ['baylen', 'james', 'zaviar'],
    cohort : 'janPT2022',
}
*/
nameCapitalizer(namesAndSuch)
console.log(namesAndSuch) /*
let namesAndSuch = {
    day : 'thursday',
    names : ['BAYLEN', 'JAMES', 'ZAVIAR'],
    cohort : 'janPT2022',
}
*/


/*
create a function that takes an array of objects as a param,
the function should return true if every single object in the array has exactly two key value pairs
else return false 
*/

function exactlyTwoKeyValuePairs(arryOfObjs){
    // your code here
}

let arrayObjs1 = [
    {
        key1 : 'value1',
        key2 : 'value2'
    },
    {
        key1 : 'value1',
        key2 : 'value2'
    },
    {
        key1 : 'value1',
        key2 : 'value2'
    },
    {
        key1 : 'value1',
        key2 : 'value2'
    },
]
console.log(exactlyTwoKeyValuePairs(arrayObjs1)) // true

let arrayObjs2 = [
    {
        key1 : 'value1',
        key2 : 'value2'
    },
    {
        key1 : 'value1',
        key2 : 'value2'
    },
    {
        key1 : 'value1',
        key2 : 'value2'
    },
    {
        key1 : 'value1',
        key2 : 'value2',
        key3 : 'value3'
    },
]
console.log(exactlyTwoKeyValuePairs(arrayObjs2)) // false




// 