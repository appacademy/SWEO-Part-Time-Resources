import { useCounter } from "../../hooks/useCounter";

function ThirdLevel(){

	const {counter, setCounter} = useCounter()

	return(<>
		ThirdLevel
		<div>
			Count: {counter}
		</div>
		<button onClick={()=> setCounter(prev => prev+1)}>
			Increment Counter
		</button>
	</>)
}

export default ThirdLevel;
