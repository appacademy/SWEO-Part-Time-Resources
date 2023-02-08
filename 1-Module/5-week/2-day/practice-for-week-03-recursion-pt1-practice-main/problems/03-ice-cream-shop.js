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
const arr = ['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel']

function iceCreamShop(flavors, favorite) {
	const currentFlavor = flavors.pop() // recursive step
	// base cases
	// const currentFlavor = flavors.slice()
	if (currentFlavor === favorite){
		return true
	}
	if (flavors.length === 0){
		return false
	}

	return iceCreamShop(flavors, favorite)
}

console.log(iceCreamShop(arr, 'pistachio'))

console.log(arr)


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
