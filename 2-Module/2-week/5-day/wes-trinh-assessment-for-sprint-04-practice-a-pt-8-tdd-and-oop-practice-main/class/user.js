class User {

    constructor(name, month, day, year) {
        this.name = name;
        this.month = month - 1;
        this.day = day;
        this.year = year;
        this.date = new Date(this.year, this.month, this.day);
    }

    getBirthday() {
        return this.date.toDateString();
    }

    getAge() {
        const today = new Date(); //6/11/2022
        let age = today.getFullYear() - this.year; //2022 - 1985 --> 37

        if (today.getMonth() < this.month ||
            today.getMonth() === this.month && today.getDate() < this.day) {
            age--;
        }

        return age;
    }
}

let user = new User("John Doe", 10, 17, 1985); //DO NOT CHANGE VALUES IN EXAMPLE OR TEST SPECS. Only change your code

console.log(user.getBirthday()) //value testing should equal: 'Thu Oct 17 1985'

console.log(user.getAge()) //37

module.exports = User;