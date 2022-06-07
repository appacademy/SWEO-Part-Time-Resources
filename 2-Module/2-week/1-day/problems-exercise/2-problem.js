// -------Problem 3: 
//What happens if we didn't have `this` in the function? and try to invoke the function


//what will be the output in the terminal? 

class Cat {
    purr() {
        console.log("meow");
    }

    purrMore() {
        purr();
        // this.purr(); //if we want to access another method from the same context (object), we will need that `this` keyword
        // console.log(this);
    }
}
// let felixTheCat = new Cat();
// felixTheCat.purrMore() //??


const felixTheCat = {
    purr: function() {
        console.log("meow");
    },

    purrMore:function() {
        purr(); //can we access another property from the property that we are current at? No. We cannot access another property from this one WITHOUT `this` in it

        //if we don't have `this` in front of purr(), javascript will try to find the function, first in the purrMore's function scope.

        //in then tries to check the outside of the purrMore's function scope, which in this case, is the GLOBAL SCOPE. So is the purr() function defined in the global scope? No we didn't, so therefore we get a 'purr is not defined' error.
    }
}

felixTheCat.purrMore();