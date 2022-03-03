// What is an object?
// an Object is a data structure
// that takes in any data
// just like an array
// except that its unordered

// array syntax
let array = []

// object syntax
let object = {}

// an object has two properties

// are key/value "pairs"

let name_ = "alex"

let obj = {
	name_
}

// obj = {"name_" : "alex"}

// let obj = { key : value } value can be any data type || data

let sampleObj = {
	"string" : "",
	"array" : [],
	"boolean" : true,
	"null" : null,
	"number" : 1,
	"undefined": undefined,
	"object" : {},
	"function" : function(){
		console.log("Hi i'm a function")
	}
}

let person = {
	"name" : "Alex",
	"lastName" : "Betita",
	"favorite games" : [
		"League", "Valorant", "Lost Ark", "Elden Ring"
	],
	"1number": [1,2,3],
	"@$": "special"
}

// how to access values in an object
// two different approaches
// dot notation vs bracket notation

// with dot notation we use the key of an object to access the value

// console.log(person.name) // Alex
// console.log(person.lastname) // undefined
// console.log(person.lastName) // Betita

// here are the cons with dot notation

// console.log(person.favorite games) error out
// console.log(person.1number)
// console.log(person.@#)

// bracket notation
// console.log(person["name"]) // Alex
// console.log(person["favorite games"]) // [ 'League', 'Valorant', 'Lost Ark', 'Elden Ring' ]
// console.log(person["1number"]) // [1,2,3]

// let variableName = "name";
// console.log(person[variableName]) // Alex

// console.log(person.variableName) // undefined

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
				"year and day and month": "1/1/2021"
			}
		}
	}
  };

// console.log(dog.size.heightInFeet) // 3
// console.log(dog.size['heightInFeet']) // 3
// console.log(dog["size"]["heightInFeet"]) // 3
// console.log(dog["size"].heightInFeet) // 3

// console.log(dog.birthday)
// console.log(dog.birthday.day.month["year and day and month"]) // 1/1/2021

let dogWithFunctions = {
	name: "Alf",
	age: 1,
	length: 3,
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

console.log(dogWithFunctions.bark) // [Function: bark]

dogWithFunctions.bark() // Woof woof

dogWithFunctions.giveMeAHighFive() //

console.log(dogWithFunctions.giveMeAHighFive()) // 5

// string
// array
let str = "Alex"

// console.log(str.length)
console.log(dogWithFunctions.length)

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


