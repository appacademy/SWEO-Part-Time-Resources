//Open Set Documentation: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
//Look on the left hand side for Set methods and at the example to instantiate a new Set.

// ----------Properties of Set Summary--------
console.log("-----------------Set-----------------")
//No Dupes: A set contains no duplicate elements
const noDupes = new Set([1,2, "three"])
console.log(noDupes); // Set(3) { 1, 2, 'three' 
noDupes.add("three")
console.log(noDupes); //Set(3) { 1, 2, 'three' 


//Only Keys, NO Values: Set is just like a hashmap (key value pair object) but only holding the keys only, no values.
console.log(noDupes[0]); //undefined; WILL NOT WORK

//O(1) Search Time: A set can check if an element is contained in O(1) time (whereas arrays we have to potentially iterate through the whole array to find the element)
console.log(noDupes.has("amazon")); //false
console.log(noDupes.has("three")); //true

console.log("-----------------practice-----------------")
// Your Task: 
//1) Analyze and break down the problem. What is each function doing?
//2) Replace the array datastructure w/ a Set() to take in unique names of companies. Then REFACTOR the code to make it work with a set.

const companies = new Set(["Amazon", "Google", "App Academy", "Nintendo", "Samsung", "Apple", "CoolestCompanyCo"]);
// console.log(companies);

//# nameIsTaken is a helper function determines whether or not a company exists in companies array (true if in there, false if not in there)
function nameIsTaken(companyName){
    
    //return companies.includes(companyName)
    //below is same as^:
    // for(let i=0; i<companies.length; i++){
    //     const takenCompany = companies[i];
    //     if(takenCompany === companyName){
    //         return true;
    //     }
    // }
    // return false;
    const nameTaken = companies.has(companyName); //true if in, false if not in
    return nameTaken;
}

console.log("Is Amazon taken?:", nameIsTaken("Amazon"))

//add the company in if it is not in already. If it already exists, then return "company name is taken"
function addCompanyIn(companyName){
    // check if name is taken. If name taken is false, add the company in.
    if(nameIsTaken(companyName) === false){
        companies.add(companyName);
        return `Your company ${companyName} has been added!`
    }
    else{
        return "Company name is taken";
    }
}

console.log(addCompanyIn("Amazon")); //"Company name is taken"
console.log(addCompanyIn("NewestCoolestBiz")); //"Your company has been added!"
console.log("current companies:", companies);