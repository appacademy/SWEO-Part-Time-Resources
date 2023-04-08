import { useHistory } from 'react-router-dom';

const Unmounted = () => {
  //needed to add history)
  const history = useHistory();
  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      {/* mispelled push */}
      <button onClick={() => history.push('/mount')}>Login</button>
    </div>
  );
};

export default Unmounted;
