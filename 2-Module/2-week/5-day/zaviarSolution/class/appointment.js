class Appointment {
  constructor(doctor, patient, month, date, year, hour) {
    this.doctor = doctor;
    this.patient = patient;
    this.app = new Date(year, month, date, hour - 1);

    // We can call instance methods inside the constructor. So, upon creation of
    // the Appointment instance, check if it's a valid appointment.
    if (this.checkValidApp()) this.doctor.addAppointment(this.app);
  }

  // Checks if the appointment is in the future manually by comparing all the
  // passed in times. Check Will's solution for a more elegant approach.
  checkFuture() {
    const today = new Date();

    if (this.app.getFullYear() > today.getFullYear()) return true;
    else if (this.app.getFullYear() === today.getFullYear()) {
      if (this.app.getMonth() > today.getMonth()) return true;
      else if (this.app.getMonth() === today.getMonth()) {
        if (this.app.getDate() > today.getDate()) return true;
        else if (this.app.getHours() > today.getHours()) return true;
      }
    }
    // if this line is reached, then the appointment is not in the future, so we
    // throw an error
    throw new AppointmentError('Appointment must be in the future');
  }

  // checks if a Patient's insurance is in the Doctor's accepted list
  checkInsurance() {
    if (this.doctor.acceptsInsurance(this.patient.getInsurance())) return true;
    else throw new AppointmentError("Patient's insurance not supported");
  }

  // checks if the new appointment was submitted within normal hours
  checkHours() {
    if (this.app.getHours() >= 7 && this.app.getHours() <= 16) return true;
    else throw new AppointmentError('Invalid time slot');
  }

  // checks if the Doctor has any other appointments scheduled at the same time
  // as the newly submitted appointment
  checkConflictingApps() {
    // for an explanation on how checkAppointments() works, check the method in
    // the Doctor class
    if (this.doctor.checkAppointments(this.app).length === 0) return true;
    else throw new AppointmentError('Invalid time slot');
  }

  // runs each check function and returns based on if ALL checks pass
  checkValidApp() {
    if (
      this.checkFuture() &&
      this.checkInsurance() &&
      this.checkHours() &&
      this.checkConflictingApps()
    )
      return true;
    else return false;
  }
}

class AppointmentError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = [Appointment, AppointmentError];
