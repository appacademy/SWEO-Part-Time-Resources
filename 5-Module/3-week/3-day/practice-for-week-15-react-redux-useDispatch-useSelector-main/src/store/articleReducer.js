import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  // const newState = {articles : {...state}}
  switch (action.type) {
    case LOAD_ARTICLES:
      // newState.articles.entries = action.articles
      // return  newState
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;
