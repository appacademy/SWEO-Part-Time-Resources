const User = require('./user')

class Patient extends User{
  constructor(...args){
    super(...args);
    this.insurance = null;
  }

  setInsurance(ins){
    this.insurance = ins;
  }

  getInsurance(){
    return this.insurance;
  }
}

module.exports = Patient;