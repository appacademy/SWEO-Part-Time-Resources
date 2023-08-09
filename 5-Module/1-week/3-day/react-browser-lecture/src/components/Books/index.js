import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Books(){

	const params = useParams()
	console.log(params)
	const {bookId, page, line} = params
	return (
		<>
			BOOKS!
			{bookId}
			{page}
			{line}
		</>
	)
}

export default Books;
