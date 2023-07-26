let user = {
	name: "Alice",
	age: 25,
	address: {
	  street: "123 Main St",
	  city: "New York",
	},
	hobbies: ["Reading", "Music"],
  };

let deepCopy = JSON.parse(JSON.stringify(user))
let shallowCopy = {...user}
// let shallowCopy = Object.assign({}, user)

// console.log(shallowCopy.name === user.name) // true
// console.log(deepCopy.name === user.name) // true

// shallowCopy.name = "Kate"

// console.log(shallowCopy.name === user.name) // false

// deepCopy.name = "Kate"

// console.log(deepCopy.name === user.name) // false

// console.log(shallowCopy.address === user.address) // true
// console.log(deepCopy.address === user.address) // false

shallowCopy.address.street = '123 Disney'

console.log(shallowCopy.address === user.address) //

deepCopy.address.street = '000 lane'
console.log(user.address)
