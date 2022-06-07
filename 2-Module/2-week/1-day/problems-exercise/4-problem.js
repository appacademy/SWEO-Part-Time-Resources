// -------problem 5:
//What is the context / the value of `this`


//what will be the output in the terminal? 



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