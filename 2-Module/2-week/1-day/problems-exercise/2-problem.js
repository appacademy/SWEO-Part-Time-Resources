// -------Problem 3: 
//What happens if we didn't have `this` in the function? and try to invoke the function


//what will be the output in the terminal? 

class Cat {
    purr() {
        console.log("meow");
    }

    purrMore() {
        this.purr();
        console.log(this);
    }
}
let felixTheCat = new Cat();
felixTheCat.purrMore() //??
