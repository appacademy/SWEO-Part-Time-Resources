// const upperCase = (string) => {
//     console.log(string);
// };

// console.log(multiplyString('hello'))

const multiplyString = function(string){
    return () => string * 2
}

console.log(multiplyString('hello'))
