// -------Problem 3: 
//What happens if we didn't have `this` in the function? and try to invoke another function


//what will be the output in the terminal? 

class Cat {
    purr() {
        console.log("meow");
    }

    purrMore() {
        purr();
    }
}
let cat = new Cat();

cat.purrMore(); 
