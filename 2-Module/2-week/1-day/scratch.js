class Person{
  constructor(name, age){
    this['name']= name
    this.age = age
  }
  showContext(){
    console.log(this)
    console.log(this.name)
    console.log(this.age)
    // cb()
  }
}

const baylen = new Person('Baylen', 27)

baylen.showContext()

// setTimeout(baylen.showContext, 100)
// let someFunc = baylen.showContext
// someFunc(function(){
//   console.log(this)
// })

// function globalContext(){
//   console.log(this)
// }
// globalContext()