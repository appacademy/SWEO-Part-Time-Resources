//---------Context: the object that `this` references (value of `this`)---------
//1) Context is the object that `this` inside of a function belongs to,
//or what `this` represents when the function is executed

//2) Whichever or wherever the object invokes the
//function/method (that has `this` in it), that object
//becomes the context for `this` in that function



// const helloWorld = function(){
//   console.log("helloWorld");
//   console.log(this); //console.log(global)

// }

// helloWorld(); // I'm invoking the function under the global context or the global object
//so when invoked under the global object, `this` inside helloWorld
//function represents the global object (context).
//test
// class Cat{
//   constructor(name, age){
//       this.name = name;
//       this.age = age;
//       console.log(this)
//   }

//   purr(){ //instance method
//       console.log("meow");
//   }

//   purrMore(){
//       this.purr(); //When we execute this method,
// // the key word `this` inside of purrMore refers to the OBJECT that the method is executed in.
//   }
// }

// let tomTheCat = new Cat("tommmy", 5); //instantiated a new instance (tomTheCat)
// // let tomTheCat2 = new Cat("NEW NAME", 5); //instantiated a new instance (tomTheCat)
// //that is an object ob the Cat class.
// tomTheCat.purrMore(); //what is the value of `this`
// let newFunc = tomTheCat.purrMore()
// console.log(newFunc)
// setTimeout(tomTheCat.purrMore, 1000)
//inside of that purrMore function  // what is the context? //the context: tomTheCat

//does tomTheCat have a purrMore method? Yes it does and does it also have a purr method? yes it does.
