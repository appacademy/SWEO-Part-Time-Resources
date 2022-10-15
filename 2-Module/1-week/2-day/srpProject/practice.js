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

const bakePies = (pieQuantity, pieType, recipe) => {
  for (let i = 0; i < pieQuantity; i++) {
    // Print the ingredients for each ingredient in the recipe
    let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);

    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
}

const findCost = (recipe, pieQuantity) => {
  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);

  // Calculate the total cost of all the pies
  const totalCost = costOfPie * pieQuantity;
  return totalCost
}

const findRevenue = (totalCost, profitMargin, pieQuantity) => {
  const revenue = totalCost * (profitMargin || 1.2);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
  return revenue;
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  // Find the recipe for the pieType specified
  const recipe = recipes[pieType];
  // Bake the number of pies specified by the pieQuantity
  bakePies(pieQuantity, pieType, recipe);

  // Print the cost of each pie based on the cost of each ingredient
  const totalCost = findCost(recipe, pieQuantity);

  // Print the total revenue calculated using the given profitMargin
  const revenue = findRevenue(totalCost, profitMargin, pieQuantity)
  return revenue;
}


// const bakePies = (pieQuantity, pieType, recipe) => {
//   for (let i = 0; i < pieQuantity; i++) {
//     // Print the ingredients for each ingredient in the recipe
//     let combiningMsg = `Combining ingredients for ${pieType}: `
//     combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
//     console.log(combiningMsg);

//     // Print the nth pie that was baked
//     console.log(`Baked pie ${i + 1}!`);
//   }
// }

// const findCost = (recipe, pieQuantity) => {
//   const costOfPie = recipe.reduce((prev, current) => {
//     return prev + current.cost;
//   }, recipe[0].cost);
//   console.log(`Cost per pie: ${costOfPie}`);

//   // Calculate the total cost of all the pies
//   const totalCost = costOfPie * pieQuantity;
//   return totalCost
// }

// const calculateRevenue = (totalCost, profitMargin, pieQuantity) => {
//   const revenue = totalCost * (profitMargin || 1.2);
//   console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
//   return revenue;
// }

// function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
//   // Find the recipe for the pieType specified
//   const recipe = recipes[pieType];
//   // Bake the number of pies specified by the pieQuantity
//   bakePies(pieQuantity, pieType, recipe);
//   // Print the cost of each pie based on the cost of each ingredient
//   const totalCost = findCost(recipe, pieQuantity);
//   // Print the total revenue calculated using the given profitMargin
//   let revenue = calculateRevenue(totalCost, profitMargin, pieQuantity);
//   return revenue;
// }

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};