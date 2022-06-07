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

// cat.purrMore(); //gives us a reference error because this method does not exist in the global scope.

//does purr() exist in the purrMore() function scope (is there a method defined in purrMore that is called purr?) --> looks otuside of that purrMore() and it looks into the global scope. 
//Global scope have a function declaration called purr()?


const felixTheCat = {
    purr: function(){
        console.log("meow");
    },
    purrMore: function(){
        this.purr(); //a property cannot access another property without `this` keyword
    }
}


felixTheCat.purrMore()
