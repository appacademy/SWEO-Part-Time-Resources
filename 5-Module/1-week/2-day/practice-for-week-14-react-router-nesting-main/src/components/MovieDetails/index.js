import { useParams } from 'react-router-dom'

function MovieDetails({ movies }) {
  const { movieId } = useParams()
  const oneMovie = movies.find(el => el.id === parseInt(movieId, 10))
  console.log(oneMovie)
  return (
    <div className='comp purple'>
      <h1>{oneMovie.title}</h1>
      <p>{oneMovie.description}</p>
    </div>
  );
}

export default MovieDetails;