import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadPostsThunk, deletePostThunk, editPostThunk } from "../../store/post";
import './ShowPosts.css'
function ShowPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    // const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState()
    const [body, setBody] = useState('')
    useEffect(() => {
        dispatch(loadPostsThunk())
    }, [])

    const handDelete = (id) => {
        dispatch(deletePostThunk(id))
    }

    const handleSave = () => {
        dispatch(editPostThunk(body, editId))
        setEditId(undefined)
    }

    return (
        <>
            {
                Object.keys(posts).map(postId => {
                    return (
                        <>
                            {
                                editId === postId ?
                                    <div>
                                        <input 
                                        className="post"
                                        key={postId}
                                        value={body} 
                                        onChange={(e) => setBody(e.target.value)}/>
                                        <button
                                        onClick={handleSave}
                                        >Save</button>
                                    </div>
                                    :
                                    <div
                                        className="post"
                                        key={postId}
                                    >
                                        {posts[postId].body}
                                        <button onClick={() => handDelete(postId)}>
                                            Delete
                                        </button>
                                        <button
                                        onClick={() => {
                                            // setEdit(true)
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