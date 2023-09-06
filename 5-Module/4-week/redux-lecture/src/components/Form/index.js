import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserEmail, loadUserUsername } from '../../store/users'

function Form() {

	const user = useSelector(state => state.users)
	const places = useSelector(state => state.places)

	const dispatch = useDispatch()

	const handleFormSubmit = (e) => {
		e.preventDefault()
	}

	const handleUserEmail = (e) => {
		dispatch(loadUserEmail(e.target.value))
	}

	const handleUsername = (e) => {
		dispatch(loadUserUsername(e.target.value))
	}

	return (<>
		<div>
			{user.username}
		</div>
		<div>
			{places['1'].location}
		</div>
		<form onSubmit={e=> handleFormSubmit(e) } className="form">
			<label>
				Email
			</label>
			<input onChange={e => handleUserEmail(e)}>
			</input>
			<label>
				Username
			</label>
			<input onChange={e => handleUsername(e)}>
			</input>
			<label>
				Password
			</label>
			<input>
			</input>
			<button>
				Submit
			</button>
		</form>
	</>)
}

export default Form;
