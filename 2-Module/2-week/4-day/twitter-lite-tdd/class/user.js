class User{
    constructor(userName){
        this.userName = userName;
        this.tweets = [];
        this.verified = false;
    }
}

// let johnUser = new User("John Quack");

// console.log(johnUser.userName) //expected: "John Quack"


module.exports = User;