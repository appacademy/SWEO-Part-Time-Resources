import { useParams } from "react-router-dom"


export default function TweetInfo() {
    const {tweetId} = useParams()

  return (
    <div>{tweetId}</div>
  )
}
