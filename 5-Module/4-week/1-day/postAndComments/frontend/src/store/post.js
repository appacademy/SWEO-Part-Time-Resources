const POST_LOAD = 'posts/load'
const POST_ADD = 'posts/add'
const POST_DELETE = 'posts/delete'
const loadPosts = (posts) => {
    return {
        type: POST_LOAD,
        payload: posts
    }
}
const addPost = (post) => {
    return {
        type: POST_ADD,
        payload: post
    }
}
const deletePost = (id) => {
    return {
        type: POST_DELETE,
        payload: id
    }
}


const postReducer = (state = {}, action) => {
    const newState = { ...state }
    switch (action.type) {
        case POST_LOAD:
            return { ...newState, ...action.payload }
        case POST_ADD:
            newState[action.payload.id] = action.payload
            return newState
        case POST_DELETE:
            delete newState[action.payload]
            return newState
        default:
            return state
    }
}

export default postReducer
