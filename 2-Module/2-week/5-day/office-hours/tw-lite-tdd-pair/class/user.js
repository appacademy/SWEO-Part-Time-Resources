const Tweet = require('./tweet')
class User{

    constructor(userName){
        //our constructor will run when we instantiate the class, and it should set the properties that we need and also use any raw data
        this.userName = userName; //this creates a property from the raw data.

        //properties we create upon instantiate the class, NOT READING FROM RAW DATA
        this.tweets = [];
        this.verified = false;
    }

    addTweetToUser(tweetInstance){
        if(tweetInstance instanceof Tweet){
            this.tweets.push(tweetInstance);
        }
    }
}

// let johnUser = new User("John Quack");
// console.log("testing:", johnUser.verified) //this should be false

module.exports = User;