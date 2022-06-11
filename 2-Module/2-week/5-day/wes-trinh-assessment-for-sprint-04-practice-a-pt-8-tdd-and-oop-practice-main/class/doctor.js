const User = require('./user')
class Doctor extends User{
    constructor(){
        super();
        this.insurances = []//we can take in multiple insurance, so we need a datatructure to hold many insurance
        this.appointments = [];
    }


    acceptsInsurance(insurance){
        if(this.insurances.includes(insurance)){
            return true;
        }
        return false;
    }

    addInsurance(insurance){
        //if insurances is already existing as an accepted insurance in the doctor's policy, then we don't add another one


        //if insurance is not in there, add it to insurance
        if(!this.insurances.includes(insurance)){
            this.insurances.push(insurance);
        }

        //otherwise we don't push, cause it already exists
        
    }

    removeInsurance(insurance){
        //if insurance exists in the array, remove it
        if(this.insurances.includes(insurance)){
            const insuranceIndx = this.insurances.indexOf(insurance);
            this.insurances.splice(insuranceIndx, 1);
        }
        //otherwise, do nothing

    }
}

// const doctor = new Doctor("Richard Kimble", 7, 13, 1942);

// doctor.addInsurance('BnL Insurance'); //add ins

// doctor.removeInsurance('BnL Insurance'); //remove ins

// console.log(doctor.insurances)

module.exports = Doctor;