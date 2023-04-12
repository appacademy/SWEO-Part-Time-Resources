//If we want to export just one item we use export default

export default class Wallet {

}

function sayHi() {
    console.log(hi)
}




//Exporting in CommonJS

// module.exports = {
//     Wallet,
//     sayHi
// }

//Exporting in ES6

export {
    Wallet,
    sayHi
}