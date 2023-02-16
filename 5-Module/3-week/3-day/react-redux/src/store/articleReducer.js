import articles from "../data/data.json";

const LOAD_ARTICLES = "articles/loadArticles";
const ADD_ARTICLE = 'articles/addArticle'

export const loadArticles = () => ({
  type: LOAD_ARTICLES,
  articles,
});

export const addArticle = (article) => ({
    type: ADD_ARTICLE,
    article
})

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
        return {...state, entries: [...state.entries, action.article]}
    default:
      return state;
  }
};

export default articleReducer;
