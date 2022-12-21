import { useState, useEffect } from 'react';

// const myState = useState('default value');
// const stateValue = myState[0]
// const functionToSetMyState = myState[1]
// const [stateValue, functionToSetMyState] = useState('default value');

const whenDoesThisRun = () => console.log('Hey look at me!');

const CreateTweet = () => {
    const [text, setText] = useState('');
    const [tooLong, setTooLong] = useState(false);
    // const [text, setText] = useState('This text overwrites my placeholder');

    whenDoesThisRun();

    // const checkIfTooLong = () => {
    //     console.log('check func ran');
    //     console.log('current text length: ', text.length);
    //     // console.log(text);
    //     if (text.length > 20) {
    //         setTooLong(true);
    //     } else {
    //         setTooLong(false);
    //     }
    // };

    useEffect(() => {
        console.log('An effect is occurring!');
        if (text.length > 20) {
            setTooLong(true);
        } else {
            setTooLong(false);
        }
    }, [text]);

    return (
        <div>
            <label style={{ display: 'block' }}>
                What do you want to say to the world?
            </label>
            {tooLong ? <h1>THIS TWEET IS TOOOOO LONG!!!!!</h1> : null}
            {console.log('JSX has fully loaded :)')}
            <textarea
                placeholder="Write a tweet!"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
        </div>
    );
};

// export default function CreateTweet() {
//     return "Blah"
// }

export default CreateTweet;
