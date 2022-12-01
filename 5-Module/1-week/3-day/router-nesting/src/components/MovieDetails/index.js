import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
	const { movieId } = useParams();

	const movieSelection = movies.find(
		(movie) => parseInt(movieId) === movie.id
	);
	
	return (
		<div className="comp purple">
			<h1>{movieSelection.title}</h1>
      <p>{movieSelection.description}</p>
		</div>
	);
}

export default MovieDetails;
