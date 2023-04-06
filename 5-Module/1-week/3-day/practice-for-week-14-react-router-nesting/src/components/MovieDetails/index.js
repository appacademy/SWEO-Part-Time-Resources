import { useParams } from 'react-router-dom';

function MovieDetails(props) {
  const { movieId } = useParams();

  const movieChoice = props.movies.find((movie) => movie.id === +movieId);

  return (
    <div className='comp purple'>
      <h1>MovieDetails Component</h1>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}


export default MovieDetails;
