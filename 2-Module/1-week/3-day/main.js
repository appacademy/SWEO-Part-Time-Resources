const { Animal } = require('./Animal')
const { Cat } = require('./Cat')


const dog = new Animal('4', 'Dog', 'Spot')
const cat = new Cat('4', 'Cat', 'Cow')

// console.log(dog)
// console.log(cat)

// console.log(cat.meow())
// console.log(cat.meow('quiet'))
// console.log(cat.meow('loud'))
// console.log(cat.meow(false))

console.log(dog.printInfo())
console.log()
console.log(cat.printInfo())
