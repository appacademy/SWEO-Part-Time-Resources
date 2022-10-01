import { useState } from 'react';

export const NoEffect = () => {
    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState('');

    const changeCard = () => {
        console.log(counter);
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
