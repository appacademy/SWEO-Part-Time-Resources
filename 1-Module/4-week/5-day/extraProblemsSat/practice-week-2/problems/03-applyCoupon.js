/*******************************************************************************
You're a college student with a small budget, but luckily you've found a way to get ahold of coupons.
These coupons make it possible for you to buy all things you need on your wish list. You're smart
and want to be sure your list is within budget, so you write a function 'applyCoupon(discount, wishList)',
to manually apply the discount to the items on your 'wishList' (an array). Your function should
return an integer with the total cost AFTER applying the coupon to EACH item.


Assumptions:
The tests will check your solution with the examples below.
The coupon will should apply the exact same discount percentage to EACH item.
The discount could be a different value on each invokation of your function.
You should treat discount as a percentage.

Example:

wishList = [
            {name: "Xbox", price: 80},
            {name: "Bacon", price: 5},
            {name: "Gummy Candies", price: 3},
            {name: "SURGE soda 24 pack", price: 10}
            ];


console.log(applyCoupon(10, wishList)); // => 88.2;
console.log(applyCoupon(20, wishList)); // => 78.4;

*******************************************************************************/

    // Your code here

/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
try{
    module.exports = applyCoupon;
} catch(e){
    module.exports = null;
}