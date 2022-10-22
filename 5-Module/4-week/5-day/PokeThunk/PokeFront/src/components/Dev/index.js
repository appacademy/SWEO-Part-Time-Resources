import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomPokemon, loadSeen } from '../../store/pokemon';
import './index.css';

const Dev = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector((store) => store.pokemon.random);
    const seen = useSelector((store) => store.pokemon.seen);
    const [knownPoke, setKnownPoke] = useState(seen ? seen.length : 0);

    const onButtonClick = () => {
        dispatch(getRandomPokemon());
    };

    useEffect(() => {
        if (pokemon && pokemon.imageUrl !== '/images/unknown.png') {
            console.log('THIS IS WORKING?');
            if (seen) {
                if (!seen.includes(pokemon.name)) {
                    dispatch(loadSeen(pokemon.name));
                    setKnownPoke((prev) => prev + 1);
                }
            } else {
                dispatch(loadSeen(pokemon.name));
                setKnownPoke(() => 1);
            }
        }
    }, [pokemon]);

    return (
        <div className="container">
            {pokemon ? (
                <>
                    <div className="item">{pokemon.name}</div>
                    <img src={pokemon.imageUrl} alt={pokemon.name} />
                </>
            ) : (
                <div className="item">No Random Pokemon Yet!</div>
            )}
            <button onClick={onButtonClick}>
                Click here for a Random Pokemon!
            </button>
            <div>Number of Known Pokemon Seen: {knownPoke}</div>
        </div>
    );
};

export default Dev;
