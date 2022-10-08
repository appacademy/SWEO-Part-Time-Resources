import { createContext, useContext, useState } from 'react';

export const FavFruitContext = createContext();

export default function FavFruitProvider(props) {
    const [favFruitId, setFavFruitId] = useState('1');

    return (
        <FavFruitContext.Provider
            value={{
                favFruitId,
                setFavFruitId,
            }}
        >
            {props.children}
        </FavFruitContext.Provider>
    );
}

export const useFruit = () => useContext(FavFruitContext);
