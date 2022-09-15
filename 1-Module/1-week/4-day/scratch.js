//keywords if else if else
// // let animal = 'turtle'
// let animal = 'cat'
// // let animal = 'dog'

// console.log(animal === 'turtle')
// if (animal === 'turtle'){
//   console.log("This worked")
// } else if (animal === 'cat') {
//   console.log("this is a cat")
// } else {
//     console.log("not the animal")
// }

//LOOPS



// console.log(animalArr.length)
// console.log(animalArr[0])
let animalArr = ["dog", "cat", "zebra"]
function dogChecker () {

  // console.log("I'm outside the for loop")
  let newArr = []
  for (let i = animalArr.length - 1; i >= 0; i--){
    let theAnimal = animalArr[i]
    theAnimal += "!"
    newArr.push(theAnimal)
  }
return newArr
}

console.log(dogChecker())

// let animalArr = ["dog", "cat", "zebra"]

// let i = 0

// while(i < animalArr.length) {
//   console.log(animalArr[i])
//   i++
// }
