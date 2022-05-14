const Doctor = require('./doctor')
const Patient = require('./patient')

class Appointment {
    constructor(doctor, patient, month, date, year, hour){
        this.doctor = doctor;
        this.patient = patient;
        this.month = month;
        this.date = date;
        this.year = year;
        this.hour = hour;

        const now = new Date()
        this.appDate = new Date(this.year, this.month, this.date, this.hour)

        if(this.appDate < now){
            throw new AppointmentError('Appointment must be in the future')
        }

        if (!this.doctor.acceptsInsurance(this.patient.insurance)){
            throw new AppointmentError("Patient's insurance not supported")
        }

        if(this.hour < 8 || this.hour > 17){
            throw new AppointmentError("Invalid time slot")
        }


        let appointmentDate = new Date(this.year, this.month, this.date, this.hour).toString()

        if(this.doctor.appointments.includes(appointmentDate)){
            throw new AppointmentError("Invalid time slot")
        } else {
            this.doctor.appointments.push(appointmentDate)
        }

    }
}


class AppointmentError extends Error {
    constructor(message){
        super(message)
    }
}


module.exports = [Appointment, AppointmentError]
