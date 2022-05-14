/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
***********************************************************************/
//input: ARRAY of OBJECTS, callback function
//output: array of names

//taking in the array of objects, iterating to get each object, then checking if the filter applied to each object will yield us true. If true, then add only the name from the object to a result array.


function filterUserProfiles(users, filter) {
  //result arr of names
  const namesArr = [];

  //iterate over the array of objects to get each obj
  for(let i=0; i<users.length; i++){
    //each ele in array represents an userObj
    const userObj = users[i];
    //apply the filter to the userObj, if true
    if(filter(userObj) === true){
      //add only the name of each userObj to the namesArr
      const usersName = userObj["name"];
      console.log("is this correct?:", usersName);
      namesArr.push(usersName);
    }
  }

  return namesArr

}
const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

console.log(filterUserProfiles(facebookUsers, (user) => user.age > 30)); // ["Mary", "Judy", "Mike"]



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}
