import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTweetThunk } from '../store/tweets';
import { useHistory } from 'react-router-dom';

const CreateTweet = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [tooLong, setTooLong] = useState(false);

    useEffect(() => {
        if (text.length > 280) {
            setTooLong(true);
        } else {
            setTooLong(false);
        }
    }, [text]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { text };

        console.log("Let's go create a tweet");
        dispatch(createTweetThunk(data));
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label style={{ display: 'block' }}>
                Tell the world what's on your mind!
            </label>
            {tooLong ? <h1>THIS TWEET IS TOOOOO LONG!!!!</h1> : null}
            <textarea
                placeholder="Write your tweet"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
                style={{ display: 'block' }}
                disabled={text.length === 0 || tooLong}
            >
                Tweet it!
            </button>
        </form>
    );
};

export default CreateTweet;
