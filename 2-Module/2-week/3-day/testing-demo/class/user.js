class User{
    constructor(username, password){
        this.username = username
        if(!password){
            this.password = 'password'
        } else {
            this.password = password
        }
    }
}

module.exports = User
