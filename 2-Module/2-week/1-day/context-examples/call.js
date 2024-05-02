let obj = { // "this" = obj 
    word: "world"
}

function sayHello(argWord1, argWord2) { // "this" = global
    console.log(argWord1 + " " + this.word);
    console.log(argWord2 + " " + this.word);
}


// **Bound context - immediately invoked (apply):
sayHello.call(obj, 'hello', 'goodbye') // execute func (does not return func copy) // "this" = obj
// 'hello world' 
// 'goodbye world'


// **Non-bound global function:
sayHello('hello', 'goodbye') // "this" = global
// 'hello undefined'
// 'goodbye undefined'