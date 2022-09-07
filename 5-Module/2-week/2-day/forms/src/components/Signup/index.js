import { useState, useEffect } from 'react';

function Signup(){

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const [validationErrors, setValidationErrors] = useState([])

	useEffect(()=>{

		const errors = []

		if(password.length < 5){
			errors.push('Password length must be at least 5')
		}

		if(!email.includes('@')){
			errors.push('It must be a valid email')
		}

		if(errors.length){
			setValidationErrors(errors)
		} else {
			setValidationErrors([])
		}

	},[password, email])

	async function onSubmit(event){
		event.preventDefault();
		// window.alert(
		// 	JSON.stringify({
		// 		username,
		// 		email,
		// 		password
		// 	})
		// )

		if(password.length < 5){

			window.alert('Password is less than 5')
			return
		}


	}

	return (
		<div>

			<ul>
				{
					validationErrors.length > 0 && (
						validationErrors.map((error, i)=>{
							return (
								<li key={i} style={{ color: 'red'}}>
									{error}
								</li>
							)
						})
					)
				}
			</ul>

			<form>
				<label>
					username:
				</label>

				<input
					value={username}
					onChange={(e)=> setUsername(e.target.value)}>
				</input>

				<label>
					email:
				</label>
				<input
					value={email}
					onChange={(e)=> setEmail(e.target.value)}>

				</input>

				<label>
					password:
				</label>
				<input
					value={password}
					onChange={(e)=> setPassword(e.target.value)}>

				</input>

				<button disabled={validationErrors.length > 0 ? true : false} onClick={
					(event)=>onSubmit(event)
				}>
				 	SUBMIT FORM
				</button>

			</form>
		</div>
	)
}

export default Signup;
