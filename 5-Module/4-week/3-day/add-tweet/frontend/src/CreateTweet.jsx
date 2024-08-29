import { useDispatch } from "react-redux"
import { useState } from "react"
import { postTweet } from "./store/tweet"

const CreateTweet = () => {
    const dispatch = useDispatch()
    const [tweet, setTweet] = useState('')

    console.log(tweet)


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(postTweet({tweet}))
        setTweet('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTweet(e.target.value)} value={tweet}/>
        <button type="submit">addTweet</button>
    </form>
  )
}

export default CreateTweet