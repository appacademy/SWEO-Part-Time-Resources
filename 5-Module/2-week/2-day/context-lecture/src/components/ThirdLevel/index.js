import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContextProvider';

function ThirdLevel(){

	const {counter, setCounter} = useContext(CounterContext)

	return (
		<>
			ThirdLevel
			<div>
				Counter: {counter}
			</div>
			<button onClick={()=> setCounter(prev=> prev+1)}>
				Increment Counter
			</button>
		</>
	)
}

export default ThirdLevel;
