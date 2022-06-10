class Tweet{

    //static methods / variables belong to the class not the instance
    static tweetCounter = 0;

    constructor(contentMessage, imageAdded, creator){
        this.contentMessage = contentMessage;
        this.imageAdded = imageAdded;
        this.creator = creator;

        //every time we instantiate (create a tweet) instance, we then want to increment the tweetCount static variable by 1
        Tweet.tweetCounter += 1;
        this.tweetId = Tweet.tweetCounter;
    }
}

//always comment out examples that we are running node before running mocha.

// let johnUser = new User("John Quack");
// let tweetOne = new Tweet("tweet one message", false, johnUser);


module.exports = Tweet;