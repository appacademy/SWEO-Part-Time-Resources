class Appointment{
    constructor(doctor, patient, month, date, year, hour){
        this.doctor = doctor;
        this.patient = patient;
        this.month = month;
        this.date = date;
        this.year = year;
        this.hour = hour;

        //see if current date is less than app date
        const currDate = new Date()
        this.appDate = new Date(year, month, date, hour)

        if(this.appDate < currDate){
            throw new AppointmentError("Appointment must be in the future")
        }

        if(!this.doctor.acceptsInsurance(this.patient.insurance)){
            throw new AppointmentError("Patient's insurance not supported")
        }

        //time slot if statement
        if(this.hour < 8 || this.hour > 17){
            throw new AppointmentError('Invalid time slot')
        }

        //we need to see if an app already exists throw err
        let appointmentDate = new Date(this.year, this.month, this.date, this.hour).toString()
        if(this.doctor.appointments.includes(appointmentDate)){
            throw new AppointmentError('Invalid time slot')
        }

        this.doctor.addAppointment(appointmentDate)

    }
}

class AppointmentError extends Error{
    constructor(message) {
        super(message)
    }

}

module.exports = [Appointment, AppointmentError]
