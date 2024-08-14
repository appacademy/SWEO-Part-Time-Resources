// eager
// Getting the tweet


const firstTweet = await Tweet.findOne({
    where: {
        id: 1
    },
    include: User
});


// lazy 
// Getting the tweet
const secondTweet = await Tweet.findOne({ 
    where: {
        id: 2
    }
});

// Later using the tweet to get the user that created the tweet
const tweetOwner = await firstTweet.getUser();