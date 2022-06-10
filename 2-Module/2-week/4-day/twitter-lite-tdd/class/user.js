class User{
    constructor(userName){
        this.userName = userName;
        this.tweets = [];
        this.verified = false;
    }
}

// let johnUser = new User("John Quack");

// console.log(johnUser.userName) //"John Quack"

// console.log(johnUser.tweets);

// console.log(johnUser.verified);

module.exports = User;