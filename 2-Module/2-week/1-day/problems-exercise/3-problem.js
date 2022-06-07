// -------Problem 4: 
//what will be the output in the terminal?
//outside-meow 

function purr(){ //note this function here.
    console.log("outside-meow");
}

class Cat {
    purr() {
        console.log("meow");
    }

    purrMore() {
        //first looks for purr defined in purrMore's function scope.
        //if it doesn't find it, then it will go outside of the function scope (which in this case is the global scope).
        purr(); //cannot access the `purr` method in the cat object without the context of `this`
    }
}
let cat = new Cat();

cat.purrMore(); //???