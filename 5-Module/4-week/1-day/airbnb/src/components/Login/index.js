import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadCredential, loadPassword, fetchUserSpots } from '../../store/users'

function Login() {

	const dispatch = useDispatch()
	const users = useSelector(state=> state.users)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const fakeData = {
			'userName': "alex",
			'email': 'alex@yahoo.com',
			'spots': [
				{ 'id': 1, 'location': 'la' },
				{ 'id': 2, 'location': 'sf' },
			]
		}
		dispatch(fetchUserSpots(fakeData))
	}

	const handleCrendtial = (e) => {
		dispatch(loadCredential(e.target.value))
	}

	const handlePassword = (e) => {
		dispatch(loadPassword(e.target.value))
	}

	return (
		<>
			<form class='form' onSubmit={(e) => handleSubmit(e)}>
				<label>
					Credential
				</label>
				<input
					value={users?.current_credential}
					onChange={e => handleCrendtial(e)} placeholder='Credential'></input>
				<label>
					Password
				</label>
				<input
					value = {users?.current_password}
					onChange={e => handlePassword(e)} placeholder="Password"></input>
				<button> SUBMIT </button>
			</form>
		</>
	)
}

export default Login;
