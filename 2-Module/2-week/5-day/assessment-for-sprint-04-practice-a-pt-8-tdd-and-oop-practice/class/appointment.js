class Appointment {
    constructor(doctor, patient, month, date, year, hour){
        this.doctor = doctor
        this.patient = patient
        this.month = month
        this.date = date
        this.year = year
        this.hour = hour

        let today = new Date()
        let docAppointments = doctor.appointments
        docAppointments.forEach(appointment => {
            if(appointment.hour === this.hour){
                throw new AppointmentError('Invalid time slot')
            }
        })

        if(this.date <= today.getDate()){
            throw new AppointmentError('Appointment must be in the future')
        }
        if(!patient.getInsurance()){
            throw new AppointmentError('Patient\'s insurance not supported')
        }
        if(this.hour < 8 || this.hour > 17){
            throw new AppointmentError('Invalid time slot')
        }else{
            docAppointments.push(this)
        }
    }

}

class AppointmentError extends Error{
    constructor(message){
        super()
        this.message = message
    }
}

module.exports = [Appointment, AppointmentError]