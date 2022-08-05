<<<<<<< HEAD
import {Redirect, useHistory} from 'react-router-dom'

function Stocks() {
  const history = useHistory()
  const loggedIn = true
  if(!loggedIn){
    return <Redirect to='/not-logged-in' />
  }

  const clickHandler = () => {
    window.alert('Sending info to the DB!');
    history.push('/movies')
=======
import { Redirect, useHistory } from 'react-router-dom'


function Stocks() {
  const history  = useHistory()
  const loggedIn = true
  if (!loggedIn) {
    return <Redirect to='/not-logged-in' />
  }
  const handleClick = () => {
    history.push('/')
>>>>>>> 2022-Jan-E
  }
  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
<<<<<<< HEAD
      <button onClick={clickHandler} >Click me</button>
=======
      <button
        onClick={handleClick}
      >Take me home please</button>
>>>>>>> 2022-Jan-E
    </div>
  );
}

export default Stocks;