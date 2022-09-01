import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

let isLoggedIn = true;

// hooks
// useState
// useEffect
// useRef
// customHooks


function Profile(){
	console.log('Initial render')
	// creating an initial state
	const [username, setUsername] = useState('');
	const [input, setInput] = useState('');

	// useEffect(()=>{
	// 	setTimeout(()=>{
	// 		setUsername('AlonsoVasquez')
	// 	}, 1000)
	// })

	// useEffect(()=>{
	// 	console.log('Onlcik triggered')
	// },[username])

	if(!isLoggedIn){
		return <Redirect to='/'></Redirect>
	} else {
		return (
			<>
				<h1> You've logged in! Welcome to your profile page. </h1>

				<h3>
					<label>
						Username:
					</label>
					{username}
				</h3>

				<input onChange={
					(e)=>{
						setInput(e.target.value)
					}
				}>
				</input>

				<button onClick={
					()=>{
						setUsername(input)
					}
				}>
					Change Username
				</button>
			</>
		)
	}
}


export default Profile;
