//need to import the User class into here so we can inherit it
const User = require('./user')

class VerifiedUser extends User {
    //inherit constructor and update any data necessary
    constructor(userName) {
        super(userName);
        //^same as:
        // this.userName = userName;
        // this.tweets = [];
        // this.verified = false;

        //change this.verified property to be true
        this.verified = true;
    }

    changeUsername(updatedName) {
        if (this.verified === true) {
            this.userName = updatedName;
            return this.userName;
        }
        else {
            //should throw error if instance user is not verified
            throw new Error();
        }

    }
}

// let verifiedKawhi = new VerifiedUser("Kawhi Leonard");

// console.log(verifiedKawhi instanceof User) //should be true
// console.log(verifiedKawhi instanceof VerifiedUser) //should be true

module.exports = VerifiedUser;