console.log("-------------destructure array-----------")
let animals = ["dragon", "panda", "gorilla", "lion"]

// instead of doing this:
// let firstAnimal = animals[0]
// let secondAnimal = animals[1]
// let thirdAnimal = animals[2]


//how would I destructure the first two animals ("dragon" and "panda")?


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


//given this userObj, destructure the object inside of "favoriteShow" (no alias)


//given this userObj, destructure "Hunter x Hunter" inside of "name", give it an alias of `showName`
