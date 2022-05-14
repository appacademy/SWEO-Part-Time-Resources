function pizzaMaker(food) {
    // we are inside the `outer` function
    let order = "I'd like a pizza with ";

    function oven() {
        // we are inside the `inner` function
        return order + food;
    }

    return oven();
}

const innerFuncCooker = pizzaMaker('cheese');

const itemCooked = innerFuncCooker();
console.log(itemCooked);

/* 
What will print to the console (WITHOUT RUNNING CODE)? 
Answer:
*/