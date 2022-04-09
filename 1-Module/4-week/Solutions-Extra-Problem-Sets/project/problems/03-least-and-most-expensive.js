/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The keys of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

// function leastAndMostExpensive(catalog) {
// 	let prices = Object.values(catalog) // array of all the prices
// 	let most = Math.max(...prices) // get the highest price
// 	let least = Math.min(...prices) // get the minimum price
// 	let result = [];
// 	//[0,1], [0], [1]
// 	for(let item in catalog){
// 		if(catalog[item] === least){
// 			result[0] = item
// 		}
// 		if(catalog[item] === most){
// 			result[1] = item
// 		}
// 	}

// 	return result
// }

function leastAndMostExpensive(catalog) {
	let currentHigh = 0;
	let currentLow = Infinity;
	// -Infinity

	let currentLowItem;
	let currentHighItem;
	for (let k in catalog) {
	  if (currentHigh < catalog[k]) {
		currentHigh = catalog[k];
		currentHighItem = k;

	  } else if (currentLow > catalog[k]) {
		currentLow = catalog[k];
		currentLowItem = k;
	  }

	}
					//[0] [1]
	return [currentLowItem, currentHighItem];
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}
