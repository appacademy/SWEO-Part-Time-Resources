class User {
  constructor(name, month, day, year) {
    this.name = name;
    this.birthday = new Date(year, month - 1, day);
    // Date object requires args in "year, month, date" order
    // Must be month - 1 because month is 0-indexed
  }

  getBirthday() {
    return this.birthday.toDateString();
  }

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();

		// Just some birthday math here. 
		// Current year - birth year = current age ONLY IF your birthday has already passed. 
    if (
      today.getMonth() < this.birthday.getMonth() ||
      (today.getMonth() === this.birthday.getMonth() &&
        today.getDate() < this.birthday.getDate())
    ) {
      age--;
    }

    return age;
  }
}

module.exports = User;
