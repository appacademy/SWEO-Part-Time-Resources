const User = require('./user')

class Doctor extends User{
    constructor(name, month, day, year){
        super(name, month, day, year)
        this.appointments = [];
        this.insuranceList = []
    }

    addInsurance(insurance){
        this.insuranceList.push(insurance)
    }

    acceptsInsurance(ins){
       return this.insuranceList.includes(ins)
    }

    removeInsurance(ins){
        //create function to splice out ins
        this.insuranceList.splice(this.insuranceList.indexOf(ins), 1)
        return;
    }

    addAppointment(app){
        this.appointments.push(app)
    }


}

module.exports = Doctor
