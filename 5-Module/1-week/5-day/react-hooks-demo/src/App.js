import { useEffect, useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);
  const [textThing, setTextThing] = useState(false);

  useEffect(() => {
    console.log('Wow!')
  }, [textThing]);

  return (
    <div>
      <h1>{rating} Clicks</h1>
      <button onClick={() => setRating(rating+1)}>+1 Click</button>
      <button onClick={() => setTextThing(!textThing)}>Try useEffect</button>
    </div>
  );
}

export default App;
