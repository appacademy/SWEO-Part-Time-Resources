class User {
    constructor(name, age){
        if(name === null){
            this.name = 'anthony'
        } else {
            this.name = name
        }
        this.age = age
    }

    printName(){
        return this.name
    }
}

module.exports = User;
