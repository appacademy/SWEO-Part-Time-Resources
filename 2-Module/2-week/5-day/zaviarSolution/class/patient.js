const User = require('./user');

class Patient extends User {
	constructor(name, month, date, year) {
		super(name, month, date, year)
		this.insurance = null;
		// start the user with 'null' insurance
	}

	// sets the insurance for the user
	setInsurance(ins) {
		this.insurance = ins
	}

	// returns the insurance for the user
	getInsurance() {
		return this.insurance
	}
}

module.exports = Patient