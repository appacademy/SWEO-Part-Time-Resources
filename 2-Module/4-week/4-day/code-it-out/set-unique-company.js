//Open Set Documentation: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
//Look on the left hand side for Set methods and at the example to instantiate a new Set.

console.log("-----------------Properties of Set Summary-----------------")
//No Dupes: A set contains no duplicate elements. Only unique
const noDupesSet = new Set(["zero", 1, "three"]);
console.log(noDupesSet); //Set(3) { 'zero', 1, 'three' }
noDupesSet.add("zero"); //this will not add "zero" as it already exist in the set. SETS CONTAIN ONLY UNIQUE ELEMENTS.
console.log(noDupesSet); //Set(3) { 'zero', 1, 'three' }

//Only Keys, NO Values: Set is just like a hashmap (key value pair object) but only holding the keys only, no values.

//O(1) Search Time: A set can check if an element is contained in O(1) time (whereas arrays we have to potentially iterate through the whole array to find the element)
//.has allows us to check if an element is in the set (similar to array.includes)
console.log(noDupesSet.has("apple")) //false

console.log("-----------------Practice Set-----------------")
// Your Task: 
//1) Analyze and break down the problem. What is each function doing?
//2) Replace the array datastructure w/ a Set() to take in unique names of companies. Then REFACTOR the code to make it work with a set.

const companies = ["Amazon", "Google", "App Academy", "Nintendo", "Samsung", "Apple", "CoolestCompanyCo"];

//# add comment here, analyzing what this function does.
function nameIsTaken(companyName){
    
    //return companies.includes(companyName)
    //below is same as^:
    for(let i=0; i<companies.length; i++){
        const takenCompany = companies[i];
        if(takenCompany === companyName){
            return true;
        }
    }
    return false;
}

console.log("Is Amazon taken?:", nameIsTaken("Amazon"))

//# add comment here, analyzing what this function does.
function addCompanyIn(companyName){
    if(nameIsTaken(companyName) === false){
        companies.push(companyName);
        return "Your company has been added!"
    }
    else{
        return "Company name is taken";
    }
}

console.log(addCompanyIn("Amazon")); //"Company name is taken"
console.log(addCompanyIn("NewestCoolestBiz")); //"Your company has been added!"
console.log("current companies:", companies);