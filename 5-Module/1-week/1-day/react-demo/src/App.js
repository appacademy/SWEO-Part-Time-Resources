import NavBar from "./NavBar";

function App() {
  const header = <h1>Hello from App</h1>
  const list = <ul>
    <li>Encourages Modular Development</li>
    <li>Easy to Use, Easy to Start with, and has some great tools</li>
    <li>Follows the declarative programming style</li>
    <li>Encourages Reusability in your code</li>
    <li>Has one way that data flows making it easier to reason about the code</li>
    <li>Uses a Virtual DOM to make changes to the real DOM very fast and efficient</li>
    </ul>

  return (
    <>
      <NavBar permission={false} color="Blue"/>
      { header }
      <h2>Why React Tho?</h2>
      { list }
    </>
  );
}

export default App;
