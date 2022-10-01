import { useState } from 'react';

export const State = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <span>{counter}</span>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    );
};
