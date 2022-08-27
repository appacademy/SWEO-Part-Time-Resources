import { csrfFetch } from "./csrf"

const POSTS_LOAD = 'posts/load'
const POSTS_CLEAR = 'posts/clear'

const loadPosts = (posts) => {
    return {
        type: POSTS_LOAD,
        payload : posts
    }
}

export const clearPosts = () => {
    return {
        type : POSTS_CLEAR,
        payload : {}
    }
}

export const loadAllPostsThunk = () => async dispatch =>  {
    let posts  = await csrfFetch('/api/posts')
    if(posts.ok){
        posts = await posts.json()
        const postsObj = {}
        posts.forEach(post => {
            postsObj[post.id] = post
        })
        dispatch(loadPosts(postsObj))
    }

}
export const loadOnePostsThunk = (postId) => async dispatch =>  {
    let post  = await csrfFetch(`/api/posts/${postId}`)
    if(post.ok){
        post = await post.json()
        dispatch(loadPosts(post))
    }

}

const postsReducer = (state={}, action) => {
    switch(action.type){
        case POSTS_LOAD:
            return action.payload
        case POSTS_CLEAR:
            return action.payload
        default:
            return state
    }
}

export default postsReducer