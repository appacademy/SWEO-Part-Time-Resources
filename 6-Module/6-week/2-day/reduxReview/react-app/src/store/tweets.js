const defaultState = {};

const GET_TWEETS = 'tweets/GET_TWEETS';

const getAllTweets = (data) => {
    return {
        type: GET_TWEETS,
        payload: data,
    };
};

export const getAllTweetsThunk = () => async (dispatch) => {
    const res = await fetch('/api/tweets');

    console.log('The thunk has received data from the backend!');

    if (res.ok) {
        const data = await res.json();
        dispatch(getAllTweets(data));
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
