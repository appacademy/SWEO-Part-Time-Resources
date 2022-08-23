import {useDispatch} from 'react-redux'
import {useState} from 'react'
import './NewPost.css'
function NewPost({setShowNew}){
    const dispatch = useDispatch()
    const [body, setBody] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
     
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