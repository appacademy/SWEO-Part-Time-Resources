import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTweetsThunk } from '../store/tweets';
import SingleTweet from './SingleTweet';

const AllTweets = () => {
    const dispatch = useDispatch();

    const tweets = useSelector((theEntireReduxStore) => {
        // return theEntireReduxStore.spots
        return Object.values(theEntireReduxStore.tweets);
    });

    useEffect(() => {
        dispatch(getAllTweetsThunk());
    }, [dispatch]);

    return (
        <div>
            <h1>Twitter Homepage</h1>
            {tweets.map((tweet) => (
                <SingleTweet key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};

export default AllTweets;
