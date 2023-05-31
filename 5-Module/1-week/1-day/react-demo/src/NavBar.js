import React from 'react';

function NavBar(props) {
  // let isAdmin = false

  if (props.permission) {
    return (
      <nav>
        <ul>
          <li>Color: {props.color}</li>
          <li>Type: Grass</li>
        </ul>
      </nav>
    )
  } else {
    return (
      <React.Fragment>
        <div className='top'>Top</div>
        <div id="unique">Level</div>
        <a href="#">Elements</a>
      </React.Fragment>
    );
  }
}

export default NavBar;