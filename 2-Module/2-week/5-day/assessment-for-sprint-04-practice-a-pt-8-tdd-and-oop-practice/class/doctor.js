const User = require("./user");

class Doctor extends User{
    constructor(name, month,day, year){
        super(name, month, day, year)
        this.appointments = []
        this.insurances = []
    }

    acceptsInsurance(insurance){
        if(this.insurances.includes(insurance)){
            return true
        } else {
            return false
        }
    }

    addInsurance(insurance){
        this.insurances.push(insurance)
    }

    removeInsurance(insurance){
        let index = this.insurances.indexOf(insurance)
        this.insurances.splice(index, 1)
    }
}

module.exports = Doctor