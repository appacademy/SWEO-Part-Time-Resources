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
//the outer func (sandwichMaker) will return an inner func that takes in an ingredient and then adds it to maybe a sentence?

const sandwichMaker = () => {

  //need a way to keep track and continuously add ingredients to the sentence
  let sentenceBase = "One sandwich with tomato"

  const addIngredient = (ingredient) => {
    //we need to add ingredient to the sentence base and format it correctly
    sentenceBase = sentenceBase + " and " + ingredient;

    //inner func addIngredient should return a sentence with the updated ingredient every time it is called.
    return sentenceBase
  }

  return addIngredient;
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
