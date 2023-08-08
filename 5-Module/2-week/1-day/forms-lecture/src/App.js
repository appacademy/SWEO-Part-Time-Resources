import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(()=>{
	setErrors([])
	if(!username){
		setErrors(prev => [...prev, "No username"])
	}
	if(!email){
		setErrors(prev => [...prev, "No email"])
	}
  }, [email, username])

  const formSubmit = (event) => {
	event.preventDefault()

	setHasSubmitted(true)

	if (!username || !email){
		alert("Please enter the missing fields!")
		return
	}

	const formData = {
		username,
		email,
		password
	}

	console.log(formData)

	setErrors([])
	setUsername("")
	setEmail("")
	setHasSubmitted(false)
  }


  return (
    <div className="App">
      <div className="App-header">
		<h3>
			Login Form
		</h3>
		<div className='error'>
			{hasSubmitted && errors.map(error => <div>{error}</div>)}
		</div>
		<form onSubmit={formSubmit}>
		{/* <form onSubmit={(event)=> formSubmit(event)}> */}
			<h4>Username</h4>
			<input placeholder="Username"
				onChange={(e)=> setUsername(e.target.value)}
				value={username}
				>
			</input>
			<h4>Email</h4>
			<input placeholder='Email'
				onChange={(e)=> setEmail(e.target.value)}
				value={email}
				></input>
			<h4> Password </h4>
			<input type='password'
				onChange={(e)=> setPassword(e.target.value)}
				value={password}
				></input>
			<br></br>
			<button type='submit'>
				Submit
			</button>
		</form>

      </div>
    </div>
  );
}

export default App;
