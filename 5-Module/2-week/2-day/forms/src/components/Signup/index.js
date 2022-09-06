import { useState } from 'react';

function Signup(){

	const [firstName, setFirstName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [comment, setComment] = useState('');
	const [validationErrors, setValidationErrors] = useState([]);

	async function onSubmit(e){
		e.preventDefault();

		const errors = []

		if(password.length < 5) {
			errors.push('Password must be greater than 4')
		}

		if(!email.includes('@')){
			errors.push('Not a valid email')
		}

		if(errors){
			setValidationErrors(errors)
		}


		window.alert(JSON.stringify({
			firstName,
			username,
			email,
			password
		}))
	}

	return (
		<div>

			{
				validationErrors.length > 0 && (
					validationErrors.map((error)=>{
						return (
							<h1>
								{error}
							</h1>
						)
					})
				)
			}

			<form>
				<label>
					First Name
				</label>
				<input onChange={(e)=> setFirstName(e.target.value)} value={firstName}>

				</input>
				<label>
					Username
				</label>
				<input onChange={(e)=> setUsername(e.target.value)} value={username}>

				</input>
				<label>
					Email
				</label>
				<input onChange={(e)=> setEmail(e.target.value)} value={email}>

				</input>
				<label>
					Password
				</label>
				<input onChange={(e)=> setPassword(e.target.value)} value={password}>

				</input>

				<label>
					Comments
				</label>
				<textarea onChange={(e)=> setComment(e.target.value)} value={comment}>

				</textarea>

				<button onClick={(e)=>{
					onSubmit(e)
				}}>
					Submit Form
				</button>
			</form>
		</div>
	)
}

export default Signup;
