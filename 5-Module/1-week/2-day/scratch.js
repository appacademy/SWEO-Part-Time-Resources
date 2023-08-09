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

shallowCopy.address.street = "123 Disney"

console.log(shallowCopy.address === user.address) // true
console.log(deepCopy.address === user.address) // false

let userFlattened = {
	name: "Alice",
	age: 25,
	street: "123 Main St",
	city: "New York",
	hobbies: ["Reading", "Music"],
}
