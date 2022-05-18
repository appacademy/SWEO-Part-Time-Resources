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

//iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
// function iceCreamShop(flavors, favorite) {
//   //base case when the flavors is empty we return false because we did not find a match 
//   if(flavors.length === 0){
//     return false;
//   }

//   //get the first / front flavor to compare with favorite
//   const frontFlavor = flavors[0]; //'vanilla'
//   //compare frontFlavor with favorite if equal return true
//   if(favorite === frontFlavor) return true;

//   //                                flavors.slice(1) ==> ['strawberry']
//   const restOfResult = iceCreamShop(flavors.slice(1), favorite) //restOfResult = true or false if a flavor is found (true)

//   return restOfResult;

// }



// iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
// const iceCreamShop = (flavors, favorite) => {
//   console.log(flavors, favorite)

//   if (flavors.length === 0) {
//     return false;
//   } else {
//     const [flavor, ...restOfFlavors] = flavors;

//     if (flavor === favorite) {
//       return true;
//     } else {
//       const isMyFavorite = iceCreamShop(restOfFlavors, favorite); //true or false

//       console.log({
//         restOfFlavors,
//         isMyFavorite,
//       })

//       return isMyFavorite;
//     }

//   }
// }

// iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
function iceCreamShop(flavors, favorite) {
  if (flavors.length <= 0) return false;
  if (flavors.pop() === favorite) return true;
  return iceCreamShop(flavors, favorite);
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}