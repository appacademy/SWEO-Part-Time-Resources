import { useHistory } from 'react-router-dom';

const Unmounted = () => {
  //!!START SILENT
  const history = useHistory();

  //!!END
  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      {/*!!START SILENT */}
      <button onClick={() => history.push('/mount')}>Login</button>
      {/*!!END */}
      {/*!!ADD */}
      {/* <button onClick={() => history.pus('/mount')}>Login</button> */}
      {/*!!END_ADD */}
    </div>
  );
};

export default Unmounted;
