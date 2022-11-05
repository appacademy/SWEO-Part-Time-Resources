import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/fruits/new">Enter a Fruit</NavLink>
      <NavLink to="/fav-fruit">Favorite Fruit</NavLink>
      <NavLink to="/set-fav-fruit">Set Favorite Fruit</NavLink>
    </nav>
  )
}

export default Navigation;