import React from 'react';
import NavList from './NavList';

function App() {
  // const h1 = <h1>Tristan's Page!<h1>
  let isAdmin = false;
  return (
    <>
      <h1>Hello from App</h1>
      <h2>Why React?</h2>
      <ul>
        <li>Encourages Modular Development</li>
        <li>Super Easy to Use, Easy to Start with, and has some great tools</li>
        <li>Follows the declarative programming style</li>
        <li>Encourages Reusability in your code</li>
        <li>Has one way that data flows making it easier to reason about the code</li>
        <li>Uses a Virtual DOM to make changes to the real DOM very fast and efficient</li>
        <a
          href="#"
          id="special"
          className="list-link"
        >blah</a>
      </ul>
      <NavList banana={isAdmin} color="green" />
    </>
  );
}

export default App;
