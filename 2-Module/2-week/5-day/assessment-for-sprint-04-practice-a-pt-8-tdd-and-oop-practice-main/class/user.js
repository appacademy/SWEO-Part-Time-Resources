const { supportsEsModules } = require("mocha/lib/utils");

class User {
    constructor(name, month, day, year){
        this.name = name
        this.month = month
        this.day = day
        this.year = year
        
    }
    getBirthday(){
        let birthday = new Date(this.year, this.month -1, this.day)
        return birthday.toDateString()
    }
    getAge(){
        const today = new Date();
        let age = today.getFullYear() - this.year;

        if (today.getMonth() < this.month - 1 ||
            today.getMonth() === this.month - 1 && today.getDate() < this.day) {
            age--;
        }
    return age
    }
}

module.exports = User