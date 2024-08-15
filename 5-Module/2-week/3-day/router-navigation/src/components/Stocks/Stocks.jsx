import { useNavigate, Navigate, useAsyncValue } from "react-router-dom";
import { useState } from "react";

function Stocks() {
  const [url, setUrl] = useState('')

  const navigate = useNavigate()
  const loggedIn = true

  if(!loggedIn) return <Navigate to='/not-logged-in'/>

  const handleClick = async (e) => {
    e.preventDefault()
    //some otheer logic
    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    if(res.ok){
      res = await res.json()
      console.log(res)
      setUrl(res.message)
    }
    // navigate('/')
  }
  

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>fetch dog</button>
      <img src={url} alt="" />
    </div>
  );
}

export default Stocks;
