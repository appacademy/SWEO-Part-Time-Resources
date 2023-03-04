import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/useState">UseState Ex</NavLink>
      <NavLink to="/useEffect">UseEffect Ex</NavLink>
    </div>
  );
};

export default NavBar;
