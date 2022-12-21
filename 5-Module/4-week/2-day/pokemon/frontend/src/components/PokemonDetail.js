import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PokemonItems from './PokemonItems';
import EditPokemonForm from './EditPokemonForm';
import ItemForm from './ItemForm';
import { getSinglePokemon } from '../store/pokemon';

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon[pokemonId]);
  const [showEditPokeForm, setShowEditPokeForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    setShowEditPokeForm(false);
    setEditItemId(null);
	dispatch(getSinglePokemon(pokemonId));
  }, [dispatch, pokemonId]);

  if (!pokemon || !pokemon.move1) {
    return null;
  }

  let content = null;

  if (editItemId) {
    content = (
      <ItemForm 
        itemId={editItemId} 
        hideForm={() => setEditItemId(null)} 
      />
    );
  } else if (showEditPokeForm && pokemon.captured) {
    content = (
      <EditPokemonForm 
        pokemon={pokemon} 
        hideForm={() => setShowEditPokeForm(false)} 
      />
    );
  } else {
    content = (
		<div className="pokemon-detail-lists">
			<div>
				<h2>Information</h2>
				<ul>
					<li>
						<b>Number</b> {pokemon.number}
					</li>
					<li>
						<b>Type</b> {pokemon.type}
					</li>
					<li>
						<b>Attack</b> {pokemon.attack}
					</li>
					<li>
						<b>Defense</b> {pokemon.defense}
					</li>
					<li>
						<b>Moves</b>
						<ul>
							{pokemon.move1 && <li>{pokemon.move1}</li>}
							{pokemon.move2 && <li>{pokemon.move2}</li>}
						</ul>
					</li>
				</ul>
			</div>
			<div>
				<h2>
					Items
					<button> + </button>
				</h2>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Happiness</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<PokemonItems
							pokemon={pokemon}
							setEditItemId={setEditItemId}
						/>
					</tbody>
				</table>
			</div>
		</div>
	);
  }

  return (
    <div className="pokemon-detail">
      <div className={`pokemon-detail-image-background`}>
        <div
          className="pokemon-detail-image"
          style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
        ></div>
        <div>
          <h1 className="bigger">{pokemon.name}</h1>
          {(!showEditPokeForm && pokemon.captured) && (
            <button onClick={() => setShowEditPokeForm(true)}>Edit</button>
          )}
        </div>

      </div>
      {content}
    </div>
  );
};

export default PokemonDetail;