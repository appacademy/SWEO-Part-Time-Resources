import { useState, useEffect } from 'react';

export const Effect = () => {
    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState('');
    const [noVal, setNoVal] = useState('hello');

    // const myCardStateArray = useState('');
    // const card = myCardStateArray[0];
    // const setCard = myCardStateArray[1];

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
                {/* <button onClick={() => setNoVal('Goodbye')}>Goodbye</button> */}
            </div>
        </div>
    );
};
