import { useState, useEffect } from 'react';

export const Effect = () => {
    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState('');

    useEffect(() => {
        if (counter && Math.abs(counter % 5) === 0) {
            setCard('🃅');
        } else setCard('');
    }, [counter]);

    return (
        <div className="container">
            <div>
                <span>{card}</span>
                <span>{counter}</span>
                <span>{card}</span>
            </div>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    );
};
