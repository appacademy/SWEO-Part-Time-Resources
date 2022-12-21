import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTweetsThunk } from '../store/tweets';

// const whenDoesThisRun = () => console.log('Hey look at me!');

const AllTweets = () => {
    const dispatch = useDispatch();

    const tweets = useSelector((entireReduxStore) => {
        return Object.values(entireReduxStore.tweets);
    });

    useEffect(() => {
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
        </div>
    );
};

export default AllTweets;
