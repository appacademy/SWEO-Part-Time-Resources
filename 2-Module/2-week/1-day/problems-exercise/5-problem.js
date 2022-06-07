// -------problem 5:
//What is the context / the value of `this`
// since the global object method of setTimeout is invoking the method, then `this` inside that method becomes the global object. `this` ==> the global object


//what will be the output in the terminal? 



class Cat {
    constructor(){
        this.hungry = true;
    }

    purrMore() {
        console.log(this); //console.logs the global object
        console.log(this.hungry); //global object (`this`) does not have a field called "hungry"
        this.hungry = false; //create a field in the global object called "hungry" and give it the value of true
        console.log(this.hungry);
        console.log(this); //console.logs the global object
        
    }
}
let cat = new Cat();

global.setTimeout(cat.purrMore, 3000);   //output?