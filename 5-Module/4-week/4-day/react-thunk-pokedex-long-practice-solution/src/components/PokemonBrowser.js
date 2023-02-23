import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import PokemonDetail from './PokemonDetail';
import CreatePokemonForm from './CreatePokemonForm';
import Fab from './Fab';
import { getPokemon } from '../store/pokemon';

const PokemonBrowser = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  const pokemon = useSelector(state => {
    return state.pokemon.list.map(pokemonId => state.pokemon[pokemonId]);
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <nav>
        <Fab hidden={showForm} onClick={() => setShowForm(true)} />
        {pokemon.map((pokemon) => {
          return (
            <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
              <div
                className={
                  Number.parseInt(pokemonId) === pokemon.id
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }
              >
                <div
                  className="nav-entry-image"
                  style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
                ></div>
                <div>
                  <div className="primary-text">{pokemon.name}</div>
                  <div className="secondary-text">
                    {pokemon.number} {pokemon.captured && "(Captured)"}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
      {showForm ? (
        <CreatePokemonForm hideForm={() => setShowForm(false)} />
      ) : (
        <Route path="/pokemon/:pokemonId">
          <PokemonDetail/>
        </Route>
      )}
    </main>
  );
};

export default PokemonBrowser;