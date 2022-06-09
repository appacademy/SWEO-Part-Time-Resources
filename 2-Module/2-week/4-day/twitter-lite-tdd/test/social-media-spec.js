const { expect } = require("chai");

const User = require('../class/user');
const Tweet = require('../class/tweet');
const VerifiedUser = require('../class/verified-user');
const TwitterFeed = require('../class/twitterFeed');

console.log(Tweet.tweetCounter);

describe("User Class", function () {
    it("should construct the property of `userName`", function () {
        //are we trrying to pass the description or are we trying to pass the mocha test specs? (expect)

        // THE CODE IS TRUTH, Not particularly the description, understanding the code below is what will get you the passing score.
        // remember actual vs. expected
        let johnUser = new User("John Quack");
        expect(johnUser.userName).to.be.equal("John Quack")
        //johUSer.userName is your actual value that is being tested (could go wrong)
        //.equal("John Quack") expected value that your `actual` has to pass this.


        
    })
    it("should contain the intial `tweets` & `verified` attributes as well", function () {
        let johnUser = new User("John Quack");
        expect(johnUser.tweets).to.deep.equal([])
        expect(johnUser.verified).to.be.false;
    })
})

describe("VerifiedUser Class", function () {

    it("should inherit from the base User class", function () {
        let verifiedKawhi = new VerifiedUser("Kawhi Leonard");

        expect(verifiedKawhi instanceof User).to.be.true;
        expect(verifiedKawhi instanceof VerifiedUser).to.be.true;
    });

    it("should have the property `verified` changed to be true", function () {
        let verifiedKawhi = new VerifiedUser("Kawhi Leonard");

        expect(verifiedKawhi.userName).to.equal("Kawhi Leonard");
        expect(verifiedKawhi.verified).to.equal(true);
    });


    it("only verified users could have their userName changed, otherwise throw an error", function () {
        let verifiedKawhi = new VerifiedUser("Kawhi Leonard");
        verifiedKawhi.changeUsername('Board Man Gets Paid');
        expect(verifiedKawhi.userName).to.equal("Board Man Gets Paid");
        verifiedKawhi.verified = false;
        expect(verifiedKawhi.changeUsername.bind(verifiedKawhi, "The Klaw")).to.throw(Error);
    });
});


describe("Tweet Class", function () {
    it("Tweet class should have static variable to keep track of tweets created", function () {
        expect(Tweet.tweetCounter).to.be.equal(0);
    })

    it("constructor should contain and intialize the initial properties... & ALSO increment the static variable tweetCounter by one each time a Tweet is created", function () {
        let johnUser = new User("John Quack");
        let tweetOne = new Tweet("tweet one message", false, johnUser);

        expect(tweetOne.contentMessage).to.equal("tweet one message")
        expect(tweetOne.imageAdded).to.equal(false);
        expect(tweetOne.creator instanceof User).to.be.true;

        //hint: does static variable belong to instance or class? (also static variables should be outside the constructor)
        expect(Tweet.tweetCounter).to.equal(1);
        expect(tweetOne.tweetId).to.equal(Tweet.tweetCounter);
    })

    it("should only be valid tweet if contentMessage does NOT equal to undefined and the type of imageAdded is a boolean", function () {
        let johnUser = new User("John Quack");
        let validTweetTwo = new Tweet("tweet two message", false, johnUser);
        let invalidTweetTwo = new Tweet(undefined, 10, johnUser);

        expect(validTweetTwo.validTweet()).to.be.true;
        expect(invalidTweetTwo.validTweet()).to.be.false;

        //hint: what is being attached to the instances (validTweetTwo)
    });

})

describe("TwitterFeed class", function () {
    it("should have a property tweetsFeed that is initially set as an empty array", function () {
        const twitterFrontPage = new TwitterFeed();
        expect(twitterFrontPage.tweetsFeed).to.deep.equal([])
    });

    it("should allow valid tweets to be added", function () {
        const twitterFrontPage = new TwitterFeed();

        let johnUser = new User("John Quack");
        let validTweetTwo = new Tweet("tweet two message", false, johnUser);

        expect(twitterFrontPage.tweetsFeed.length).to.equal(0);
        twitterFrontPage.addTweetToFeed(validTweetTwo);
        expect(twitterFrontPage.tweetsFeed.length).to.equal(1);


    });

    it("should NOT allow invalid tweets to be added, if valid throw error", function () {
        const twitterFrontPage = new TwitterFeed();

        let johnUser = new User("John Quack");
        let invalidTweetTwo = new Tweet(undefined, 10, johnUser);

        expect(twitterFrontPage.addTweetToFeed.bind(twitterFrontPage, invalidTweetTwo)).to.throw(Error);
    });

    it("should return a new array list of tweets feed that have a different format", function () {
        const twitterFrontPage = new TwitterFeed();

        let johnUser = new User("John Quack");
        let validTweetTwo = new Tweet("tweet two message", false, johnUser);
        let validTweetThree = new Tweet("tweet three message", true, johnUser);


        twitterFrontPage.addTweetToFeed(validTweetTwo);
        twitterFrontPage.addTweetToFeed(validTweetThree);


        const feedShouldLookLike = [
            'Creator: John Quack | Content: tweet two message',
            'Creator: John Quack | Content: tweet three message'
        ]

        expect(twitterFrontPage.getFormatFeed()).to.deep.equal(feedShouldLookLike);
    });
})

describe("User Class PT 2", function () {
    it("should have an instance method to add tweet to the user instance's tweets property", function () {
        let johnUser = new User("John Quack");

        let validTweetTwo = new Tweet("tweet two message", false, johnUser);

        johnUser.addTweetToUser(validTweetTwo)

        expect(johnUser.tweets[0] instanceof Tweet).to.be.true;
    })
})

describe("Integration Testing TwitterFeed, User & Tweet", function () {
    //HINT: 
    //* Comment out the tests one by one to see which one you are failing. 

    //* another option is to run the examples (i.e. the ones provided here) in the corresponding class file to test.

    it("TwitterFeed class should have a method to make the tweet, adding the tweet to the user and the twitter feed", function () {
        const johnUser = new User("John");
        const julieUser = new User("Julie");

        const twitterFrontPage = new TwitterFeed();

        const johnsTweet = twitterFrontPage.makeTweetForUser(johnUser, "thirrddd tweet", true);

        const juliesTweet = twitterFrontPage.makeTweetForUser(julieUser, "JULIES AWESOME TWEET", true);

        const feedShouldLookLike = [
            'Creator: John | Content: thirrddd tweet',
            'Creator: Julie | Content: JULIES AWESOME TWEET'
        ]

        expect(juliesTweet instanceof Tweet).to.be.true

        expect(johnUser.tweets[0].contentMessage).to.be.equal("thirrddd tweet")

        expect(johnUser.tweets[0] instanceof Tweet).to.be.true;

        expect(twitterFrontPage.getFormatFeed()).to.deep.equal(feedShouldLookLike);

    })
})