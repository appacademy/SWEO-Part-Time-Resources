/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

//seperate the console logs from the combining


//create a helper function for ingredients,
function combineIng(pieType) {
  // Find the recipe for the pieType specified
  const recipe = recipes[pieType];
   // Print the ingredients for each ingredient in the recipe
   let combiningMsg = `Combining ingredients for ${pieType}: `
   combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
   console.log(combiningMsg);
}

//one that bakes
function bakePies(pieType, quantity){
  // Bake the number of pies specified by the pieQuantity
  for (let i = 0; i < quantity; i++) {
    combineIng(pieType)
    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
}


//one that does cost
function calcPieCost(pieType){
  const ingredients = recipes[pieType];
  const costOfPie = ingredients.reduce((prev, current) => {
    return prev + current.cost;
  }, ingredients[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);
  return costOfPie
}

// one that does revenue/sells the pies
function sellPies(costOfPie, quantity, profitMargin=1.5){
    // Calculate the total cost of all the pies//revenue
  const revenue = (costOfPie * profitMargin) * quantity;
   // Print the total revenue calculated using the given profitMargin
  console.log(`Sold ${quantity} pies for $${revenue.toFixed(2)}!`);
}



function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  bakePies(pieType, pieQuantity)
  const costOfPie = calcPieCost(pieType)
  sellPies(costOfPie, pieQuantity, profitMargin)

}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
