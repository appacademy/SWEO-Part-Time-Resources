const User = require('./user')
class Doctor extends User {
    constructor(){
        super()
        this.acceptedInsurance = []
        this.validTimeSlot = []
    }
    acceptsInsurance(name){
        if(this.acceptedInsurance.includes(name)){
            return true
        }else{
            return false
        }
    }
    addInsurance(name){
        this.acceptedInsurance.push(name)
    }
    removeInsurance(name){
        this.acceptedInsurance = this.acceptedInsurance.filter(el => el!==name)
    }
}

module.exports = Doctor