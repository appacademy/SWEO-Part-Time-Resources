// -------Problem 4: 
//what will be the output in the terminal? 

function purr(){ //note this function here.
    console.log("outside-meow");
}

class Cat {
    purr() {
        console.log("meow");
    }

    purrMore() {
        purr();
    }
}
let cat = new Cat();

cat.purrMore(); //???