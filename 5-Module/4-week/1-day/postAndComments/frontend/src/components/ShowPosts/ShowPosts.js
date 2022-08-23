import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import './ShowPosts.css'
function ShowPosts(){
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

  
    return (
        <>
        {
            Object.keys(posts).map(postId => {
                return (
                    <div
                    className="post"
                    key={postId}
                    >
                        {posts[postId].body}
                        <button onClick={()=> ''}>
                            Delete
                        </button>
                    </div>
                )
            })
        }
        </>
    )
}
export default ShowPosts