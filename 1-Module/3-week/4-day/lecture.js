// // primitive vs reference

// let wayne = {
//     name: "wayne",
//     fur : "black",
//     hasTail : false,
//     isChonky : true,
//     isNibbly : true
// }

// let wax = {...wayne}
// console.log("+++++++++++++++++++")
// console.table(wax)
// console.log("+++++++++++++++++++")
// wax.name = "wax";
// wax.fur = "torty";
// wax.isChonky = false;

// console.log("----- wayne -----")
// console.table(wayne)
// console.log("-----  wax  -----")
// console.table(wax)

// function avg(...nums){
//    console.log(nums);
//    let sum = 0;
//    let length = nums.length;
//    while(nums.length) sum += nums.pop()
//    return sum/length;
// }
// console.log(avg(2,3,10,9,11));

let wayne = {
    name: "wayne",
    fur : "black",
    hasTail : false,
    isChonky : true,
    isNibbly : true
};

// let [name, isChonky, favoriteFood] = wayne;
console.log(wayne)
console.log(name)
console.log(isChonky)
console.log(favoriteFood)

// let arr = [1,2,3,4]
// let {_,banana, mango, peach} = arr

// console.log(banana, mango, peach)