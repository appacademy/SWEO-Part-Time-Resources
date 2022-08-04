import { Redirect, useHistory } from 'react-router-dom'


function Stocks() {
  const history  = useHistory()
  const loggedIn = true
  if (!loggedIn) {
    return <Redirect to='/not-logged-in' />
  }
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button
        onClick={handleClick}
      >Take me home please</button>
    </div>
  );
}

export default Stocks;