// What is an object?
// an Object a data structure
// that takes in other data types
// much like an array
// [data types, ...data types]
// an object is similar to an array but is unordered

// an array has a range from 0 index up to nth index

// array syntax

let arr = [];

// object syntax

let obj = {};

// an object takes in two values
// they keys/values


// the values can be any data type
// while the keys are mostly string data types

let person = {
	"name" :  "Alex", // name = key, value = Alex
	"lastName" : "Betita",
	"favorite games" : [
		"League", "Lost Ark", "Pokemon"
	], // favorite games = key, [...] = value
	"123" : [1,2,3],
	"randomWord" : "abcedefghijlk"
}

// keys are on the left, and values are on the right

// arr[0] will access the value at 0th index

// two ways to access an objects values

// dot notation vs bracket notation

// dot notation
// using the key of the object to access the value with dot notaion

// console.log(person.name) // using dot notation
// console.log(person.lastName) // Betita

// cons of dot notation
// dot notation cant have keys that uses spaces
// dot notation cant have numbers as starting key names
// dot notation cant have variable names
// console.log(person.123)
// console.log(person.favorite games)

// bracket notation
// takes only strings
// console.log(person["name"]) // Alex
// console.log(person["favorite games"]) // [ 'League', 'Lost Ark', 'Pokemon' ]
// console.log(person["123"]) // [1,2,3]

let randomWord = "name"

// console.log(person[randomWord]) // Alex
// console.log(person.randomWord) // abcedefghijlk


// horrible object design
let dog = {
  name: "Alf",
  age: 1,
  breed: "mixed",
  size: {
    heightInFeet: 3,
    weightInLbs: 100
  },
  birthday: {
	  day: {
		  month: {
			  "year and day and moth": "1/1/2021"
		  }
	  }
  }
};

// console.log(dog.size) // { heightInFeet: 3, weightInLbs: 100 }
// console.log(dog.size.heightInFeet) // 3
// console.log(dog["size"].weightInLbs) // 100
// console.log(dog.size['weightInLbs']) // 100
// console.log(dog.birthday.day.month["year and day and moth"]) // "1/1/2021"
// console.log(dog.birthday) // "{ day: { month: { 'year and day and moth': '1/1/2021' } } }"


let dogWithFunctions = {
	name: "Alf",
	age: 1,
	breed: "mixed",
	size: {
	  heightInFeet: 3,
	  weightInLbs: 100
	},
	bark : function(){
		console.log("Woof woof")
	},
	giveMeAHighFive: function(){
		return 5
	}
};

// dogWithFunctions.bark //
// dogWithFunctions.bark() // Woof woof

// console.log(dogWithFunctions.giveMeAHighFive()) // 5

let sampleUser = {
	"gender": "male",
	"name": {
		"title": "Mr",
		"first": "Benjamin",
		"last": "Gagné"
	}
}

// how to add keys and values into an object

// with bracket notation we can use the syntax to add keys/values

// console.log(sampleUser)

// if a key doesn't exist when using bracket notation/dot notation
// then it will simply add that key into the obj
sampleUser["location"] = "California"

// console.log(sampleUser)

// sampleUser["info"] = {}

// console.log(sampleUser)

sampleUser.info = {}
// console.log(sampleUser)

// // ways to access a value if they exists within the object
// console.log(sampleUser.birthday) // undefined
// console.log(sampleUser["birthday"]) // undefined

// // using the key in obj syntax
// // it will return true if a value exists within that key
// // else false if no value exists
// // return a boolean

// console.log("gender" in sampleUser) // true
// console.log("birthday" in sampleUser) // false

// how to iterate through an object

// syntax is for(ley key in obj){}

for(let someKey in sampleUser){
	// console.log(someKey)
	// let value = sampleUser[someKey] // we are accessing the value of the key we are passing in to the obj
	// console.log('value = ', value)
}

// object is a mutable data type just like an array
// sampleUser = {}
sampleUser.name.first = 'Alex'
// console.log(sampleUser)

for(let someKey in sampleUser){
	// console.log('someKey ', someKey)
	if (someKey === "name"){
		for ( let nestedKey in sampleUser[someKey]){
			// console.log(nestedKey)
			// let value = sampleUser[someKey][nestedKey]
			if(nestedKey === "last"){
				// someKey = name, nestedKey = last
				// sampleUser['name']['last']
				sampleUser[someKey][nestedKey] = 'Betita'
			}
		}
	}
}

// console.log(sampleUser)

// useful methods for objects

// Object.keys
// Object.values
// Object.entries

// console.log(Object.keys(sampleUser)) // [ 'gender', 'name', 'location', 'info' ]

let objects = Object.keys(sampleUser)

for ( let i = 0; i < objects.length; i++){
	let key = objects[i]
	// console.log(key)
	// console.log(sampleUser[key])
}

// console.log(Object.values(sampleUser)) // ['male', { title: 'Mr', first: 'Alex', last: 'Betita' }, 'California',{}]


console.log(Object.entries(sampleUser)) // [
// 	[ 'gender', 'male' ],
// 	[ 'name', { title: 'Mr', first: 'Alex', last: 'Betita' } ],
// 	[ 'location', 'California' ],
// 	[ 'info', {} ]
//   ]


// *****************************************object challenges *****************************

// Sample of an Real world Object
let exampleUser = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Filippa",
                "last": "Sørensen"
            },
            "location": {
                "street": {
                    "number": 1672,
                    "name": "Vestermarken"
                },
                "city": "København Sv",
                "state": "Sjælland",
                "country": "Denmark",
                "postcode": 49877,
                "coordinates": {
                    "latitude": "-35.8927",
                    "longitude": "43.2951"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "filippa.sorensen@example.com",
            "login": {
                "uuid": "4e602e7a-72c1-48e2-8a41-23cc8641b434",
                "username": "beautifuldog305",
                "password": "concorde",
                "salt": "iXhH3kqP",
                "md5": "8435e4ee1e03163659ae54e5e3fa1637",
                "sha1": "2d0f7640e273fb3fcfa5e28a95cf06292b2eed5b",
                "sha256": "b977ad0af4f9297d425facc72eb537fe6be645d0f36d6589fe13566fee35ead0"
            },
            "dob": {
                "date": "1985-08-11T09:28:38.140Z",
                "age": 37
            },
            "registered": {
                "date": "2016-06-10T23:11:58.023Z",
                "age": 6
            },
            "phone": "43072229",
            "cell": "67645583",
            "id": {
                "name": "CPR",
                "value": "110885-2771"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/52.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
            },
            "nat": "DK"
        }
    ],
    "info": {
        "seed": "50e455c207e292ba",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
}


// print out the cities

// print out the title, first, last, city and email in one line

// change the values to be close to your profile

// add a hobbies, favorites into the object


