
class User {
    constructor(name, birthMonth, birthDate, birthYear){
        this.name = name
        this.birthDate = new Date(birthYear, birthMonth - 1, birthDate)
    }
    getBirthday(){
        return this.birthDate.toDateString();
    }

    getAge(){
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        if (today.getMonth() < this.birthDate.getMonth() ||
        today.getMonth() === this.birthDate.getMonth() && today.getDate() < this.birthDate.getDate()) {
      age--;
    }
    return age;
    }
}


module.exports = User;
