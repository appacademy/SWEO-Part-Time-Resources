import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Houses(){

	const params = useParams() // context
	const {houseId} = params
	console.log(houseId)
	return (
		<>
			Houses!
		</>
	)
}

export default Houses;
