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
//base case
// if the length of flavors is 0 // return false
// recursive case , if the length of flavors is not 0
// recursive step remove and check if the element is equal to my search value
// recurse 
// return true 
function iceCreamShop(flavors, favorite) {
  // base case
  //1 : flavors = [ 'vanilla', 'strawberry' ]
  // 2 : flavors = [ 'vanilla' ]
  // 3: flavors = []
  console.log(flavors)
  // 1: false
  // 2: false
  // 3 : true
   if (flavors.length === 0){
     return false
   }
   // 1: false
   // 2 : false
   if(flavors.pop() === favorite){
     return true
   }

  return iceCreamShop(flavors, favorite)
  }
  console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
  // console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
  // console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
  // console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
  // console.log(iceCreamShop([], 'honey lavender')); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}