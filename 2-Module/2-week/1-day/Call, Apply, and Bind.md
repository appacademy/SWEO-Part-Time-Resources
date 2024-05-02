### Binding Functions to an Object (Setting Function Context to an Object)
Functions defined under an object or a class (another function) will use the context of the object it was created in. However, we can also change the context of a function at runtime, either before or while executing the function. 

**How to:** 
To bind a function to an object and make it an object method, we can use the `bind` function. Here is a simple example: 
```JavaScript
let person = { // person object  
name: "John"
}

let person2 = { // person 2 object 
name: "Anthony"
}


function printName() {
// this: "global"
//console.log(this) // global [function] { } //
console.log(this.name) // global [function] // 
}


printName() // undefined 
```

We cannot call the `printName()` function without associating the function with the object `person`. To do this we must create a bound method of the function `printName` to person, using the following code: 
```JavaScript
let boundPrintName = printName.bind(person)

boundPrintName() // this: person - "John"
boundPrintName() // prints out "John"
```


<hr>

### Calling a function with a different context 
We can use the `call` and `apply` methods to call a function as if it was bound to an object. The difference between the `call` and `apply` functions is only by how they receive their arguments - the `call` function receives `this` arguments first, and afterwards the arguments of the function, whereas the `apply` function receives the `this` argument first, and an array of arguments to pass on to the function as a second argument to the function. 

For example, let's call `printName` with person as the context using the `call` method: 
```JavaScript
let person = {
name: "John"
}

function printName() {
console.log(this.name)
}
let boundFunction = printName.bind(person);
boundFunction();
let boundContextReturnValue = printName.call(person) // prints out "John"
boundContextReturnValue// not a function
printName.apply(person) // print out "John"
```
### call/apply vs bind
The difference between `call`/`apply` and `bind` is that `bind` returns a new function identical to the old function, except that the value of `this` in the new function is now the object it was bound to. `call`/`apply` calls the function with `this` being the bound object, but it does not return a new function or change the original, it calls it with a different value for `this` 

For example: 
```JavaScript
let boundPrintName = printName.call(person);    //boundPrintName gets printName's return value (null)
boundPrintName();                               //doesn't work because it's not a function, it's null

let newContextFunction = printName.bind(person);  
newContextFunction(); // "John"
//returns a new function, but nothing is using it so it's useless
printName();                                    //throws error because this.name is not defined

```

Think of `call` as executing the return value of `bind` 

For example:
```JavaScript
printName.call(person);     //is the same as
printName.bind(person)()   //executes the function returned by bind
```
