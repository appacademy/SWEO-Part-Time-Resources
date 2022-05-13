/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add 
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/
//input for the inner function: ingredient 
//output for the inner function: sentence with the new added ingredient
//output for the outer function: return the inner function

// const sandwichMaker = () => {
//   const ingredientsArr = [];

//   //return an inner function
//   const innerFunc = (ingredient) => {
//     ingredientsArr.push(ingredient);
//     let sentence = "One sandwich with tomato " + ingredientsArr.join(" and ");
//     return sentence;
//   }
//   return innerFunc
// }

const sandwichMaker = () => {
  let string = "One sandwich with tomato";
  const inner = (ingredient) =>{
    string += " and " + ingredient;
    return string;
  }
  return inner;
}

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
