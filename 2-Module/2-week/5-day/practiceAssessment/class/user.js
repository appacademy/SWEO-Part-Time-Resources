

class User{
  constructor(name, month, day, year){
    this.name = name;
    this.month = month;
    this.day = day;
    this.year = year;
    this.birthday = new Date(`${month} ${day} ${year}`);
  }

  getBirthday(){
    return this.birthday.toDateString();
  }

  getAge(){
    const today = new Date();
    let age = today.getFullYear() - this.year;

    if (today.getMonth() < this.month ||
        today.getMonth() === this.month && today.getDate() < this.day) {
      age--;
    }
    return age;
  }

}

module.exports = User;