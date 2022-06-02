// What is an Object?


// No indeces?
// no index, only keys to access our values.

// Object Syntax
let arr = [];
let obj = {};

// POJO?
// plain old js object

// Object Example
let witcher = {
    'name': 'Geralt',
    'birthplace': 'Rivia',
    'hobbies': [
        'monster hunting', 'pretending to be emotionless', 'rescuing princesses'
    ],
    'animal': {
        'species': 'horse',
        'name': 'Roach'
    },
    'quote': function(){
        return 'Evil is evil. Lesser, greater, middling... Makes no difference.'
    },
    123: 'one, two, three'
}

// console.log(witcher.animal.name)
// How to access values
// Bracket Notation
// console.log(witcher['name']);
// let key = 'name';
// console.log(witcher[key])
// console.log(witcher[123])

// Dot Notation
// console.log(witcher.birthplace)

// how to invoke a function stored inside an object
// console.log(witcher.quote())

// how to add key value pairs to an object
witcher['loveInterest'] = 'Yennifer'
// console.log(witcher.loveInterest);

// How to change a value if it exists in an obj
witcher['birthplace'] = 'Norman, Ok'
witcher.birthplace = 'Norman, Ok'
// console.log(witcher);
// console.log()

// How to iterate through an object
// for in loops!
for (let someKey in witcher){
    // console.log(someKey)
    if (someKey === 'loveInterest'){
        // console.log(someKey)
        // console.log(witcher[someKey])
    }
}

// console.log(witcher['birthplace'])

// Is it mutable?
// yes!!

// Object Methods! (important please study these!)
// Object.keys // return an array that contains only all of the keys in the object
let keys = Object.keys(witcher)
// console.log(keys)

// Object.values // return an array the contains only all of the values in the object
let values = Object.values(witcher);
// console.log(values)

// Object.entries // return a 2d array, each subArray contains a key value pair.
let entries = Object.entries(witcher);
// console.log(entries)

// *********************************object challenges *****************************

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


// print out the city
// console.log(exampleUser.results[0].location.city)


// print out the title, first, last, city and email in one line
let title = exampleUser.results[0].name.title
let first = exampleUser.results[0].name.first
let last = exampleUser.results[0].name.last
let city = exampleUser.results[0].location.city
let email = exampleUser.results[0].email
exampleUser.results[0].name.first = 'john'
console.log(title, first, last, city, email)

// add a hobbies key into the object
exampleUser['hobbies'] = ['skiing', 'swimming']
console.log(exampleUser.hobbies)






