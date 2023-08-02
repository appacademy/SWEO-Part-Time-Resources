import ThirdLevel from "../ThirdLevel";
import { useTheme } from "../../hooks/useTheme";

function SecondLevel(){

	const style = useTheme();

	return(<>
		SecondLevel
		<div style={style}>
			<ThirdLevel/>
		</div>
	</>)
}

export default SecondLevel;
