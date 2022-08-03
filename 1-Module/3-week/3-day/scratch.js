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

// obj['name']


// let name = 'name'

//How would I print my name from the object? James
// console.log(obj.name) // James
// console.log(obj['name'])
// console.log(obj[name])

//How would I add my location, Pampa? location: Pampa
// obj['location'] = 'Pampa'
// obj.location = 'Pampa'
// console.log(obj)
//How would I change my age to 32000?
// console.log(obj)
// // obj.age = 3200
// obj['age'] = 3200
// obj.game.name = []
// console.log(obj)


//How would I add "Triton" to the cars array?
// let game = obj.game

// game.cars.push('Triton')

// obj['game']['cars'].push('triton')
// console.log(obj)

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

//dot vs bracket 
// console.log(obj.name === obj['name'])

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };


// console.log(obj[someVariable])
// console.log(obj[some + variable])

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

// if(obj['name'] !== undefined){
//   console.log('there is a string value' + obj['name'])
// }

// if('location' in obj){
//   console.log('there is a location')
// } else {
//   obj['location'] = 'Pampa'
// }

// console.log(obj)

// if('location' in obj){
//   console.log('there is a location')
// } else {
//   obj['location'] = 'Pampa'
// }

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday"
// };



// for(let i = 0; i < arr.length; i++){
//   let ele = arr[i]
// }

// for(let key in obj){
//   // console.log(key) // print the keys
//   // console.log(obj[key]) // print the values
// }

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
  number: 123,
  array: [1,2,3,4],
  object: {
    type: 'string',
    age: 28
  }
};

// let keys = Object.keys(obj)

// console.log(keys)

// let values = Object.values(obj)

// console.log(values)

// let entries = Object.entries(obj)

// console.log(entries)