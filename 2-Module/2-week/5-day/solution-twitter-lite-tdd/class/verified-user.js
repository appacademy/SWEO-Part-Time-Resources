const User = require('./user');

class VerifiedUser extends User{
    constructor(userName){
        super(userName);
        //^same as:
        // this.userName = userName;
        // this.tweets = [];
        // this.verified = false;

        this.verified = true;
    }

    changeUsername(nameToChange){
        if(this.verified){
            this.userName = nameToChange;
            return this.userName;
        }
        else{
            throw new Error();
        }
    }
}


module.exports = VerifiedUser;