const User = require('./user')

class Doctor extends User{
  constructor(...args){
    super(...args);
    this.insurances = [];
    this.appointments = [];
  }

  acceptsInsurance(insurance){
    if (this.insurances.includes(insurance)) return true
    return false;
  }

  addInsurance(insurance){
    this.insurances.push(insurance)
  }

  removeInsurance(insurance){
    this.insurances.forEach((ins, i) => {
      if (ins === insurance){
        this.insurances.splice(i, 1);
      }
    })
  }

  addAppointment(app){
    this.appointments.push(app);
  }
}

module.exports = Doctor;