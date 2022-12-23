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

        dispatch(createTweetThunk(data));

        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label style={{ display: 'block' }}>
                What do you want to say to the world?
            </label>
            {tooLong ? <h1>THIS TWEET IS TOOOOO LONG!!!!!</h1> : null}
            <textarea
                placeholder="Write a tweet!"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button disabled={text.length === 0 || tooLong}>
                Send your Tweet!
            </button>
        </form>
    );
};

export default CreateTweet;
