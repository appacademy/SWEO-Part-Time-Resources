import { useState } from 'react';

function FunctionComponent({ title }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{title}</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default FunctionComponent;
