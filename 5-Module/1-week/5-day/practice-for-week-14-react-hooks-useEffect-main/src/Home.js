import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div className='home-container'>
      <h1>Welcome to the Cat Status App</h1>
      <h2>Push the Button Below to Enter</h2>
      <button onClick={() => history.push('/cat')}>Enter</button>
    </div>
  );
};

export default Home;
