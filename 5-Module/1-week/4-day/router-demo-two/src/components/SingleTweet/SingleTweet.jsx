import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function SingleTweet() {
    const {tweetId} = useParams()
    const navigate = useNavigate()

  return (
    <>
        <div>{tweetId}</div>
        <button onClick={(e) => navigate(-1)}>back</button>
    </>
  )
}
