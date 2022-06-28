const User = require('./user')
class Tweet{
    //static variable
    static tweetCounter = 0;
    constructor(contentMessage, imageAdded, creator ){
        this.contentMessage = contentMessage;
        this.imageAdded = imageAdded;
        this.creator = creator;

        //everytime we instantiate, our constructor runs, so now we have to increment our tweetCounter by 1.
        Tweet.tweetCounter += 1;
        this.tweetId = Tweet.tweetCounter;

    }

    validTweet(){
        if(typeof this.imageAdded !== 'boolean' && this.contentMessage === undefined ){
            //don't need to throw error unles they want us to
            //in this case, just want us to return true or false
            return false; //not a valid tweet
        }
        return true;
    }

    formatTweet(){
        const formattedTweet = `Creator: ${this.creator.userName} | Content: ${this.contentMessage}` 
        return formattedTweet;
    }
}

let johnUser = new User("John Quack");
let tweetOne = new Tweet("tweet one message", false, johnUser);

console.log(tweetOne.creator instanceof User) //expect this to be true
module.exports = Tweet;