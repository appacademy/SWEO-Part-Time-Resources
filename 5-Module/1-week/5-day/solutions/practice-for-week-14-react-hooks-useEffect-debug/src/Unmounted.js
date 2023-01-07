import { useHistory } from 'react-router-dom';

const Unmounted = () => {
  const history = useHistory();

  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      <button onClick={() => history.push('/mount')}>Login</button>
    </div>
  );
};

export default Unmounted;