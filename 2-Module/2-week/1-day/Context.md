
### What is context? 
In JavaScript, "context" refers to an object. Within an object, the keyword "this" refers to that object (i.e. "self"), and provides an interface to the properties and methods that are members of that object. When a function is executed, the keyword "this" refers to the object that the function is executed in. 


### Scope vs. Context
Every function in JavaScript has both a scope and a context associated with that function. Scope refers to the visibility and availability of variables, whereas context refers to the value of the `this` keyword when code is executed.
- In other words, the `this` keyword refers to the scope that a function belongs to. 


### Context Scenarios
- When a function executes in the global context, "this" refers to the global, or "window" object.
- When a function is a method of an Object, "this" refers to that object (unless it is manually executed in the context of a different object). 
- When a function executes inside of another function (no matter how deeply nested), "this" refers to the object whose context within which it is executed. 
- When you instantiate a constructor function, inside of the instance object, "this" refers to the instance object. 