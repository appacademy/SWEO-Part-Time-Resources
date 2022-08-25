
const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const fetchArticles = () => async dispatch => {
  let articles = await fetch('/api/articles')
  if(articles.ok){
    articles = await articles.json()
    dispatch(loadArticles(articles))
  }
}

export const writeArticle = (article) => async dispatch => {
  let newArticle = await fetch('/api/articles', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
      
    },
    body : JSON.stringify(article)
  })
  if(newArticle.ok){
    newArticle = await newArticle.json()
    dispatch(addArticle(newArticle))
  }
}

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;