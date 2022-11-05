class User {
    constructor(name, month, day, year){
        this.name = name
        this.birthday = new Date(year, month - 1, day)
    }
    getBirthday(){
        return this.birthday.toDateString()
    }

    getAge(){
        let today = new Date()
        let age = today.getFullYear() - this.birthday.getFullYear()

        //birthday math below:
        if(today.getMonth() < this.birthday.getMonth() ||
       (today.getMonth() === this.birthday.getMonth()  && today.getDate() < this.birthday.getDate())){
        age--
       }

        return age
    }
}

module.exports = User
