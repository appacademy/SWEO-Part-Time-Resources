const defaultState = {};

const GET_TWEETS = 'tweets/GET_TWEETS';

const getAllTweets = (tweets) => {
    return {
        type: GET_TWEETS,
        payload: tweets,
    };
};

export const getAllTweetsThunk = () => async (dispatch) => {
    const res = await fetch('/api/tweets');

    console.log('Thunk got the data from the backend!');

    if (res.ok) {
        const tweets = await res.json();

        dispatch(getAllTweets(tweets));
    }
};

const tweetReducer = (state = defaultState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case GET_TWEETS:
            return { ...newState, ...action.payload };

        default:
            return state;
    }
};

export default tweetReducer;
