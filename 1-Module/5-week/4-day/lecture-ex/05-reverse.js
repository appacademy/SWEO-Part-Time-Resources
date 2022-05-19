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
  let reverse_word = []; //array to add the letters in reverse


  for(let i = word.length-1; i>=0; i--){
    reverse_word.push(word[i]);
  }
  return reverse_word.join(''); //atom --> mota
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
  return finalResult; //"tac"
}
console.log("cat:", reverse("cat"))


console.log("-----------recursive reverse w/ default params-----------");

//reverseDefault("car") ==> ["c"] ==> ["a", "c"] ==> ["r", "a", "c"] ==> "rac"
function reverseDefault(str, revLetters=[]) {
  debugger;
  //base case
  if(str.length === 0){
    return "";
  }

  const firstLetter = str[0];
  //push the first letter to the front of revLetters
  revLetters.unshift(firstLetter) //add the letter to the front each time

  //now we need to do that for every letter. (repeat that patter)
  reverseDefault(str.slice(1), revLetters) //note we don't need the result stored in reverseDefault because the reult is actualy the revLetters array

  //revLetters contains all the letters ["r", "a", "c"]
  const result = revLetters.join("");
  return result;
}

console.log("car:", reverseDefault("car")) //rac
console.log("empty", reverseDefault("")) //""


