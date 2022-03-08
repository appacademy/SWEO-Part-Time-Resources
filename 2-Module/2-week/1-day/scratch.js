class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  showContext(cb){
    console.log(this)
    console.log(this.age)
    console.log(this.name)
    // cb()
  }
}

let baylen = new Person('Baylen', 27, )


// setTimeout(baylen.showContext, 100)
// function something(){
//   console.log(this)
// }

baylen.showContext()

// context()

