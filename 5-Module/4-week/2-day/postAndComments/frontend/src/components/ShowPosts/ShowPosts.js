import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostsThunk, deletePostThunk, updatePostThunk } from '../../store/post'
import './ShowPosts.css'
function ShowPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const [editId, setEditId] = useState()
    const [body, setBody] = useState('')
    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, [])

    const handleDelete = (id) => {
        dispatch(deletePostThunk(id))
    }
    const handleSave = () => {
        dispatch(updatePostThunk(editId, body))
        setEditId(undefined)
    }
    return (
        <>
            {
                Object.keys(posts).map(postId => {
                    return (


                        <>
                        {
                            postId === editId 
                            
                            ? 
                            <div
                            
                            >
                                <input
                                className="post"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value) }
                                />
                                <button
                                onClick={handleSave}
                                >
                                    save
                                </button>
                            </div>
                            :
                            <div
                                className="post"
                                key={postId}
                            >
                                {posts[postId].body}
                                <button onClick={() => handleDelete(postId)}>
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        setEditId(postId)
                                        setBody(posts[postId].body)
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        }
                        </>

                    )
                })
            }
        </>
    )
}
export default ShowPosts