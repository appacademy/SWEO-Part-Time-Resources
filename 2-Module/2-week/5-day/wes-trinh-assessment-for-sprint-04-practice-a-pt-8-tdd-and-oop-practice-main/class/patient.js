const User = require('./user')

class Patient extends User{
    constructor(){
        super();
        this.insurance = null;
    }

    setInsurance(userInsurance){
        //update the insurance to whatever the user wants the insurance to be now;
        this.insurance = userInsurance;

    }

    getInsurance(){
        return this.insurance;
    }


}

module.exports = Patient;