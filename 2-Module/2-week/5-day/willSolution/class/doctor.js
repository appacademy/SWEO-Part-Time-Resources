const User = require('./user')


class Doctor extends User{
    constructor(name, birthMonth, birthDate, birthYear){
        super(name, birthMonth, birthDate, birthYear);
        this.acceptedInsurance = [];
        this.appointments = [];
    }

    acceptsInsurance(insurance){
        return this.acceptedInsurance.includes(insurance)
    }

    addInsurance(insurance){
        if(!this.acceptedInsurance.includes(insurance)) this.acceptedInsurance.push(insurance)
        return;
    }

    removeInsurance(insurance){
        this.acceptedInsurance.splice(this.acceptedInsurance.indexOf(insurance), 1)
        return;
    }

}

module.exports = Doctor;
