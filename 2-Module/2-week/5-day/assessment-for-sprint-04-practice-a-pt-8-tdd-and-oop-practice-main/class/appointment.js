class Appointment{
    constructor(doctor, patient, month, date, year, hour){
        this.doctor = doctor
        this.patient = patient
        this.month = month
        this.date = date
        this.year = year
        this.hour = hour
        this.checkTimeSlot()
    }
    static validTimeSlot = []
    checkDates(){
        let today = new Date()
        let testAppoint = new Date(this.year, this.month, this.date, this.hour)
        // console.log(testAppoint.getTime() , Date.now())
        if(testAppoint.getTime() < Date.now()){
            throw new AppointmentError("Appointment must be in the future")
        }
    }
    checkInsurance(){
        // console.log('I am here')
        if(!this.doctor.acceptsInsurance(this.patient.insurance)){
            throw new AppointmentError("Patient's insurance not supported")
        }
    }
    checkTimes(){
        if(this.hour < 8 || this.hour > 17){
            throw new AppointmentError("Invalid time slot")
        }
    }
    checkTimeSlot(){
        let testAppoint = new Date(this.year, this.month, this.date, this.hour)
        this.checkDates()
        this.checkInsurance()
        this.checkTimes()
        console.log(Appointment.validTimeSlot)
        if(!this.doctor.validTimeSlot.includes(testAppoint.getTime())){
            this.doctor.validTimeSlot.push(testAppoint.getTime())
        }else{
            throw new AppointmentError("Invalid time slot")
        }
    }


}

class AppointmentError extends Error {
    constructor(message){
        super(message)
    }
}

module.exports = [Appointment, AppointmentError]