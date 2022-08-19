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

const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        payload: article
    }
}

const initialState = { entries: [], isLoading: true }

const articleReducer = (state = initialState, action) => {
    const newState = {...state}
    // possibly more readable 
    // const newState = Object.assign({}, state)
    // newState.entries = [...newState.entries]
    switch (action.type) {
        case LOAD_ARTICLES:
                newState.entries = action.payload
            return newState
        case ADD_ARTICLE:
            return ''
        case EDIT_ARTICLE:
            return ''
        case DELETE_ARTICLE:
            return ''
        default:
            return state
    }
}

export default articleReducer
