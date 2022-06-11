const User = require('./user');
const Tweet = require('./tweet');
const VerifiedUser = require('./verified-user');


class TwitterFeed{
    constructor(){
        this.tweetsFeed = [];
    }


    addTweetToFeed(tweetInstance){
        //make sure tweetInstance is an instance of Tweet class & is valid tweet
        if(tweetInstance instanceof Tweet && tweetInstance.validTweet()){
            this.tweetsFeed.push(tweetInstance);
        }
        else{
            throw new Error();
        }
    }

    getFormatFeed(){
        //take the array of tweet instances, create a copy and format it as ["Creator: John | Content: my first tweet", ...]
        const formattedFeed = []
        for(let i=0; i<this.tweetsFeed.length; i++){
            const tweetInstanceObj = this.tweetsFeed[i];
            const formattedTweet = tweetInstanceObj.formatTweet();
            formattedFeed.push(formattedTweet);
        }
        return formattedFeed;
    }

    makeTweetForUser(userInstance, messageContent, imageAdded){

            //create the new Tweet w/ provided data
            const createdTweet = new Tweet(messageContent, imageAdded, userInstance);

            //then add tweet to user's tweets
            userInstance.addTweetToUser(createdTweet); 

            //the add tweet to feed
            this.addTweetToFeed(createdTweet)

            return createdTweet;
    }
}

// const johnUser = new User("John");

// const TweetOne = new Tweet("first aa tweet", false, johnUser.userName);
// console.log(TweetOne);
// console.log(Tweet.tweetCounter) // 1

// const TweetTwo = new Tweet("second aa tweet", false, johnUser.userName);
// console.log(TweetTwo);
// console.log(Tweet.tweetCounter) // 2

// const twitterFrontPage = new TwitterFeed();
// twitterFrontPage.addTweetToFeed(TweetOne);
// twitterFrontPage.addTweetToFeed(TweetTwo);

// twitterFrontPage.makeTweetForUser(johnUser, "thirrddd tweet", true);

// console.log(twitterFrontPage.getFormatFeed())

module.exports = TwitterFeed;