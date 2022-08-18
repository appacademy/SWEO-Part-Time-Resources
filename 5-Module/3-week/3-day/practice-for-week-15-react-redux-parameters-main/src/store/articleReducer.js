import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      const newState = {...state}
      action.articles.forEach(article => {
        newState.entries[article.id] = article
      })
      return newState
    default:
      return state;
  }
};

export default articleReducer;
