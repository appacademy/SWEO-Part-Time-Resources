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
Answer: TypeError: innerFuncCooker is not a function
        This is because on line 10, we invoked the inner function and therefore it is not a function anymore, but is replaced with whatever is the return of the inner func (order + food)
*/