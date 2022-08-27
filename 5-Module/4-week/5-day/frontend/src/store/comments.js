import { csrfFetch } from './csrf'

const COMMENTS_LOAD = 'comments/load'
const COMMENTS_CLEAR = 'comments/clear'
const loadComments = (comments) => {
    return {
        type: COMMENTS_LOAD,
        payload: comments
    }
}
export const clearComments = () => {
    return {
        type: COMMENTS_CLEAR,
        payload : {}
    }
}
export const getCommentsThunk = (postId) => async dispatch => {
    let comments = await csrfFetch(`/api/comments/${postId}`)
    if (comments.ok) {
        comments = await comments.json()
        const commentsObj = {}
        comments.forEach(comment => {
            commentsObj[comment.id] = comment
        })
        dispatch(loadComments(commentsObj))
    }
}


const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMENTS_LOAD:
            return { ...state, ...action.payload }
        case COMMENTS_CLEAR:
            return action.payload
        default:
            return state
    }
}

export default commentsReducer