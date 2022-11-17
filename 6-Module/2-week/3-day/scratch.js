// My function does X
// My other function can do Y
// Decorate!
// Now my function can do X+Y



const js_decorator = (func_being_decorated) => {
    return (another_arg) => {
        another_arg += 'something happened';
        return func_being_decorated(another_arg);
    };
};

let my_func = (arg) => {
    // Pretend this function does something
    return arg;
};

my_func = js_decorator(my_func);
console.log(my_func('Pretend '));

// const some_other_func = js_decorator(my_func);
// console.log(some_other_func("Pretend "))
