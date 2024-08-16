import { FavFruitContext } from '../context/FavFruitContext';
import {useContext} from 'react'


 const useStupidHook = (fruits) => {
    const {favFruitId} = useContext(FavFruitContext)

    const fruit = fruits.find(fruit => fruit.id === favFruitId)
    return fruit
}

export default useStupidHook