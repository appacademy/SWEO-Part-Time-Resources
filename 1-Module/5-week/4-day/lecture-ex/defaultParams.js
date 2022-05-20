
console.log("----------what happens w/ more parameters than argument?----------")
//what happens when we hava more parameters than argument?
const moreParams = function(first, second, third){
    console.log("first:", first);
    console.log("second:", second);
    console.log("third:", third); // what will this output?
}

moreParams("one", "two"); // what will the output for the last console.log in the func?


console.log("---------------default parameters---------------")
//what happens if we made a default parameter for the third one and gave it an array of ["three"]
const moreParams2 = function(first, second, third = ["three"]){
    console.log("first:", first);
    console.log("second:", second);

    third.push(3); //NOTE: we push an item to `third`
    console.log("third:", third); // what will this output?
}

moreParams2("one", "two"); //even through we do not pass anything to `third` arg, what happens?

