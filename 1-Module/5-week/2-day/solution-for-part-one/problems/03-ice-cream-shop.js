/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
base case(s) -- if one element equals favorite return true if our array is empty ie no length return false
recursive step -- pop off our array and save to a variable to check
recursive caall -- return our function passing in flavors and favorite
***********************************************************************/


function iceCreamShop(flavors, favorite) {
  // Your code here
  debugger
  // if(!flavors.length){
    if(flavors.length === 0){
    return false
  }

  let lastEle = flavors.pop()
  debugger
  if(lastEle === favorite){
    return true
  }



  return iceCreamShop(flavors, favorite)
}


// iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
// iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
// iceCreamShop(['moose tracks'], 'moose tracks'); // true
// iceCreamShop([], 'honey lavender'); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}