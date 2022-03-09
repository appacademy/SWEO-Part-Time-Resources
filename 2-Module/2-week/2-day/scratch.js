







// function someContext (param1, param2, param3){
//   console.log(param1, param2, param3)
//   // console.log(this)
//   console.log(this.firstName)
//   console.log(this.lastName)

//   return this
// }
// // someContext('Baylen', 'Zaviar', 'James')
// let someObj = {
//   firstName : 'Baylen',
//   lastName : 'Doss',
// }
// // let boundFunc = someContext.bind(someObj, 'Baylen', 'Zaviar', 'James')
// // boundFunc()

// // let myCall = someContext.call(someObj, 'Baylen', 'Zaviar', 'James')
// // console.log(myCall)
// let myArr = ['Baylen', 'Zaviar', 'James']
// let myCall = someContext.apply(someObj, ['Baylen', 'Zaviar', 'James'])
// console.log(myCall)


// boundFunc()
// someObj.func()






// class Person {
//   constructor(fisrtName, lastName){
//     this.fisrtName = fisrtName
//     this.lastName = lastName
//     this.arr = [1,2,3,4,5,6]
//   }

//   printName(cb){
//     console.log(this.fisrtName)
//     console.log(this.lastName)
//     let myCB = cb.bind(this)
//     myCB()

//     // this.arr.forEach(function(el, i){
//     //   console.log(this.arr[i])
//     // }, this)
//   }
// }


// let baylen = new Person('Baylen', 'Doss')

// function printThis(){
//   console.log(this)
// }
// baylen.printName(printThis)

// class Person{
//   constructor(){
//     this.people = []
//   }
//   addPerson(name){
//     this.people.push(name)
//   }
//   printPeople(){
//       this.people.forEach((el) => {
//         console.log(this)
//       })
//   }
//   // printPeopleArrow = () => {
//   //   console.log(this)
//   // }
// }

// let people = new Person()

// people.addPerson('Zaviar')
// people.addPerson('James')
// people.addPerson('Baylen')


// people.printPeople()


/*

*/