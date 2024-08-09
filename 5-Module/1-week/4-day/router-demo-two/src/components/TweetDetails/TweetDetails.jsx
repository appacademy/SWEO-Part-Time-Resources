import { Link, useNavigate } from "react-router-dom";

export default function TweetDetails({id, tweet, url}) {
    const navigate = useNavigate()
  return (
    <div >
        <div>{id}</div>
        <div>{tweet}</div>
        <img src={url} alt="" />
    </div>
  )
}
