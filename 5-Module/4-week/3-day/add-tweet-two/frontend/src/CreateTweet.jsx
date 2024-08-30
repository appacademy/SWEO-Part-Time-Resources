import { useState } from "react"
import { useDispatch } from "react-redux"
import { postTweet } from "./store/tweet"


const CreateTweet = () => {
    const dispatch = useDispatch()
    const [tweet, setTweet] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const newTweet = dispatch(postTweet({message: tweet}))
        if(newTweet) setTweet('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input value={tweet} onChange={e => setTweet(e.target.value)}/>
        <button type="submit">Add Tweet</button>
    </form>
  )
}

export default CreateTweet