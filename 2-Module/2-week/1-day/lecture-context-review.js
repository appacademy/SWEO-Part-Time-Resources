//---------Context: the object that `this` references (value of `this`)---------

//1) Context is the object that `this` belongs to, or what `this` represents when the function is executed.

//2) Whichever or wherever object invokes the function/method (that has `this` in it), that object becomes the context for `this` in that function.

class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    purr(){
        console.log("meow");
    }
    purrMore(){
        this.purr();
    }
}

let felixTheCat = new Cat(); //instantiating the class to create an instance of felixTheCat
felixTheCat.purrMore(); //for the felixTheCat.purrMore(), what is the context of `this`?
//felixTheCat becomes the context for the value of `this` 

//does `this` (felixTheCat) contain the .purr() method? yes it does.




// If a function/method is invoked on the object it was created in, its context stays the same (method style invocation)
    //the object becomes the context for whatever `this` is.

// If a function/method (not invoked) is assigned to variable, its context changes

// If a function/method (not invoked) is passed as a callback, its context changes