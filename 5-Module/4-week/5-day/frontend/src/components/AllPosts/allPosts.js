import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadAllPostsThunk } from '../../store/posts'
import {Link} from 'react-router-dom'

function AllPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(loadAllPostsThunk())
    }, [])

    return (
        <div
        style={{
            display : 'flex',
            flexDirection : 'column',
            gap : '10px'
        }}
        >
            {
                Object.keys(posts).map(postId => {
                    return (
                        <Link to={`/post/${postId}`}>
                        <div
                            style={{
                                width : '200px',
                                height : '200px',
                                border : '1px solid black'
                            }}
                        >
                            {posts[postId].body}
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default AllPosts