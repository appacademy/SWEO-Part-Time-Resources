class User {
    constructor(name, month, day, year){
        this.name = name
        this.month = month
        this.day = day
        this.year = year
    }

    getBirthday(){
        return new Date(this.year, this.month - 1, this.day).toDateString()
    }

    getAge(){
        let today = new Date()
        let currentYear = today.getFullYear()
        let currMonth = today.getMonth()
        if(this.month >= currMonth){
            return currentYear - this.year - 1
        } else {
            return currentYear - this.year
        }
    }
}

module.exports = User