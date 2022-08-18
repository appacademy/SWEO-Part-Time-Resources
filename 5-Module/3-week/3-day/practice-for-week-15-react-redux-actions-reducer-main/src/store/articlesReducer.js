import articles from '../data/data.json'

const LOAD_ARTICLES = 'articles/load'
const ADD_ARTICLE = 'articles/add'
const EDIT_ARTICLE = 'articles/edit'
const DELETE_ARTICLE = 'articles/delete'

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        payload: articles
    }
}

const add_article = (newArticle) => {
    return {
        type: ADD_ARTICLE,
        payload: newArticle
    }
}

const initialState = { entries: [], isLoading: true }

//dispatching load articles 
// image calling the article reducer passing in state and out action 

const articlesReducer = (state = initialState, action) => {
    // state = { entries: [], isLoading: true }
    //action = {type :articles/load, payload : [{},{},{}] }
    // will work if your state is completely flat
    // const newState = {...state}
    switch(action.type){
        case LOAD_ARTICLES:
            // newState.entries = [...action.payload]
            //accomplishing the same goal
            return  { ...state, entries: [...action.payload] };
            // return newState
        case ADD_ARTICLE:
            return ''
        case EDIT_ARTICLE:
            return ''
        case DELETE_ARTICLE:
            return ''
        default : 
            return state
    }
}

export default articlesReducer