import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTweetsThunk } from '../store/tweets';

// const whenDoesThisRun = () => console.log('Hey look at me!');

const AllTweets = () => {
    const dispatch = useDispatch();

    const tweets = useSelector((entireReduxStore) => {
        console.log("I'm selecting some new redux data");
        return Object.values(entireReduxStore.tweets);
    });

    useEffect(() => {
        console.log("I'M ABOUT TO DISPATCH FOR ALLLLL THE TWEEEETTSSSS");
        dispatch(getAllTweetsThunk());
    }, [dispatch]);

    return (
        <div>
            <h1>All Tweets</h1>
            {tweets.map((tweet) => (
                <div key={tweet.id}>
                    <h4>{tweet.username}</h4>
                    <p>{tweet.text}</p>
                    <span>
                        {tweet.likedByUsers.length} Like
                        {tweet.likedByUsers.length !== 1 ? 's' : null}
                    </span>
                </div>
            ))}
            {console.log('All tweets component has fully loaded/rerendered')}
        </div>
    );
};

export default AllTweets;
