import { Link } from "react-router-dom";

export default function TweetDetails({id, tweet, url}) {
  return (
    <>
        <Link to={`/tweets/${id}`}>
            <div>{id}</div>
            <div>{tweet}</div>
            <img src={url}/>
        </Link>
    </>
  )
}
