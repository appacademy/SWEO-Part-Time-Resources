const User = require('./user')

class VerifiedUser extends User{
    //inherit the constructor, then change the value there to be verified = true
    constructor(userName){
        super(userName); //through inheriting super, we get all the properties inherited as well
        //^same as:
        // this.userName = userName;
        // this.tweets = [];
        // this.verified = false;

        //update the this.verified property to be true
        this.verified = true; 
    }

    changeUsername(nameToChange){
        if(this.verified === true){
            this.userName = nameToChange;
            return this.userName;
        }
        else{
            const errorInstance = new Error();
            throw errorInstance;
        }
    }
}

let verifiedKawhi = new VerifiedUser("Kawhi Leonard");

console.log(verifiedKawhi.userName);

module.exports = VerifiedUser;