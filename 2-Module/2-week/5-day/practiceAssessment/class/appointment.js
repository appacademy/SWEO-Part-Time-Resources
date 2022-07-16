// const Doctor = require('./doctor');
// const Patient = require('./patient');

class Appointment{
  constructor(doctor, patient, month, day, year, hour){
    if (this.checkValidAppt(doctor, patient, month, day, year, hour)){
      this.doctor = doctor;
      this.patient = patient;
      this.month = month;
      this.day = day;
      this.year = year;
      this.hour = hour;
      this.app = new Date(year, month, day, hour)

      this.doctor.addAppointment(this);
    }
  }

  static checkDates(appointment){
    const today = new Date();
    if (appointment < today){
      throw new AppointmentError("Appointment must be in the future")
    }
  }

  static checkInsurance(doctor, patient){
    if (!doctor.insurances.includes(patient.insurance)){
      throw new AppointmentError("Patient's insurance not supported")
    }
  }

  static checkTimes(hour){
    if (hour < 8 || hour > 17){
      throw new AppointmentError("Invalid time slot")
    }
  }

  static checkDuplicates(doctor, appointment, hour){
    if (doctor.appointments.find(app => app.app.toString() === appointment.toString()))
      throw new AppointmentError("Invalid time slot")
  }

  checkValidAppt(doctor, patient, month, day, year, hour){
    
    let appointment = new Date(year, month, day, hour)
    
    Appointment.checkDates(appointment);
    Appointment.checkInsurance(doctor, patient);
    Appointment.checkTimes(hour);
    Appointment.checkDuplicates(doctor, appointment, hour);
    return true;
  }
}


class AppointmentError extends Error{
  constructor(message, ...args){
    super(...args)
    this.message = message;
  }
}

// const doctor = new Doctor("Richard Kimble", 7, 13, 1942);
// const patient = new Patient("Laszlo de Almasy", 12, 22, 1962);
// doctor.addInsurance('BnL Insurance');


// patient.setInsurance('BnL Insurance');

// const today = new Date();

// let tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1)

// let yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);

// const hour = 8;  // 8am
// const date = tomorrow.getDate();
// const month = tomorrow.getMonth();
// const year = tomorrow.getFullYear();
// const appointment = new Appointment(doctor, patient, month, date, year, hour);
// const appointment2 = new Appointment(doctor, patient, month, date, year, 12);


module.exports = [Appointment, AppointmentError];