import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTweetsThunk } from '../store/tweets';

const whenDoesThisRun = () => console.log('Hey look at me!');

const AllTweets = () => {
    whenDoesThisRun();
    const dispatch = useDispatch();

    const tweets = useSelector((theEntireReduxStore) => {
        console.log('Selection is happening now!');
        console.log(theEntireReduxStore.tweets);
        return Object.values(theEntireReduxStore.tweets);
    });

    useEffect(() => {
        console.log("I'm dispatching!!!");
        dispatch(getAllTweetsThunk());
    }, [dispatch]);

    return (
        <div>
            <h1>New Home Page</h1>
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
            {console.log('JSX has fully loaded')}
        </div>
    );
};

export default AllTweets;
