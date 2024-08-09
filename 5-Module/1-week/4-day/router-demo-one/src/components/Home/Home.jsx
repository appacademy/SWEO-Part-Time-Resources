import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate = useNavigate()

    const buttonClick = (e) => {
        e.preventDefault()

        navigate('/tweets')
    }


  return (
    <>
        <div>Hello from home component</div>
        <button onClick={buttonClick}>tweets</button>
    </>
  )
}
