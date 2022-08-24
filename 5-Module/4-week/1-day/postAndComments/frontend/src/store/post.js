const POST_LOAD = 'posts/load'
const POST_ADD = 'posts/add'
const POST_DELETE = 'posts/delete'
const POST_UPDATE = 'posts/update'
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
const updatePost = (post) => {
    return {
        type : POST_UPDATE,
        payload : post
    }
}
export const getAllPostsThunk = () => async dispatch => {
    let posts = await fetch('/posts')
    // console.log(posts)
    if (posts.ok) {
        posts = await posts.json()
        console.log(posts)
        dispatch(loadPosts(posts))
    }
}
export const deletePostThunk = (id) => async dispatch => {
    let res = await fetch(`/posts/${id}/delete`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deletePost(id))
    }
}

export const addPostThunk = (post) => async dispatch => {
    let newPost = await fetch('/posts/new', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(post)
    })
    if(newPost.ok){
        newPost = await newPost.json()
        dispatch(addPost(newPost))
    }
}

export const updatePostThunk = (id, body) => async dispatch => {
    console.log(id, body)
    let updatedPost = await fetch(`/posts/${id}/update`, {
        method : 'PATCH',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({body})
    })
    if(updatedPost.ok){
        updatedPost = await updatedPost.json()
        dispatch(updatePost(updatedPost))

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
        case POST_UPDATE:
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}

export default postReducer
