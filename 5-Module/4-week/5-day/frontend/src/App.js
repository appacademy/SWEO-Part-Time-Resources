import { Switch, Route } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost/SinglePost';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { restoreUserThunk } from './store/session'
import Navigation from './components/Navigation'
function App() {
  const [isLoaded, setIsLoaded] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(restoreUserThunk()).then(() => setIsLoaded(true))
  })
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (

        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/posts'>
            <AllPosts />
          </Route>
          <Route path='/post/:id'>
            <SinglePost />
          </Route>
          <Route>
            <h1>404 : Not Found</h1>
          </Route>
        </Switch>
      )}

    </>
  )
}

export default App;
