import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function Pictures(){

	// if (!localStorage.getItem('user')){
	// 	alert('User is not logged in. Please log in.')
	// 	return <Redirect to='/'/>
	// }

	const history = useHistory() // using the Providers from context

	// if (!localStorage.getItem('user')){
	// 	alert('User is not logged in. Please log in.')
	// 	history.push('/')
	// }

	const handleClick = () => history.push('/')

	return (
		<>
			Pictures!
			<button onClick={handleClick}>
				Navigate to Home Page
			</button>
		</>
	)
}
