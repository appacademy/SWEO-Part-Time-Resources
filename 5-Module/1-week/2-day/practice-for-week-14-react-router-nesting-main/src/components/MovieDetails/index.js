import {useParams} from 'react-router-dom'
function MovieDetails({movies}) {
  const {movieId} = useParams()
  const singleMovie = movies.find(el => el.id === parseInt(movieId, 10))
  console.log(singleMovie)
  return (
    <div className='comp purple'>
      <h1>{singleMovie.title}</h1>
      <p>{singleMovie.description}</p>
    </div>
  );
}

export default MovieDetails;