import { Route, Switch, NavLink } from 'react-router-dom'
import MovieDetails from '../MovieDetails'
function Movies({ movies }) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map(el => {
          return (
            <NavLink
            style={{
              border : '1px solid blue',
              padding : '10px',
              marginLeft : '10px'
            }}
            key={el.id} to={`/movies/${el.id}`}>{el.title}</NavLink>
          )
        })}
      </nav>
      <Switch>
        <Route path='/movies/:movieId' >
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;