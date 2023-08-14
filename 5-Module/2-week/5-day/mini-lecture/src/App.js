import './App.css';
import {useState, useRef} from 'react'


function App() {

  const elementRef = useRef()
  const [profile, setProfile] = useState({
						'firstName': '',
						'lastName': '',
						'email': ''})

  const handleFirstName = (value) => {
	setProfile(prev => ({...prev, 'firstName': value}))
	console.log(profile)
  }

  const handleLastName = (value) => {
	profile['lastName'] = value
	setProfile(profile)
	console.log(profile)
  }

  const captureElement = () =>{
	// const div = document.querySelector('.App-header')
	const div = elementRef.current
  }


  return (
    <div className="App-header" ref={elementRef}>

		<div>
			First Name: {profile.firstName}
		</div>
		<div>
			Last Name: {profile.lastName}
		</div>
		<div>
			Email: {profile.email}
		</div>

	  <div>
		<input placeholder='first name' onChange={(e)=> handleFirstName(e.target.value)}>
		</input>
		<input placeholder='last name' onChange={(e)=> handleLastName(e.target.value)}>
		</input>
		<input placeholder='email'>
		</input>
	  </div>

		<button onClick={captureElement}>
			Console Log Element
		</button>
    </div>
  );
}

export default App;
