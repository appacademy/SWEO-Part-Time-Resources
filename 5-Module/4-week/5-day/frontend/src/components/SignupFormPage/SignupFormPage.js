import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { signUpThunk } from '../../store/session'
import {useHistory, Redirect} from 'react-router-dom'

function SignUpFormPage() {
    const history = useHistory()
    const dispatch = useDispatch()       
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const sessionUser = useSelector(state => state.user)

    if(sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email,
            username: userName,
            password
        }
        dispatch(signUpThunk(user))
        history.push('/')
    }

    return (
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <label htmlFor='email'>Email :</label>
                <input
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <br></br>
                <label htmlFor='userName'>User Name</label>
                <input
                type='text'
                name='userName'
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                />
                <br></br>
                <label htmlFor='password'>Password</label>
                <input
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <br></br>
                <button>Sign up</button>
            </form>
        </div>
    )

}   export default SignUpFormPage