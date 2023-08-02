import { useContext } from 'react'
import { CounterContext } from '../context/CounterContextProvider'

export const useCounter = () => {
	const {counter, setCounter} = useContext(CounterContext)
	return {counter, setCounter}
}
