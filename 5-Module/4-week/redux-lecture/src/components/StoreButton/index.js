import { loadPlaces } from "../../store/places";
import { fetchObjects } from "../../store/objects";
import { useDispatch } from "react-redux";

function StoreButton() {

	const dispatch = useDispatch()

	const handlePlaceChange = () => {
		dispatch(fetchObjects())
	}

	return (<>
		<button onClick={handlePlaceChange}>
			Change Place
		</button>
	</>)
}

export default StoreButton;
