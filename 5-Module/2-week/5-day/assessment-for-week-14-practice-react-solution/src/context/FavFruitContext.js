import { createContext, useState, useContext } from 'react';

export const FavFruitContext = createContext();
export const useFavFruit = () => useContext(FavFruitContext);

export default function FavFruitProvider(props) {
  const [favFruitId, setFavFruitId] = useState('1');

  return (
    <FavFruitContext.Provider
      value={{
        favFruitId,
        setFavFruitId
      }}
    >
      {props.children}
    </FavFruitContext.Provider>
  )
}