import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(()=>{
	setErrors([])
	if(!username) setErrors(prev => [...prev, 'Cannot leave username empty!'])
	if(!email) setErrors(prev => [...prev, 'Cannot leave email empty!'])
  }, [username, email])

  const formSubmit = (e) => {
	e.preventDefault();
	setIsSubmitted(true)
	const formData = {
		username,
		email,
		password
	}
	if(!username || !email) return

	console.log(formData)

	setUsername('')
	setEmail('')
	setPassword('')
	setIsSubmitted(false)
  }

  return (
    <div className="App-header">
		<h3>
			Login Form
		</h3>
		<div className='error'>
			{isSubmitted && errors.map(error => <div> {error} </div>)}
		</div>

		<form onSubmit={(e)=> formSubmit(e)}>
			<div>
				<label>Username: </label>
				<input placeholder="Username"
					value={username}
					onChange={(e)=> setUsername(e.target.value)}>
				</input>
			</div>

			<div>
				<label>Email: </label>
				<input placeholder="Email"
					value={email}
					onChange={(e)=> setEmail(e.target.value)}>
				</input>
			</div>
			<div>
				<label>Password: </label>
				<input type="password" placeholder="Password"
					value={password}
					onChange={(e)=> setPassword(e.target.value)}>
				</input>
			</div>
			<button type="submit">
				Submit Form
			</button>
		</form>
    </div>
  );
}

export default App;
