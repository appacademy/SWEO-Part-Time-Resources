import { useContext, useState } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Match = () => {
    const [match, setMatch] = useState(false);
    const { sign } = useContext(HoroscopeContext);
    console.log('Rendering from match')

    return (
        <div>
            <button onClick={() => setMatch(!match)}>
                {match ? 'Hide Match' : 'Show Match'}
            </button>
            {match && <div>{sign.match}</div>}
        </div>
    )
}

export default Match;