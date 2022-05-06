console.log("-------------destructure array-----------")
let animals = ["dragon", "panda", "gorilla", "lion"]

// instead of doing this:
// let firstAnimal = animals[0]
// let secondAnimal = animals[1]
// let thirdAnimal = animals[2]


//how would I destructure the first two animals ("dragon" and "panda")?
let [firstAnimal, secondAnimal] = animals;
console.log("firstAnimal:",firstAnimal)
console.log("secondAnimal:", secondAnimal)


console.log("-------------destructure object-----------")
let userObj = {
    name: "Wes Trinh",
    age: 60,
    organization: "App Academy",
    male: true,
    game: {
        name: "League of Legends",
        favHero: "Lucian",
        currentLevel: 60,
        favoriteLane: "autofill",
        mostPlayedHeroes: [
            "Khazix",
            "BlitzCrank",
            "Graves",
            "Lucian",
            "Diana",
            "Tristana",
        ]
    },
    favoriteShow:{
        name: "Hunter x Hunter",
        finished: true,
        type: "anime",
    }
}



//what is the value of the variable `male`?
let {male, name} = userObj;
console.log("male: ", male); //???


//given this userObj, destructure the "age", and "organization", give organization an alias of `org`
let {age, organization:org} = userObj;

console.log("age:", age);
console.log("org:", org);


//given this userObj, destructure the object inside of "favoriteShow" (no alias)
let {favoriteShow} = userObj;
console.log("favoriteShow:",favoriteShow)



//given this userObj, destructure "Hunter x Hunter" inside of "name", give it an alias of `showName`

let {favoriteShow:{name:showName}} = userObj;

console.log("showName:", showName)