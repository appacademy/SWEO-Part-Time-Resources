console.log("------------------rest parameter------------------")
function multiplyAll(first, ...otherNums) {
    console.log("first: " + first);

    let total = 1;
   
    for (let i = 0; i < otherNums.length; i++) {
        let num = otherNums[i];
        total*= num;
    }

    return total;
}

// What will this output below? Try to do it without running the code! Can someone explain?
console.log(multiplyAll(2, 3, 4, 5)) //???


console.log("------------------spread------------------")
let a = ["a", "b", "c"]
let b = [1, 2, 3]

// what will this do?
let combinedAB = [...a, ...b] 
console.log("combinedAB:", combinedAB);  //???
