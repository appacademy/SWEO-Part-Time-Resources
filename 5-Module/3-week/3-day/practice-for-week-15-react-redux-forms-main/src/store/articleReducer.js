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

// const loadThunk =  () => {
//   const fetch = makeSome fetch call

//   const data = await fetch.json

//   dispatchEvent(loadArticles(data))
// }

// // const addArticleThuink (data) => {
// //   newthink = fetch('/comments/new', {
// //     method : post,
// //     body : data
// //   })
// //   if(newThin.okay){
// //     await newthink.json()
// //     dispatchEvent(addArticle(newThink))
// //   }
// // }


const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.payload] };
    default:
      return state;
  }
};

export default articleReducer;