import { useState, useEffect } from 'react';

export const SideEffect = () => {
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     if (counter !== 0)
    //         setInterval(() => {
    //             console.log(`useEffect with counter ${counter} is running`);
    //         }, 1000);
    // }, [counter]);

    useEffect(() => {
        let printCounter;

        if (counter !== 0)
            printCounter = setInterval(() => {
                console.log(`useEffect with counter ${counter} is running`);
            }, 1000);

        return () => {
            console.log(`counter ${counter} has been cleaned up!`);
            clearInterval(printCounter);
        };
    }, [counter]);

    return (
        <div className="container">
            <div>
                <span>{counter}</span>
            </div>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    );
};
