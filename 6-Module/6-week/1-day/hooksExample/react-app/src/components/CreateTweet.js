import { useState, useEffect } from 'react';

// const myState = useState('my default value');
// const myVal = myState[0];
// const funcToUpdateMyVal = myState[1];
// const [myVal, funcToUpdateMyVal] = useState("Here's my state");

const whenDoesThisRun = () => console.log('Hey look at me!');

const CreateTweet = () => {
    const [text, setText] = useState('');
    const [tooLong, setTooLong] = useState(false);
    // const [text, setText] = useState('This text will never go away!');

    // whenDoesThisRun();

    // const checkIfTooLong = () => {
    //     console.log("I'm checking for length");
    //     console.log(text.length);
    //     if (text.length > 20) {
    //         setTooLong(true);
    //     } else {
    //         setTooLong(false);
    //     }
    // };

    useEffect(() => {
        console.log(text.length);

        if (text.length > 20) {
            setTooLong(true);
        } else {
            setTooLong(false);
        }
    }, [text]);

    // useEffect(checkIfTooLong, [text]);

    // checkIfTooLong();

    return (
        <div>
            <label style={{ display: 'block' }}>
                Tell the world what's on your mind!
            </label>
            {tooLong ? <h1>THIS TWEET IS TOOOOO LONG!!!!</h1> : null}
            <textarea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            ></textarea>
        </div>
    );
};

export default CreateTweet;

// export default function CreateTweet() {
//     return (
//         <div>
//             <h1>Hiya</h1>
//         </div>
//     );
// }
