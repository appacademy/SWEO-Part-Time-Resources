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

    console.log('We got all the tweets!');

    if (res.ok) {
        const tweets = await res.json();

        dispatch(loadTweets(tweets));
    }
};

export const createTweetThunk = (data) => async (dispatch) => {
    const tweetData = JSON.stringify(data);

    console.log('About to go post to the backend');

    const res = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: tweetData,
    });

    console.log('Our data just got back from the backend!');

    console.log("Now I'm just sitting here...waiting......");

    // setTimeout(async () => {
    // console.log('10 seconds have passed!');
    if (res.ok) {
        const newTweet = await res.json();
        dispatch(loadTweets(newTweet));
    }
    // }, 10000);
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

// const getAllTweets = (tweets) => {
//     return {
//         type: GET_TWEETS,
//         payload: tweets,
//     };
// };

// const createTweet = (data) => {
//     return {
//         type: CREATE_TWEET,
//         payload: data,
//     };
// };

// case GET_TWEETS:
//     console.log('Redux store updated with ALL tweets');
//     return { ...newState, ...action.payload };

// case CREATE_TWEET:
//     console.log('Redux store updated with NEW posted tweet');
//     newState[action.payload.id] = action.payload;
//     return newState;
