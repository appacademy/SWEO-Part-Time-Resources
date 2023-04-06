import { NavLink, Switch, Route } from 'react-router-dom';
import MovieDetails from '../MovieDetails';


function Movies({ movies }) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <span key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink> |
          </span>
        ))}
      </nav>
      <Switch>
        <Route path='/movies/:movieId'>
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies
