// // Original function does X
// // Decorator function adds Y
// // Now original function does X&Y

// const js_decorator = (func_being_decorated) => {
// 	return (another_arg) => {
//         another_arg += 'something happened';
//         return func_being_decorated(another_arg);
//     };

// 	// const my_inner_func = (another_arg) => {
//     //     another_arg += 'something happened';
//     //     return func_being_decorated(another_arg);
//     // };

// 	// return my_inner_func
// };

// let my_func = (arg) => {
//     // Pretend this function does something
//     return arg;
// };

// my_func = js_decorator(my_func);
// // // const my_modified_func = js_decorator(my_func);

// console.log(my_func('Pretend '));

class Dog {
    constructor() {
        this.sound = 'woof';
    }

    makeSound() {
        console.log(this.sound);
    }
}

const myDog = new Dog();
console.log(myDog);
console.log(myDog.sound);
myDog.makeSound()
console.log(myDog['sound']);
myDog['makeSound']()
