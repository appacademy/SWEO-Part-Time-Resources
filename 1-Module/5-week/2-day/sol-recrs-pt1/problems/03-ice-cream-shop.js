/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


function iceCreamShop(flavors, favorite) {
  const numFlavors = flavors.length;
  //if we get to the end of flavors or if flavors is empty, we did not find a match! So return false.
  if(numFlavors === 0){
    return false;
  }

  const nextFlavor = flavors[0];
  const restOfFlavors = flavors.slice(1);
  
  if(nextFlavor === favorite) return true;

  //this will recursively continue to find if there is a match
  const restOfFlavorsResult = iceCreamShop(restOfFlavors, favorite) //paused until the recursive calls finish evaluating.

  return restOfFlavorsResult;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}