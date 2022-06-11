const Doctor = require('./doctor')
const Patient = require('./patient')
class Appointment{
    constructor(doctor, patient, month, date, year, hour){
        this.doctor = doctor;
        this.patient = patient;
        this.month = month; 
        this.date = date;
        this.year = year;
        this.hour = hour;

        //appints should only be constructored or created if the hour is between 8am and 5pm 
        //if hour is less than 8, or hour is greater than 17 then throw an error
        if(this.hour < 8 || this.hour > 17){
            //we should never construct this instance, throw error instead
            throw new AppointmentError("Invalid time slot");
        }

        //make sure that the month, year, date are all in the present or future and not the past
        
        //current date
        this.nowDate = new Date(); //10 miliseconds
        //appointmentDate 
        this.appointmentDate = new Date(this.year, this.month, this.date, this.hour) //more than 10 miliseconds if it less than this is in the pass

        if(this.appointmentDate.valueOf() < this.nowDate.valueOf()){
            throw new AppointmentError("Appointment must be in the future");
        }

        if(!this.patient.getInsurance()){
            throw new AppointmentError("Patient's insurance not supported")
        }

        let appointmentDateString = this.appointmentDate.toString();
        if(doctor.appointments.includes(appointmentDateString)){
            throw new AppointmentError("Invalid time slot")
        }
        else{
            doctor.appointments.push(appointmentDateString);
        }


    }
}

class AppointmentError extends Error{
    constructor(...parameters){ //array
        super(...parameters); //spread array
    }
}
// let doctor;
// let patient;
// let patientNoInsurance;

// let today;
// let tomorrow;
// let yesterday;

// today = new Date();

// tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1)

// yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);

// const hour = 8;  // 8am
// const date = yesterday.getDate();
// const month = yesterday.getMonth();
// const year = yesterday.getFullYear();

// const appointment = new Appointment(doctor, patient, month, date, year, hour);

module.exports = [Appointment, AppointmentError]