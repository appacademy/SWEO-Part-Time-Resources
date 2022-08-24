const POST_LOAD = 'posts/load'
const POST_ADD = 'posts/add'
const POST_DELETE = 'posts/delete'
const EDIT_POST = 'posts/edit'
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
const editPost = (post) => {
    return {
        type : EDIT_POST,
        payload : post
    }
}
const deletePost = (id) => {
    return {
        type: POST_DELETE,
        payload: id
    }
}

export const loadPostsThunk = () => async dispatch => {
    let posts = await fetch('/posts')
    // console.log(posts)
    // should have some sort of status check for response
    // if(posts.status === 200){

    // }
    if (posts.ok) {
        posts = await posts.json()
        dispatch(loadPosts(posts))
    }
}

export const addNewPostThunk = (post) => async dispatch => {
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
        return newPost.id
    }
}

export const deletePostThunk = (id) => async dispatch => {
    const res = await fetch(`/posts/${id}/delete`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(deletePost(id))
    }
}

export const editPostThunk = (body, id) => async dispatch => {
    let postToEdit = await fetch(`/posts/${id}/edit`, {
        method : 'PATCH',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({body})
    })
    postToEdit = await postToEdit.json()
    console.log(postToEdit)
    dispatch(editPost(postToEdit))
}

// export function thunkFetchArticlesCreator(){
//   return function thunk(dispatch){
//     const  response = await fetch('/api/articles');
//     const articles = await response.json();
//     dispatch(loadArticles(articles))
//   }
// };


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
        case EDIT_POST:
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}

export default postReducer
