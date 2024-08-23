import articles from "../data/data.json";

const LOAD_ARTICLES = "articles/loadArticles";


// this function is dispatched which 'invokes' our reducer
export const loadArticles = () => {
    // below is the action sent to the reducer
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

const initialState = {
  entries: [],
  isLoading: true,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return {...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;
