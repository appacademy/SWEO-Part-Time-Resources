//!!START SILENT
import { useParams } from 'react-router-dom';

function MovieDetails(props) {
  const { movieId } = useParams();
  
  const movieChoice = props.movies.find((movie) => movie.id === +movieId);

//!!END
//!!ADD
// function MovieDetails() {
//!!END_ADD
  return (
    <div className='comp purple'>
      {/*!!ADD */}
      {/* <h1>MovieDetails Component</h1> */}
      {/*!!END_ADD */}
      {/*!!START SILENT */}
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
      {/*!!END */}
    </div>
  );
}

export default MovieDetails;
