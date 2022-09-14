import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginThunk} from '../../store/session'
import {useHistory, Redirect} from 'react-router-dom'
function LoginFormPage () {
    const sessionUser = useSelector(state => state.user)
    const history = useHistory()
    const dispatch = useDispatch()
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')

    if(sessionUser) return <Redirect to='/' />

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {credential, password}
        await dispatch(loginThunk(user))
        history.push('/')
    }

    return (
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <label htmlFor='credential'>Username or Email :</label>
                <input
                type='text'
                name='credential'
                placeholder='Username or Email'
                onChange={(e) => setCredential(e.target.value)}
                value={credential}
                />
                <br></br>
                <label htmlFor='Password'>Password</label>
                <input
                type='password'
                name='Password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <br></br>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginFormPage