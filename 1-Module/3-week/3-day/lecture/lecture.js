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
console.log("dot notation:", userObj.name)
console.log("bracket notation:", userObj["name"])


//How would I get a list of `mostPlayedHeroes`, and print it
let myMostPlayed = userObj.game.mostPlayedHeroes;
console.log("myMostPlayed:", myMostPlayed);

//Given this Variable below, how can I use it to get the data for that variable?
let key = "favoriteShow"
console.log("favoriteShowBracket:", userObj[key]) //using bracket notation as it takes in variables

console.log("favoriteShowDot:", userObj.key) //THIS WONT WORK!!!

console.log("-------------Setting Key Value-------------")
//How would I add my `location`(key), `California`(value)?
console.log("location:", userObj.location) //undefined
userObj.location = "California"; //add location key w/ "California" as value
console.log("location:", userObj["location"]) //california

//How would I update my `age` to 32000?
console.log("old age:", userObj.age);
userObj.age = 1 + 31999; //update value through key
console.log("new age:", userObj.age);

//How would I update my `currentLevel` inside the nested game object to 61?
userObj.game.currentLevel = 61;
console.log("updated level:", userObj.game.currentLevel)

console.log("-------------Check if Key Exists-------------")
//how do I check if "isCool" is a field / key in the userObj?
let isCoolBoolean = "isCool" in userObj; //true or false
console.log("in-operator:", isCoolBoolean) //false --> key does not exist inside object
console.log("hasOwnProperty method:", userObj.hasOwnProperty("isCool")) 

console.log("userObj.isCool === undefined:", userObj.isCool === undefined) // doesn't exist, it's set to undefined
console.log("userObj.isCool !== undefined:", userObj.isCool !== undefined) // does not equal to undefined --> meaning that this key EXISTS

console.log("prev age:", userObj.age);
//if the key "age" doesn't exist:
if(userObj.age === undefined){ 
    //Add the they key "age" and set it to 1
    userObj.age = 1;
}
//otherwise 
else{
    //update the age by 1 (increase age +1)
    userObj.age ++; //+=
}
console.log("next age:", userObj.age);

console.log("-------------Iterating over Data-------------")
//how would I iterate through the userObj, logging they key and value?

console.log("---getting keys in arrays first---");
//for in loop - iterating over the object
for(let i in userObj){
    console.log(i + ": " + userObj[i])
}


// Object.keys method
// let arrayKeys = Object.keys(userObj);
// console.log("arrayKeys:",arrayKeys)

// for(let i=0; i<arrayKeys.length; i++){
//     let currentKey = arrayKeys[i];
//     console.log(currentKey + ": ", userObj[currentKey])
// }


console.log("-------------extra-------------")
let testArr = ["one", "two", "three"];
for(let i of testArr){
    console.log(i)
}