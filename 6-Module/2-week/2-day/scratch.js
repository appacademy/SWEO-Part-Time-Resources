// const js_decorator = (func_being_decorated) => {
//     return (another_arg) => {
//         another_arg += 'something happened';
//         return func_being_decorated(another_arg);
//     };
// };

// let my_func = (arg) => {
//     // Pretend this function does something
//     return arg;
// };

// my_func = js_decorator(my_func);

// console.log(my_func('Pretend '));

// simple js class
class Dog {
    constructor() {
        this.sound = 'woof';
    }
}

const myDog = new Dog();
console.log(myDog);