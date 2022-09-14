import {useDispatch, useSelector} from 'react-redux'
import {loadOnePostsThunk, clearPosts} from '../../store/posts'
import {getCommentsThunk, clearComments} from '../../store/comments'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
function SinglePost () {
    const dispatch = useDispatch()
    const {id} = useParams()
    const post = useSelector(state => state.posts)
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(loadOnePostsThunk(id))
        dispatch(getCommentsThunk(id))
        return () => {
            dispatch(clearPosts())
            dispatch(clearComments())
        }
    },[])

    return (
        <div>
            <h1>{post.body}</h1>
            {
                Object.keys(comments).map(commentId => {
                    return (
                        <div>{comments[commentId].body}</div>
                    )
                })
            }
        </div>
    )
}
export default SinglePost