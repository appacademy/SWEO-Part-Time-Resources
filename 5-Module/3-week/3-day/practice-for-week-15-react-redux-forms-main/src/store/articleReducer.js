import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'articles/add'

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type : ADD_ARTICLE,
    payload : article
  }
}

// const some thunk = (data) => {
//   make some fetch call (data)

//   get some data back 

//   dispatch(some data )
// }

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE : 
    return { ...state, entries: [...state.entries, action.payload] }
    default:
      return state;
  }
};

export default articleReducer;