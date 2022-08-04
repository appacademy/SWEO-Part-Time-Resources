// let obj = {
//   name: "James",
//   age: 28,
//   game: {
//     name: "Rocket League",
//     hours: 135,
//     Rank: "Platinum",
//     cars: [
//       "Octane", 
//       "Venom", 
//       "X-Devil",
//       "Breakout",
//       ] 
//   }
// }



// console.log(obj)


// console.log(obj)

//How would I print my name from the object?
// console.log(obj['name'])  
// console.log(obj.name)

//How would I add my location, Pampa?
// console.log(obj)
// obj.Location = 'Pampa'
// obj['location'] = 'Pampa'
// console.log(obj)

//How would I change my age to 32000?
// console.log(obj)
// obj['age'] = 3200
// obj.age = 3200
// let age = obj.age
// console.log(obj)
// console.log(age)


//How would I add "Triton" to the cars array?
// let cars = obj.game.cars
// cars.push('Triton')

// let obj = {
//   name: "James",
//   age: 28,
//   game: {
//     name: "Rocket League",
//     hours: 135,
//     Rank: "Platinum",
//     cars: [
//       "Octane", 
//       "Venom", 
//       "X-Devil",
//       "Breakout",
//       ] 
//   }
// }

// console.log(obj.game)

// for(let key in nameObject){
//   console.log(nameObject[key])
// }

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";
// // console.log(some + variable)

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// console.log(obj[someVariable]) // Oscar
// console.log(obj[some + variable]) // Mayer

// for(let key in obj){
//   console.log(key, obj[key])
// }

// console.log(obj['firstName'] === undefined) // false
// console.log(obj['location'] === undefined) // 
// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// let location = 'location'


// if(location in obj){
//   obj[location] = 'Seatle'
// } else {
//   obj.location = 'Pampa'
// }


// console.log(obj)

// if(!location in obj){
//   obj[location] = 'Seatle'
// }else {
//   obj.location = 'Dallas'
// }

// console.log(obj)

let obj = {
    name: "James",
    lastName: 'Thompson',
    age: 28,
    game: {
      name: "Rocket League",
      hours: 135,
      Rank: "Platinum",
      cars: [
        "Octane", 
        "Venom", 
        "X-Devil",
        "Breakout",
        ] 
    }
  }

  console.log(obj.age)

  // let keys = Object.keys(obj)
  // console.log(keys)

  // let vals = Object.values(obj)
  // console.log(vals)

  // let entries = Object.entries(obj)
  // console.log(entries)