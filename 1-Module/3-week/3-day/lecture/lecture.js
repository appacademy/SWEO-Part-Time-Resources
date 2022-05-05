/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Objects-Pojos
*/

// Objects gives us a way of creating collections of values that can be accessed with a given key.
console.log("-------------Define Object-------------")
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
    },
   

}

console.log("-------------Getting / Reading Data-------------")
//How would I print my `name` from the object?
console.log("dot notation:", userObj.name);
console.log("bracket notation:", userObj["name"])


//How would I get a list of `mostPlayedHeroes`, and print it
let myMostPlayed = userObj["game"]["mostPlayedHeroes"];
console.log("myMostPlayed[]:", myMostPlayed);

let myMostPlayedDot = userObj.game.mostPlayedHeroes;
console.log("myMostPlayedDot:", myMostPlayedDot);


//Given this Variable below, how can I use it to get the data for that variable?
let key = "favoriteShow"
let myShowData = userObj[key] //value for "favoriteShow" key
console.log("showData:", myShowData);

//what if I tried dot notation with the key variable
console.log("variable-dot-notation:", userObj.key) //this will be undefined. not such "key" exists in object.

console.log("-------------Setting Key Value-------------")
//How would I add my `location`(key), "California" (value)?
userObj.location = "California"; //setting using dot notation
console.log("location before:", userObj.location)

userObj["location"] = "Wyoming"; //bracket notation to set data
console.log("location after:", userObj.location)


//How would I update my `currentLevel` inside the nested game object to 61?
userObj.game.currentLevel +=1;
console.log("updated level:", userObj["game"]["currentLevel"])

userObj.favoriteLane = "Mid-lane";
console.log("new fav lane:", userObj.favoriteLane)

console.log("-------------Check if Key Exists-------------")
//expect a true or false value
//how do I check if "isCool" is a field / key in the userObj? 
let boolValue = "isCool" in userObj; //true or false
console.log("Am I cool:", boolValue); //false

let boolValue2 = userObj["isCool"] === undefined //if we key in and it's undefined (true) --> key/value does not exist.
console.log("Am I cool2:", boolValue2)


console.log("age before:", userObj.age);
//if the key "age" doesn't exist:
if(!("age" in userObj)){ //if true, means that "age" doesn't exist in object
    //Add the they key "age" and set it to 1
    userObj.age = 1; //if age doesn't exist, initially set to 1
}
//otherwise 
else{
    //update the age by 1 (increase age +1)
    userObj.age += 1;
}
console.log("age after:", userObj.age);

console.log("-------------Iterating Object-------------")
//how would I iterate through the userObj, logging they key and value?
for(let appleKey in userObj){ //appleKey still represents the appleKey in each object, doesn't matter the name
    let value = userObj[appleKey];
    console.log("appleKey in userObj:", appleKey +": ", value)
}

//grabbing all the keys
let arrayOfKeys = Object.keys(userObj);
console.log("all keys:", arrayOfKeys);

//grabbing all the values
let arrayOfValues = Object.values(userObj);
console.log("all values:", arrayOfValues);