class Wallet {

}

function sum(x, y) {
    console.log(x + y);
}

function sayHi() {
    console.log('Hi')
}

/* 
COMMON JS MODULE EXPORT

module.exports = {
    Wallet,
    sum,
    sayHi
}
*/

//ES6 Export syntax:

export {
    Wallet,
    sum,
    sayHi
};
