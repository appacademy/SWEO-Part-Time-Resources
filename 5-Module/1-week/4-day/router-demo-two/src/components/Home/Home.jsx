import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()

        navigate('/tweets')
    }

  return (
    <>
        <div>Home</div>
        <button onClick={handleClick}>Tweets</button>
    </>
  )
}
