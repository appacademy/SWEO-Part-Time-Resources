import {createContext, useState} from 'react'

export const CounterContext = createContext()


export default function CounterContextProvider({children}){

	const [counter, setCounter] = useState(0)

	return (
		<CounterContext.Provider value={{"counter" : counter,
									"setCounter": setCounter}}>
			{children}
		</CounterContext.Provider>
	)
}
