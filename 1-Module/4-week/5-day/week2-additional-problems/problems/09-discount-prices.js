/*

    Write a function using fat arrow syntax, `discountPrices` that takes in an array of prices
    and an array of discounts which correspond to each item price. The function
    should returns a new array containing strings for the new discounted prices
    formatted with a dollar sign and to two decimal places. See examples below:

    Hint: Look up `toFixed()` on MDN

    Examples:
    console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
    console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]

*/

// one-liner:
// const discountPrices = (prices, discounts) => prices.map((price, i) =>  '$' + (price * (1 - discounts[i])).toFixed(2));

const discountPrices = (prices, discount) =>{
    //create our result arr
    const resultArr =[];
    //iterate over the range of numbers that represent the indices of prices and discount
    for(let i=0; i<prices.length; i++){
        //get the prices 
        //get the discount
        const currentPrice = prices[i];
        const currentDiscount = discount[i];

        //we need to get the new price after applying the discount
        //newPrice = 10 - (10 * .2)   ==> 10 - 2 ==> 8
        const newPrice = currentPrice - (currentPrice * currentDiscount);
        //we need to format the newPrice and then push to resultArr
        const newPriceFormatted = '$' + newPrice.toFixed(2);
        resultArr.push(newPriceFormatted);
    }
    return resultArr;
}

console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = discountPrices;
} catch (e) {
    module.exports = null;
}
