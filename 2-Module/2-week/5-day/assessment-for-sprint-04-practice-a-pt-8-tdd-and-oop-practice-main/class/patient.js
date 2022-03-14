const User = require('./user')

class Patient extends User{
    constructor(){
        super()
        this.insurance = null
    }
    setInsurance(name){
        this.insurance = name
    }
    getInsurance(){
        return this.insurance
    }
}

module.exports = Patient