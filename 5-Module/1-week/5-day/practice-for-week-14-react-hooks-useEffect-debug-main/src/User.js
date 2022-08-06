import { useHistory } from 'react-router-dom';

const User = (props) => {
  const history = useHistory();
  const { name, email, picture, location } = props.data;
  return (
    <div className='render-wrapper' key={email}>
      <img src={picture.large} alt={email} />
      <p>
        <span className='name'>
          {name.first} {name.last}
        </span>
      </p>
      <p>{`${location.city}, ${location.state}`}</p>
      <p>{email}</p>
      <button onClick={() => history.push('/')}>Logout</button>
    </div>
  );
};

export default User;
