// -------Problem 6: 
//protect the global object from being accessed/mutated accidentally below by `this`
const maliciousCode = function () {
    console.log("before", this);
    this.execute = "I am a virus!";
    console.log("after", this);
}
maliciousCode();
