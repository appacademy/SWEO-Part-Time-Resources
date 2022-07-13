// password hashing 
// cannot be reversed
// same input yields the same output

const sha256 = require('sha256')

const hash = (string) => sha256(string)

class User {
    constructor(password){
        password = 'SuperSecret' + password + 'SuperSecret'// SuperSecretpasswordSuperSecret
        this.password = hash(password)
    }

    checkPassword(string){
        if (this.password === hash(string)) return "Thats The correct Password"
        else return "the password you entered is incorrect"
    }

    changePassword(string){
        string = 'SuperSecret' + string + 'SuperSecret'
        this.password = hash(string)
    }
}

const baylen = new User('password')

// console.log(baylen.password === hash('password1'))
// console.log(hash('password1'))
console.log(baylen.password)
console.log(hash('password'))


const commonPasswords = ['1234', 'password', 'admin', 'superSecret']

const rainbowTable = (array) => {
    const rainbow = {}
    array.forEach(el => {
        rainbow[el] = hash(el)
    });
    return rainbow
}

const hackObj = rainbowTable(commonPasswords)

// console.log(hackObj)


const tryToHackUser = (user) => {
    for(key in hackObj){
       let value = hackObj[key]
       if(user.password === value){
        return `this user has been hacked, and their password is ${key}`
       }
       return 'They were too smart to be hacked'
    }
}
baylen.changePassword('1234')

console.log(tryToHackUser(baylen))






