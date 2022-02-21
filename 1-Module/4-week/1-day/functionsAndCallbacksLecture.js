// First class Objects or First class Citizens 
//  stored in a variable 
//  Passed as an argument to a function (today)
//  Returned from a function (Later this week)

let someFunction = function(){
    console.log('I am A function')
}

// a function taking another function as a parameter
let myCallbackExample = function(anotherFunction){
    // just console logging not calling the function
    anotherFunction()
}


myCallbackExample(someFunction)


// higher order function, is a function that takes a callback 
// ie, another function as a parameter, or returns a function
// callback function, a function that is written to be passed 
// into another function

// callback function because I am going to pass it into another function
let myUpperCallback = function(array){
    return array.map(function(ele){
        return ele.toUpperCase()
    })
}
// callback function because I am going to pass it into another function
let myLowerCallback =  function(array){
    return array.map(function(ele){
        return ele.toLowerCase()
    })
}

// my higher order function that is going to take an optional 
// callback as a param
let myHigherOrder = function(array, cb){
    if(cb !== undefined){
        console.log(cb)
        return cb(array) // ['some String']
    }else {
        return array
    }
}   


console.log(myHigherOrder(['Baylen', 'James', 'Zaviar'], myLowerCallback))

