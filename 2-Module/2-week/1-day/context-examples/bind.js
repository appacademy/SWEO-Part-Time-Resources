let obj1 = { // "this" = obj1
    word: "world"
}

let obj2 = { // "this" = obj2
    word: "people"
}


function sayHello(argWord1, argWord2) { // "this" = global
    console.log(argWord1 + " " + this.word);
    console.log(argWord2 + " " + this.word);
}

// **Example 1: 
let newlyBoundSayHello = sayHello.bind(obj1)
newlyBoundSayHello('hello', 'goodbye') // "this" = obj1
// 'hello world'
// 'goodbye world'


// ** Example 2:
let otherBoundSayHello = sayHello.bind(obj2)
newlyBoundSayHello('hello', 'goodbye') // "this" = obj2
// 'hello people'
// 'goodbye people'


// **Non-bound global function:
sayHello('hello', 'goodbye') // "this" = global
// 'hello undefined'
// 'goodbye undefined'