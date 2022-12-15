import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (payload) => ({
  type: ADD_ARTICLE,
  payload
});


const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  // newState can go here as well
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };

    case ADD_ARTICLE:
      console.log('action', action)
      const newState = {...state};
      newState.entries = [...newState.entries, action.payload];
      return newState;
      // return {...state, entries: [...state.entries, action.payload]}
      
    default:
      return state;
  }
};

export default articleReducer;