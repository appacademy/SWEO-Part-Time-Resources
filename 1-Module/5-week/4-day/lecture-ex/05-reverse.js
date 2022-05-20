/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

console.log("-----------iterative reverse-----------");
let reverseI = word =>{
  let reverse_word = []; //takes in an total array that accumulates all the letters backwards

  for(let i = word.length-1; i>=0; i--){
    reverse_word.push(word[i]);
  }
  return reverse_word.join('');
}
console.log("atom:",reverseI("atom")); // "mota"

console.log("-----------recursive reverse-----------");
//reverse("cat") ==>  reverse("at") + c ==> reverse("t") + "a" + "c" ==> reverse("") + "t" + "a" + "c" ==> "" + "t" + "a" + "c" ==> "tac"
function reverse(str) {
  //base case is when str.length is 0, return ""
  if(str.length === 0){
    return "";
  }

  const firstLetter = str[0]; //"c"
  const restOfResult = reverse(str.slice(1));  //rev the rest i.e. reverse("at");

  const finalResult = restOfResult + firstLetter; //reverse("at") + "c"
  return finalResult;
}
console.log("cat:", reverse("cat"))


console.log("-----------recursive reverse w/ default params-----------");
//arrays are a reference type. 
// "cat"
// ["t", "a", "c"] --> after joining --> "tac"
function reverseDefault(str, revLetters=[]) {
  debugger;
  //start with a base case
  if(str.length === 0){
    return "";
  }

  //get first letter and add it to the front of revLetters
  const firstLetter = str[0];
  revLetters.unshift(firstLetter); //mutating revLetters adding the new letter each time


 
  //now we need to do it for the rest of the letters (adding it to our revLetters array)
  //don't need the return value of reverseDefault sub problem, because it already adds the next letter to our revLetters reference array.
  reverseDefault(str.slice(1), revLetters)  //as long as we have a reference to revLetters, we can update it 


  return revLetters;

}

console.log("car:", reverseDefault("car")) //rac


