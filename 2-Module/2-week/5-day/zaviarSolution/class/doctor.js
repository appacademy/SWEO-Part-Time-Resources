const User = require('./user');

class Doctor extends User {
  constructor(name, month, day, year) {
    super(name, month, day, year);
    this.insuranceList = [];
    this.appointments = [];
    // I created a list for all insurance the Doctor accepts,
    // and a list of all appointments the Doctor has
  }

  // adds insurance to Doctor's accepted list
  addInsurance(ins) {
    this.insuranceList.push(ins);
  }

  // checks if passed in insurance is accepted by the Doctor
  acceptsInsurance(ins) {
    return this.insuranceList.includes(ins);
  }

  // removes the passed in insurance from the Doctor's accepted list
  removeInsurance(ins) {
    if (this.acceptsInsurance(ins)) {
      this.insuranceList.splice(this.insuranceList.indexOf(ins), 1);
    }
  }

  // adds an appointment to the Doctor's list
  addAppointment(app) {
    this.appointments.push(app);
  }

  // checks if the passed in appointment conflicts with any of the Doctor's
  // currently scheduled appointments
  checkAppointments(app) {
    return this.appointments.filter((el) => el.getTime() === app.getTime());
    /* 
		This function works by using filter. We iterate over the Doctor's current
		list of appointments. For each element in that list, we call getTime(). This
		returns the time in milliseconds of the appointment. If that time is exactly
		equal to the time of the passed in appointment, then filter adds it to its
		return array. When checkAppointments is done running, it will return either
		an empty array, or an array with the conflicting appointment. The function 
		that calls this method is checking to see if the length of the return array
		is 0. If the length is 0, there is no conflicting appointment. If the length
		is 1, then there is a conflicting appointment. (Should technically not be 
		possible to have the length be anything other than 0 or 1, but anything 
		greater than 0 would mean there is a conflicting appointment already 
		scheduled.)
		*/
  }
}

module.exports = Doctor;
