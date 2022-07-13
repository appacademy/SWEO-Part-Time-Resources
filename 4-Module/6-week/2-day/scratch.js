// password hashing 
// cannot be reversed
// same input yields the same output

const sha256 = require('sha256')

const hash = (string) => sha256(string)

class User {
    constructor(password) {
        password = '123' + password + '123' // '123password123'
        this.password = hash(password)
    }

    checkPassword(string) {
        if (this.password === hash(string)) return "Thats The correct Password"
        else return "the password you entered is incorrect"
    }

    changePassword(string) {
        string = '123' + string + '123'
        this.password = hash(string)
    }
}

const baylen = new User('password')

// console.log(baylen.password)

const commonPassword = ['password', '1234', 'Password1234!', 'admin']

const makeRainbowTable = (array)  => {
    const rainbow = {}

    array.forEach(el => {
        rainbow[el] = hash(el)
    });

    return rainbow
}

const rainbow = makeRainbowTable(commonPassword)

const tryToHack = (user) => {
    for(let key in rainbow){
        let value = rainbow[key]
        if(user.password === value){
            return `this user has been hacked, and their password is ${key}`
        }
    }
    return 'this user is too smart to be hacked'
}

// baylen.changePassword('Password1234!')

console.log(tryToHack(baylen))
