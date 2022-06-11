const User = require('./user');

class Tweet{

    static tweetCounter = 0;

    constructor(contentMessage, imageAdded, creator){
        //every time a tweet is created, use the static variable in Tweet, add one to it, and then use that as the tweet's ID
        this.contentMessage = contentMessage;
        this.imageAdded = imageAdded; //t or f
        this.creator = creator;
        Tweet.tweetCounter += 1;
        this.tweetId = Tweet.tweetCounter;
    }

    validTweet(){
        //imageAdded has to be a boolean
        //contentMessage has to not be undefined
        if(typeof this.imageAdded === 'boolean' && this.contentMessage !== undefined){
            return true;
        }
        else{
            return false;
        }
    }

    //helps format tweet, not tested
    formatTweet(){
        return `Creator: ${this.creator.userName} | Content: ${this.contentMessage}`
    }
}

// const johnUser = new User("John");
// const TweetOne = new Tweet("first aa tweet", false, johnUser.userName);
// console.log(TweetOne);

// console.log(Tweet.tweetCounter) // 1


// const TweetTwo = new Tweet("second aa tweet", false, johnUser.userName);
// console.log(TweetTwo);
// console.log(Tweet.tweetCounter) // 2

module.exports = Tweet;