import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  let id = 42
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/stonks">Stonks</Link>

      <NavLink activeClassName="active" exact to={`/stonks/${id}`}>Stonk 42</NavLink>
      <NavLink activeClassName="active" exact to="/">Home</NavLink>
      <NavLink activeClassName="active" exact to="/stonks">Stonks</NavLink>
    </nav>
  );
}

export default NavBar;