class User{

    constructor(name, month, day, year){
        this.name = name;
        this.month = month - 1;
        this.day = day;
        this.year = year;
        this.date = new Date(this.year, this.month, this.day);
    }

    getBirthday(){
        return this.date.toDateString();
    }
}

let user = new User("John Doe", 10, 17, 1985); //DO NOT CHANGE VALUES IN EXAMPLE OR TEST SPECS. Only change your code

console.log(user.getBirthday()) //value testing should equal: 'Thu Oct 17 1985'

module.exports = User;