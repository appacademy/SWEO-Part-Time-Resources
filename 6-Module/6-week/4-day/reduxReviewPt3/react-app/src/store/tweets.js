const defaultState = {};

const LOAD_TWEETS = 'tweets/LOAD_TWEETS';
const DELETE_TWEET = 'tweets/DELETE_TWEET';

const loadTweets = (payload) => {
    return {
        type: LOAD_TWEETS,
        payload,
    };
};

const deleteTweet = (payload) => {
    return {
        type: DELETE_TWEET,
        payload,
    };
};

export const getAllTweetsThunk = () => async (dispatch) => {
    const res = await fetch('/api/tweets');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadTweets(data));
    }
};

export const createTweetThunk = (data) => async (dispatch) => {
    const newTweet = JSON.stringify(data);

    const res = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: newTweet,
    });

    if (res.ok) {
        const newData = await res.json();
        dispatch(loadTweets(newData));
    }
};

export const editTweetThunk = (data) => async (dispatch) => {
    const editTweet = JSON.stringify(data);

    const res = await fetch('/api/tweets', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: editTweet,
    });

    if (res.ok) {
        const newData = await res.json();
        dispatch(loadTweets(newData));
    }
};

export const deleteTweetThunk = (data) => async (dispatch) => {
    const body = JSON.stringify(data);

    const res = await fetch(`/api/tweets/${data.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });

    if (res.ok) {
        dispatch(deleteTweet(data.id));
    }
};

const tweetReducer = (state = defaultState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case LOAD_TWEETS:
            return { ...newState, ...action.payload };

        case DELETE_TWEET:
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
};

export default tweetReducer;
