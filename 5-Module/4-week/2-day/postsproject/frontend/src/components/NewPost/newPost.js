import {useDispatch} from 'react-redux'
import {useState} from 'react'
<<<<<<< HEAD:5-Module/4-week/2-day/postsproject/frontend/src/components/NewPost/newPost.js
import { addNewPostThunk } from '../../store/post'
=======
import { addPostThunk } from '../../store/post'
>>>>>>> 2022-Jan-W:5-Module/4-week/2-day/postAndComments/frontend/src/components/NewPost/newPost.js
import './NewPost.css'
function NewPost({setShowNew}){
    const dispatch = useDispatch()
    const [body, setBody] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
<<<<<<< HEAD:5-Module/4-week/2-day/postsproject/frontend/src/components/NewPost/newPost.js
        const data = {body, userId : 4}
        const id = await dispatch(addNewPostThunk(data))
        console.log(id)
=======
        dispatch(addPostThunk({body, userId: 4}))
>>>>>>> 2022-Jan-W:5-Module/4-week/2-day/postAndComments/frontend/src/components/NewPost/newPost.js
    }

    return (
        <form
        className='new-post-form'
        onSubmit={handleSubmit}
        >
            <h1>Enter text for a new post</h1>
            <textarea
            className='form-text-area'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <button type='submit'>
                Create Post
            </button>
        </form>
    )
}

export default NewPost