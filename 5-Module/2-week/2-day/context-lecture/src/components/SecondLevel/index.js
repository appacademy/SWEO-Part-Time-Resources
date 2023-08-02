import ThirdLevel from "../ThirdLevel";
import { useCounter } from "../../hooks/useCounter";
import { useTheme } from "../../hooks/useTheme";

function SecondLevel(){

	const theme = useTheme()
	const {counter} = useCounter()

	return (
		<>
			SecondLevel
			<div style={theme.style}>
				Counter: {counter}
			</div>
			<div style={theme.style}>
				<ThirdLevel/>
			</div>

		</>
	)
}

export default SecondLevel;
