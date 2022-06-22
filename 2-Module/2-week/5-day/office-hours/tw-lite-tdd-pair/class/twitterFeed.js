const User = require('./user')
const Tweet = require('./tweet')

class TwitterFeed {

    constructor() {
        this.tweetsFeed = [];
    }

    addTweetToFeed(tweetInstance) {
        //need to check if tweet is valid before adding
        if (tweetInstance.validTweet()) {
            this.tweetsFeed.push(tweetInstance)
        }
        else {
            //throw error
            throw new Error();
        }
    }

    getFormatFeed() {
        //takes the tweetsFeed array, format each tweet in it, push it to a new array, and then return that result array
        const resultArr = [];

        for (let i = 0; i < this.tweetsFeed.length; i++) {
            const tweetInstanceObj = this.tweetsFeed[i];

            //format each tweet and push to new array

            //----------method 1: do all logic here (not very SRP)----------
            // const formattedTweet = `Creator: ${tweetInstanceObj.creator.userName} | Content: ${tweetInstanceObj.contentMessage}` //tweetInstanceObj.creator.userName ==> the tweet --> the creator --> the creator's username

            //----------method 2: SRP Helper----------
            const formattedTweet = tweetInstanceObj.formatTweet();

            resultArr.push(formattedTweet);
        }

        return resultArr;
    }

    makeTweetForUser(creator, contentMessage, imageAdded){
        const tweetInstance = new Tweet(contentMessage, imageAdded, creator)

        //adding the tweet into the user's instance tweets array
        creator.addTweetToUser(tweetInstance);

        //add the tweet instance into our tweetsFeed
        this.addTweetToFeed(tweetInstance);

        return tweetInstance;
    }
}


// const twitterFrontPage = new TwitterFeed();

// let johnUser = new User("John Quack");

// let validTweetTwo = new Tweet("tweet two message", false, johnUser);

// let validTweetThree = new Tweet("tweet three message", true, johnUser);

// twitterFrontPage.addTweetToFeed(validTweetTwo);
// twitterFrontPage.addTweetToFeed(validTweetThree);

// console.log(twitterFrontPage.getFormatFeed()); //formatted data
module.exports = TwitterFeed;