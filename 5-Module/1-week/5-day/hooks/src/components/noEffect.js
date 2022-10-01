import { useState } from 'react';

export const NoEffect = () => {
    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState('');

    // const myCardStateArray = useState('');
    // const card = myCardStateArray[0];
    // const setCard = myCardStateArray[1];

    const changeCard = () => {
        if (counter && Math.abs(counter % 5) === 0) {
            setCard('🃅');
        } else setCard('');
    };

    return (
        <div className="container">
            <div>
                <span>{card}</span>
                <span>{counter}</span>
                <span>{card}</span>
            </div>
            <div>
                <button
                    onClick={() => {
                        setCounter(counter - 1);
                        changeCard();
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        setCounter(counter + 1);
                        changeCard();
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
