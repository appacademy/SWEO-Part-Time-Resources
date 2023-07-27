import { Redirect, useHistory } from "react-router-dom";

function Images(){

	const history = useHistory() // useContext
	
	if (!localStorage.getItem('user')){
		alert('User is not logged in! Please login.')
		// return <Redirect to='/'/>
		history.push('/')
	}

	const handleClick = () => history.push('/')
	// const handleClickWithoutTracking = () => history.replace('/')
	return (
		<>
			Images!
			<button onClick={handleClick}>
				Go back to Home Page.
			</button>
		</>
	)
}

export default Images;
