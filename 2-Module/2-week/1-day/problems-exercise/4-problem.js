// -------problem 5:
//What is the context / the value of `this`
//it is the setTimeout object that is from our global object's setTimeout method.


//what will be the output in the terminal? 
//timeoutObj
//"hungry" property in the timeoutObj with the value of undefined
//"hungry" property in the timeoutObj with the value of false
//timeoutObj
//


class Cat {
    constructor(){
        this.hungry = true;
    }

    purrMore() {
        console.log(this); //??
        console.log(this.hungry); //??
        this.hungry = false; 
        console.log(this.hungry); //??
        console.log(this); //??
        
    }
}
let cat = new Cat();

global.setTimeout(cat.purrMore, 3000);  
// console.log(global);

console.log(cat.hungry)