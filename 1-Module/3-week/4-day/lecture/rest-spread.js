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
console.log(multiplyAll(2, 3, 4, 5)) //60


console.log("------------------spread------------------")
let a = ["a", "b", "c", [1]]
let b = [1, 2, 3]

// what will this do?
let combinedAB = [...a, ...b] 
console.log("combinedAB:", combinedAB); 


let copyA = [...a];
console.log("original a:", a)
console.log("copiedA:", copyA);

//update the copiedA to contain [100] instead of [1]
copyA[3][0] = 100//give us 1
console.log("--------after updating [1] to [100]")
console.log("original a:", a)
copyA[0] = "hello";
console.log("copiedA:", copyA); //didn't copy the items inside the nested array @ [1]