import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function HomePage(){

	const params = useParams() // context
	const {userId} = params

	console.log(userId)
	return (
		<>
			HomePage!
		</>
	)
}

export default HomePage;
