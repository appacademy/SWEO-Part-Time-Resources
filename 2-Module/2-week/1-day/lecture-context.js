//---------Context: the object that `this` references (value of `this`)---------
//1) Context is the object that `this` belongs to, or what `this` represents when the function is executed.
//2) Whichever or wherever object invokes the function/method, that object becomes the context for `this` in that function.


// general Rules:
// If a function/method is invoked on the object it was created in, its context stays the same (method style invocation, think array.push)
// If a function/method (not invoked) is assigned to variable, its context changes
// If a function/method (not invoked) is passed as a callback, its context changes

// -------Problem 1:
