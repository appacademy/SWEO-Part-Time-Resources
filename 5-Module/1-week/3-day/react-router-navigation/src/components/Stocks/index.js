//!!START SILENT
import { useHistory, Redirect } from 'react-router-dom';

//!!END
function Stocks() {
  //!!START SILENT
  const history = useHistory();
  const loggedIn = true;

  if (!loggedIn) return <Redirect to='/not-logged-in' />;

  const handleClick = () => {
    window.alert('Sending info to the DB!');
    history.push('/');
  };

  //!!END
  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      {/*!!START SILENT */}
      <button onClick={handleClick}>Home</button>
      {/*!!END */}
    </div>
  );
}

export default Stocks;
