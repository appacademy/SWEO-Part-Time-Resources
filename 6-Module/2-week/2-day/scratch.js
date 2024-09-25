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

const my_Func = js_decorator(my_func);

console.log(my_Func('Pretend '));