class User{
    constructor(userName){
        this.userName = userName;
        // this.followerCounter = 0;
        this.tweets = [];
        this.verified = false;
    }

    addTweetToUser(tweetInstanceObj){
        //if tweetInstanceObj is undefined, throw error
        if(tweetInstanceObj !== undefined){
            this.tweets.push(tweetInstanceObj);
            return this.tweets;
        }
        else{
            throw new Error();
        }
    }
}

// const johnUser = new User("John");
// johnUser.addTweetToUser({})
// console.log(johnUser.tweets);


module.exports = User;