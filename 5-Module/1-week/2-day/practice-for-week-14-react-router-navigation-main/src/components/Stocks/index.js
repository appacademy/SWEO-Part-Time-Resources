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
  }
  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={clickHandler} >Click me</button>
    </div>
  );
}

export default Stocks;