const defaultState = {};

const LOAD_TWEETS = 'tweets/LOAD_TWEETS';

const loadTweets = (payload) => {
    return {
        type: LOAD_TWEETS,
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

const tweetReducer = (state = defaultState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case LOAD_TWEETS:
            return { ...newState, ...action.payload };

        default:
            return state;
    }
};

export default tweetReducer;

// const GET_TWEETS = 'tweets/GET_TWEETS';
// const CREATE_TWEET = 'tweets/CREATE_TWEET';

// const getAllTweets = (data) => {
//     return {
//         type: GET_TWEETS,
//         payload: data,
//     };
// };

// const createTweet = (tweet) => {
//     return {
//         type: CREATE_TWEET,
//         payload: tweet,
//     };
// };

// case GET_TWEETS:
//     // console.log('Redux store loaded all tweets!');
//     return { ...newState, ...action.payload };

// case CREATE_TWEET:
//     // console.log('Redux store added a new tweet!');
//     // newState[action.payload.id] = action.payload;
//     return { ...newState, ...action.payload };

// console.log('Starting to send data to the backend...');

// console.log("The backend responded! Now I'm just sitting here waiting...");

// setTimeout(async () => {
//     if (res.ok) {
//         const newData = await res.json();
//         dispatch(createTweet(newData));
//     }
// }, 10000);
