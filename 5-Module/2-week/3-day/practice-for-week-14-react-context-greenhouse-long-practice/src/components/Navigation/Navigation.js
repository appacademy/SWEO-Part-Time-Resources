import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">Greenhouse</NavLink>
      <NavLink to="/thermometer">Thermometer</NavLink>
      <NavLink to="/hygrometer">Hygrometer</NavLink>
    </nav>
  )
}

export default Navigation;
